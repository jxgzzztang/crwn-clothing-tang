import { createSelector } from "reselect";
import { UserType } from "./user.types"

import { RootState } from "../index"

export const userSelector = (state: RootState): UserType => state.user;

export const userCurrentSelector = createSelector(
  [userSelector],
  (user) => user.currentUser
);
