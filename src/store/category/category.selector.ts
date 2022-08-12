import { createSelector } from "reselect"

import type { Category, Categories } from "./category.types"
import type { RootState } from "../index"
 
const categorySelectorReducer = (state: RootState): Category => state.category

const categoriesSelector = createSelector([categorySelectorReducer], category => category.categories)

export const categorySelector = createSelector([categoriesSelector], categories => {
  return categories?.reduce((acc, doc) => {
    const { title, items } = doc
    acc[title.toLowerCase()] = items
    return acc
  }, {} as Categories)
})

export const categoryLoadingSelector = createSelector(categorySelectorReducer, categories => categories.loading)