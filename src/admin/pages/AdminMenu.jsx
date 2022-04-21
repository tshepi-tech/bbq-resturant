//NPM pacakages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import CategoryList from "../componentsAdmin/CategoryList";
import InputFieldMenu from "../componentsAdmin/InputFieldMenu";
import { getCollection, getDocument } from "../../scripts/firestore";

export default function AdminMenu() {
  const { categoryId } = useParams();

  // Local state
  const [document, setDocument] = useState({});
  const [menu, setMenu] = useState([]);

  const [title, setTitle] = useState("seafood");
  const [description, setDescription] = useState("the water's finest");
  const [imageURL, setImageURL] = useState(
    "https://static.onecms.io/wp-content/uploads/sites/19/2012/06/11/snapper-zucchini-tomato-ck-x.jpg"
  );
  const [imageAlt, setImageAlt] = useState(
    "a picture of fried hake on a plate"
  );

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

  return (
    <div>
      <h2>Admin panel for changing categories</h2>
      <CategoryList menu={menu} />
      <InputFieldMenu />
    </div>
  );
}
