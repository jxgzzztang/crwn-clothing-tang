import { createContext, useEffect, useReducer } from "react";

import {
  onHandleAuthStateChange,
  createDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const DEFAULT_STATE = {
  currentUser: null
}

const USER_ACTION_TYPES = {
  CHANGE_CURRENT_USER: "CHANGE_CURRENT_USER"
}

const userReducer = (state, action) => {

  const { type, payload } = action

  switch(type) {
    case USER_ACTION_TYPES.CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`no handle ${type} type`)
  }

}

export const UserProvider = ({ children }) => {

  const [{ currentUser }, dispatch] = useReducer(userReducer, DEFAULT_STATE)
  const setCurrentUser = (payload) => dispatch({ type: USER_ACTION_TYPES.CHANGE_CURRENT_USER, payload })

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unscribe = onHandleAuthStateChange((user) => {
      if (user) {
        createDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return () => {
      unscribe();
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
