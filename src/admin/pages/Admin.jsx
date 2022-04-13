//NPM packages
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

//Project files
import CategoryList from "../componentsAdmin/CategoryList";
import { fireStore } from "../../scripts/firebase";

export default function Admin({ menuState }) {
  //Local state
  const [menu, setMenu] = menuState;
  const [category, setCategory] = useState("");
  const [descriptionLng, setDescriptionLng] = useState("");
  const [imageURL, setImageURL] = useState("");

  const newCategory = {
    category: category,
    descriptionLng: descriptionLng,
    imageURL: imageURL,
    id: Date.now(),
  };

  // Add a new document with a generated id.
  async function onCreate(event) {
    event.preventDefault();
    await addDoc(collection(fireStore, "menu"), {
      newCategory,
    });

    setMenu([...menu, newCategory]);
  }

  return (
    <div>
      <form onSubmit={onCreate}>
        <h4>Add category</h4>
        <label>
          Category name
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>
        <h4>Add description</h4>
        <label>
          category description
          <input
            type="text"
            value={descriptionLng}
            onChange={(event) => setDescriptionLng(event.target.value)}
          />
        </label>
        <label>
          image link
          <input
            type="text"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
        </label>
        <button onClick={onCreate}>submit</button>
      </form>
      <CategoryList menu={menu} />
    </div>
  );
}
