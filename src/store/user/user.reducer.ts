import { AnyAction } from "redux";
import { UserType } from "./user.types";
import {
  changeCurrentSuccessAction,
  signOutUserSuccessAction,
  signInUserFailAction,
  changeCurrentFailAction,
  signUpUserFailAction,
  signOutUserFailAction,
} from "./user.action";

const USER_DEFAULT_STATE: UserType = {
  currentUser: null,
  error: null,
};

const userReducer = (state = USER_DEFAULT_STATE, action: AnyAction): UserType => {
  if (changeCurrentSuccessAction.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutUserSuccessAction.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signInUserFailAction.match(action) ||
    changeCurrentFailAction.match(action) ||
    signUpUserFailAction.match(action) ||
    signOutUserFailAction.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};

export default userReducer;
