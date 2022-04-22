//NPM pacakages
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import CategoryList from "../componentsAdmin/CategoryList";
import { deleteDocument } from "../../scripts/firestore";
import { firestore } from "../../scripts/firebase";
import InputFieldMenu from "../componentsAdmin/InputFieldMenu";
import { getCollection, getDocument } from "../../scripts/firestore";

export default function AdminMenu() {
  const { categoryId } = useParams();

  // Local state
  const [document, setDocument] = useState({});
  const [menu, setMenu] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  // Methods
  useEffect(() => {
    async function loadData() {
      const documentData = await getDocument("Restaurant", categoryId);
      const menuData = await getCollection(`Restaurant/${categoryId}/Content/`);
      setDocument(documentData);
      setMenu(menuData);
    }
    loadData();
  }, []);

  //Adding items
  const newCategory = {
    title: title,
    description: description,
    imageURL: imageURL,
    imageAlt: imageAlt,
    id: title,
  };

  async function onCreate(event) {
    event.preventDefault();

    await setDoc(
      doc(firestore, "Restaurant/Menu/Content", `${newCategory.title}`),
      newCategory
    );
    setMenu([...menu, newCategory]);
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setImageURL("");
    setImageAlt("");
  }
  async function onDelete(id) {
    await deleteDocument("Restaurant/Menu/Content", id);

    const clonedCategories = [...menu];
    console.log(clonedCategories);
    const index = clonedCategories.findIndex((item) => item.id === id);

    clonedCategories.splice(index, 1);
    console.log(id);
    setMenu(clonedCategories);
  }

  function editContent(id) {
    const clonedCategories = [...menu];
    const itemToEdit = clonedCategories.filter((item) => item.id === id);
    console.log(itemToEdit);
  }

  return (
    <div>
      <h2>Admin panel for changing categories</h2>
      <InputFieldMenu
        titleState={[title, setTitle]}
        descriptionState={[description, setDescription]}
        imageState={[imageURL, setImageURL]}
        altState={[imageAlt, setImageAlt]}
        onCreate={onCreate}
      />
      <CategoryList editContent={editContent} onDelete={onDelete} menu={menu} />
    </div>
  );
}
