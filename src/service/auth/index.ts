import { FirebaseError } from "firebase/app";
import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getErrorMessage } from "../errorMessage";
import { ServiceResponse } from "../firebaseResponse";
import { db } from "../firestore";
import { firebaseApp } from "../initFirebase";
import type { AuthParams } from "./type";

async function registerUser({
  email,
  password,
}: AuthParams): Promise<ServiceResponse<UserCredential>> {
  try {
    const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setDoc(doc(db, "company", userCredential.user.uid), {
      email,
    });

    return {
      isSuccess: true,
      data: userCredential,
    };
  } catch (e: unknown) {
    return {
      isSuccess: false,
      error: getErrorMessage(e as FirebaseError),
    };
  }
}

async function loginUser({
  email,
  password,
}: AuthParams): Promise<ServiceResponse<UserCredential>> {
  try {
    const auth = getAuth(firebaseApp);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { isSuccess: true, data: userCredential };
  } catch (e) {
    return {
      isSuccess: false,
      error: getErrorMessage(e as FirebaseError),
    };
  }
}

async function logoutUser(): Promise<ServiceResponse<void>> {
  const auth = getAuth(firebaseApp);

  try {
    await signOut(auth);
    return {
      isSuccess: true,
    };
  } catch (e) {
    return {
      isSuccess: false,
      error: getErrorMessage(e as FirebaseError),
    };
  }
}

export { loginUser, logoutUser, registerUser };
