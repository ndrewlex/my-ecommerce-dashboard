import { Firestore, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../initFirebase";

export const db: Firestore = getFirestore(firebaseApp);
