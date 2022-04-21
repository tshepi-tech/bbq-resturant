//NPM package
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

//Project files
import { firestore } from "./firebase";

// Methods
export async function getDocument(path, id) {
  const documentPath = doc(firestore, path, id);
  const document = await getDoc(documentPath);

  return document.data();
}
export async function getCollection(path) {
  const collectionPath = collection(firestore, path);
  const snapshot = await getDocs(collectionPath);
  const documents = snapshot.docs.map((item) => {
    return { id: item.id, ...item.data() };
  });

  return documents;
}
