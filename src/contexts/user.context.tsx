import { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from 'utils/firebase/firebase.utils';

interface IUserContext {
  currentUser: unknown;
  setCurrentUser: Dispatch<SetStateAction<T>>;
}

// actual value you want to access
export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const ubsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return ubsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
