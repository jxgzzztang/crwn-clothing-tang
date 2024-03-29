import { UserDataType } from "../../utils/firebase/firebase.utils"

export enum USER_ACTION_TYPES {
  CHANGE_CURRENT_USER_START = "user/CHANGE_CURRENT_USER_START",
  CHANGE_CURRENT_USER_SUCCESS =  "user/CHANGE_CURRENT_USER_SUCCESS",
  CHANGE_CURRENT_USER_FAIL = "user/CHANGE_CURRENT_USER_FAIL",
  SIGN_IN_GOOGLE_USER_START = "user/SIGN_IN_GOOGLE_USER_START",
  SIGN_IN_USER_FAIL = "user/SIGN_IN_USER_FAIL",
  SIGN_IN_EMAIL_USER_START = "user/SIGN_IN_EMAIL_USER_START",
  SIGN_UP_START = "user/SIGN_UP_START",
  SIGN_UP_FAIL = "user/SIGN_UP_FAIL",
  SIGN_OUT_START = "user/SIGN_OUT_START",
  SIGN_OUT_FAIL = "user/SIGN_OUT_FAIL",
  SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS"
}

export type UserType = {
  error: null | Error,
  currentUser: null | UserDataType
}