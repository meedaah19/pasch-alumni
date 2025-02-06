import {auth} from './firebase';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updatePassword } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password, firstName);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  result.user;  
  return result;
};

export const doSignOut = () => {
  return auth.signOut();
}

export const doPasswordRest = (email) => {
  return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password) => {         
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {          
  return sendEmailVerification(auth.currentUser, {
    url:` ${window.location.origin}/home`,
  });
};