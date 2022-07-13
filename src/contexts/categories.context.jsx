import { createContext, useEffect, useState } from "react";

import { queryCollectionForCategories } from "../utils/firebase/firebase.utils"

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  
  const [categories, setCategories] = useState({})

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