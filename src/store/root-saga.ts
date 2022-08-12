import { all, call } from "typed-redux-saga"

import { categorySaga } from "./category/category.saga"
import { userSaga } from "./user/user.saga"

export default function* rootSaga() {
  yield* all([call(categorySaga), call(userSaga)])
}