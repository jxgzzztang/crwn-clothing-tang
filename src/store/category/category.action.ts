import { CATEGORIES_ACTION_TYPE } from "./category.types";

import type {
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import type { CategoryItem } from "./category.types";
import { withMatcher } from "../../utils/reducer/reducer.utils"

export type CategoriesSuccessType = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_SUCCESS,
  CategoryItem[]
>;

export type CategoriesStartType =
  Action<CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_START>;

export type CategoriesFailType = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_FAIL,
  Error
>;

export const changeCategoriesAction = withMatcher((
  category: CategoryItem[]
): CategoriesSuccessType => ({
  type: CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_SUCCESS,
  payload: category,
}))

export const changeCategoriesStartACtion = withMatcher((): CategoriesStartType => ({
  type: CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_START,
}));

export const changeCategoriesFailAction = withMatcher((
  error: Error
): CategoriesFailType => ({
  type: CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_FAIL,
  payload: error,
}));
