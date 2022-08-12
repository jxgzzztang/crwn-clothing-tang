import { takeLatest, put, call, all } from "typed-redux-saga/macro";
import { User } from "firebase/auth"

import { USER_ACTION_TYPES } from "./user.types";
import {
  changeCurrentSuccessAction,
  changeCurrentFailAction,
  signInUserFailAction,
  signUpUserFailAction,
  signOutUserFailAction,
  signOutUserSuccessAction,
  SignUserEmailActionType,
  SignUpUserStartActionType
} from "./user.action";

import {
  getCurrentUser,
  createDocumentFromAuth,
  signInGooglePopup,
  signAuthWithEmailAndPassword,
  createUserEmailAndPasswordFromAuth,
  signOutAuth,
  addtionalDetail
} from "../../utils/firebase/firebase.utils";

export function* getSnapsDocumentFronAuth(user: User, addtionalDetail?: addtionalDetail) {
  try {
    const snaps = yield* call(createDocumentFromAuth, user, addtionalDetail);
    yield* put(changeCurrentSuccessAction({ ...snaps.data(), id: snaps.id }));
  } catch (error) {
    yield* put(changeCurrentFailAction(error as Error));
  }
}

export function* changeCurrentHandle() {
  try {
    const user = yield* call(getCurrentUser);
    if (!user) return;
    yield* call(getSnapsDocumentFronAuth, user);
  } catch (error) {
    yield* put(changeCurrentFailAction(error as Error));
  }
}

export function* signInGoogleHandle() {
  try {
    const { user } = yield* call(signInGooglePopup);
    yield* call(getSnapsDocumentFronAuth, user);
  } catch (error) {
    yield* put(signInUserFailAction(error as Error));
  }
}

export function* signInEmailHandle({ payload: { email, password } }: SignUserEmailActionType) {
  try {
    const createDentials = yield* call(signAuthWithEmailAndPassword, email, password);
    if(createDentials) {
      yield* call(getSnapsDocumentFronAuth, createDentials.user);
    }
  } catch (error) {
    yield* put(signInUserFailAction(error as Error));
  }
}

export function* signUpHandle({ payload: { email, password, displayName } }: SignUpUserStartActionType) {
  try {
    const creatDentials = yield* call(
      createUserEmailAndPasswordFromAuth,
      email,
      password
    );
    if(creatDentials)
      yield* call(getSnapsDocumentFronAuth, creatDentials.user, { displayName });
  } catch (error) {
    yield* put(signUpUserFailAction(error as Error));
  }
}

export function* signOutHandle() {
  try {
    yield* call(signOutAuth);
    yield* put(signOutUserSuccessAction());
  } catch (error) {
    yield* put(signOutUserFailAction(error as Error));
  }
}

export function* onSignOut() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutHandle);
}

export function* onSignUp() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpHandle);
}

export function* onSignInEmailAndPassword() {
  yield* takeLatest(
    USER_ACTION_TYPES.SIGN_IN_EMAIL_USER_START,
    signInEmailHandle
  );
}

export function* onSignInGoogle() {
  yield* takeLatest(
    USER_ACTION_TYPES.SIGN_IN_GOOGLE_USER_START,
    signInGoogleHandle
  );
}

export function* onChangeGetCurrentUser() {
  yield* takeLatest(
    USER_ACTION_TYPES.CHANGE_CURRENT_USER_START,
    changeCurrentHandle
  );
}

export function* userSaga() {
  yield* all([
    call(onChangeGetCurrentUser),
    call(onSignInGoogle),
    call(onSignInEmailAndPassword),
    call(onSignUp),
    call(onSignOut),
  ]);
}
