import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project config
const firebaseConfig = {
  apiKey: 'AIzaSyCjUWodvt6WH0KSEFYoZj-Rh0sY5dVLKVU',
  authDomain: 'crwn-db-b41d8.firebaseapp.com',
  projectId: 'crwn-db-b41d8',
  storageBucket: 'crwn-db-b41d8.appspot.com',
  messagingSenderId: '435459847918',
  appId: '1:435459847918:web:8d77c0c39a45d735d9a5ff',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  //                  database, collection, uniqueID
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user doesn't exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // create new user
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log('error creating the user', e.message);
    }
  }

  // return user data
  return userDocRef;
};
