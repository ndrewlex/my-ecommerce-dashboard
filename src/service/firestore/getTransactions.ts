import { Firestore, collection, getDocs } from "firebase/firestore";

async function getTransactions(db: Firestore) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export { getTransactions };
