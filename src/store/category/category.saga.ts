import { call, put, takeLatest, all } from "typed-redux-saga/macro"

import { CATEGORIES_ACTION_TYPE } from "./category.types"
import { changeCategoriesAction, changeCategoriesFailAction } from "./category.action"

import { queryCollectionForCategories } from "../../utils/firebase/firebase.utils"

export function* categoryStartHandle() {
  try {
    const data = yield* call(queryCollectionForCategories)
    yield* put(changeCategoriesAction(data))
  } catch(error) {
    yield* put(changeCategoriesFailAction(error as Error))
  }
}

export function* onChangeCategory() {
  yield* takeLatest(CATEGORIES_ACTION_TYPE.CHANGE_CATEGORIES_START, categoryStartHandle)
}

export function* categorySaga() {
  yield* all([call(onChangeCategory)])
}