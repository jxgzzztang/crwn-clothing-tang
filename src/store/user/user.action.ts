import { USER_ACTION_TYPES } from "./user.types";

import {
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

export type UserEmailType = {
  email: string;
  password: string;
};

export type UserEmailNameType = UserEmailType & {
  displayName: string;
};

export type CurrentSccuessActionType = ActionWithPayload<
  USER_ACTION_TYPES.CHANGE_CURRENT_USER_SUCCESS,
  any
>;
export type CurrentFailActionType = ActionWithPayload<
  USER_ACTION_TYPES.CHANGE_CURRENT_USER_FAIL,
  Error
>;
export type CurrentStartActionType =
  Action<USER_ACTION_TYPES.CHANGE_CURRENT_USER_START>;

export type SignGoogleStartActionType =
  Action<USER_ACTION_TYPES.SIGN_IN_GOOGLE_USER_START>;

export type SignUserFailActionType = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_USER_FAIL,
  Error
>;
export type SignUserEmailActionType = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_EMAIL_USER_START,
  UserEmailType
>;
export type SignUpUserStartActionType = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  UserEmailNameType
>;
export type SignUpFailActionType = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAIL,
  Error
>;

export type SignOutUserStartActionType = Action<USER_ACTION_TYPES.SIGN_OUT_START>

export type SignOutUserSuccessActionType = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>

export type SignOutUserFailActionType = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAIL,
  Error
>;

export const changeCurrentSuccessAction = withMatcher(
  (payload: any): CurrentSccuessActionType => ({
    type: USER_ACTION_TYPES.CHANGE_CURRENT_USER_SUCCESS,
    payload,
  })
);

export const changeCurrentFailAction = withMatcher(
  (error: Error): CurrentFailActionType => ({
    type: USER_ACTION_TYPES.CHANGE_CURRENT_USER_FAIL,
    payload: error,
  })
);

export const changeCurrentStartAction = withMatcher(
  (): CurrentStartActionType => ({
    type: USER_ACTION_TYPES.CHANGE_CURRENT_USER_START,
  })
);

export const signInUserGoogleStartAction = withMatcher(
  (): SignGoogleStartActionType => ({
    type: USER_ACTION_TYPES.SIGN_IN_GOOGLE_USER_START,
  })
);

export const signInUserFailAction = withMatcher(
  (error: Error): SignUserFailActionType => ({
    type: USER_ACTION_TYPES.SIGN_IN_USER_FAIL,
    payload: error,
  })
);

export const signInUserEmailStartAction = withMatcher(
  (email: string, password: string): SignUserEmailActionType => ({
    type: USER_ACTION_TYPES.SIGN_IN_EMAIL_USER_START,
    payload: { email, password },
  })
);

export const signUpUserStartAction = withMatcher(
  (email: string, password: string, displayName: string): SignUpUserStartActionType => ({
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: { email, password, displayName },
  })
);

export const signUpUserFailAction = withMatcher(
  (error: Error): SignUpFailActionType => ({
    type: USER_ACTION_TYPES.SIGN_UP_FAIL,
    payload: error,
  })
);

export const signOutUserStartAction = withMatcher((): SignOutUserStartActionType => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START,
}));

export const signOutUserSuccessAction = withMatcher((): SignOutUserSuccessActionType => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
}));

export const signOutUserFailAction = withMatcher(
  (payload: Error): SignOutUserFailActionType => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAIL,
    payload,
  })
);
