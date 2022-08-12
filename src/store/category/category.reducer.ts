import type { AnyAction } from "redux";

import type { Category } from "./category.types";
import {
  changeCategoriesAction,
  changeCategoriesFailAction,
  changeCategoriesStartACtion,
} from "./category.action";

const CATEGORY_DEFAULT_STATE: Category = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesReducer = (
  state = CATEGORY_DEFAULT_STATE,
  action = {} as AnyAction
): Category => {
  if (changeCategoriesAction.match(action)) {
    return {
      ...state,
      categories: action.payload,
      loading: false,
    };
  }
  if (changeCategoriesStartACtion.match(action)) {
    return {
      ...state,
      loading: true,
    };
  }
  if (changeCategoriesFailAction.match(action)) {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }

  return state;
};

export default categoriesReducer;
