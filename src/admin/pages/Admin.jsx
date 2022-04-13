//NPM packages
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

//Project files
import CategoryList from "../componentsAdmin/CategoryList";
import InputCategory from "../componentsAdmin/InputCategory";
import { fireStore } from "../../scripts/firebase";
import inputSetup from "../../data/inputSetup.json";

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
        <InputCategory
          state={[category, setCategory]}
          setup={inputSetup.category}
        />
        <InputCategory
          state={[descriptionLng, setDescriptionLng]}
          setup={inputSetup.descriptionLng}
        />
        <InputCategory
          state={[imageURL, setImageURL]}
          setup={inputSetup.imageURL}
        />
        <button onClick={onCreate}>submit</button>
      </form>
      <CategoryList menu={menu} />
    </div>
  );
}
