//NPM package
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

//Project files
import { firestore } from "./firebase";

// Methods

//--Create
export async function createDocument(path, data) {
  const documentPath = collection(firestore, path);
  const document = await addDoc(documentPath, data);

  return document.id;
}

//-- Read
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

// -- Delete
export async function deleteDocument(path, id) {
  const documentPath = doc(firestore, path, id);

  await deleteDoc(documentPath);
  console.log("Deleted document successfully", id);
}
