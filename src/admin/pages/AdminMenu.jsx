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
import { useRestaurant } from "../../state/RestaurantContext";

export default function AdminMenu() {
  const { categoryId } = useParams();
  const {
    descriptionCat,
    setDescriptionCat,
    titleCat,
    setTitleCat,
    deleteCategory,
    imageURLCat,
    setImageURLCat,
    imageAltCat,
    setImageAltCat,
  } = useRestaurant();

  // Local state
  const [document, setDocument] = useState({});
  const [menu, setMenu] = useState([]);

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
    title: titleCat,
    description: descriptionCat,
    imageURL: imageURLCat,
    imageAlt: imageAltCat,
    id: titleCat,
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
    setTitleCat("");
    setDescriptionCat("");
    setImageURLCat("");
    setImageAltCat("");
  }

  async function onDelete(id) {
    await deleteDocument("Restaurant/Menu/Content", id);
    deleteCategory({ id, menu, setMenu });
  }

  return (
    <div>
      <h2>Admin panel for changing categories</h2>
      <InputFieldMenu onCreate={onCreate} />
      <CategoryList onDelete={onDelete} menu={menu} />
    </div>
  );
}
