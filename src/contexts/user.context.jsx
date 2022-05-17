import { createContext, useEffect, useState } from "react";

import {
  onHandleAuthStateChange,
  createDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unscribe = onHandleAuthStateChange((user) => {
      console.log(user);
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
