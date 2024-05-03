import type { FirebaseError } from "firebase/app";

export function getErrorMessage(err: FirebaseError) {
  if (err.code === "auth/invalid-credential") {
    return "Invalid Credentials, please try again";
  } else if (err.code === "auth/invalid-email") {
    return "Invalid Email, please try again";
  }
  return "Something went wrong, please try again";
}
