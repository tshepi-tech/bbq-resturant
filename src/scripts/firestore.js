//NPM package
import { collection, getDocs } from "firebase/firestore";

//Project files
import { fireStore } from "./firebase";

// methods
export async function getCollection(path) {
  const collectionPath = collection(fireStore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}
