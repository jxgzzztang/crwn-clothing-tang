import { createContext, useEffect, useReducer } from "react";

import { queryCollectionForCategories } from "../utils/firebase/firebase.utils"

export const CategoriesContext = createContext({
  categories: {},
});

const DEFAULT_STATE = {
  categories: {}
}

const CATEGORIES_ACTION_TYPE = {
  CHANGE_CATEGORIES: "CHANGE_CATEGORIES"
}

const categoriesReducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    default:
      throw new Error(`no handle ${type} type `)
  }

}

export const CategoriesProvider = ({ children }) => {
  
  const [{categories}, dispatch] = useReducer(categoriesReducer, DEFAULT_STATE)

  const setCategories = (payload) => dispatch({type: CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES, payload})

  useEffect(() => {
    const queryCategories = async () => {
      const data = await queryCollectionForCategories()
      setCategories(data)
    }

    queryCategories()
  }, [])

  const value = { categories, setCategories };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

export default CategoriesProvider