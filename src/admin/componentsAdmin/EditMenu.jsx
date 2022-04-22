//NPM
import { useState } from "react";

//Project files
import InputFieldMenu from "./InputFieldMenu";

export default function EditMenu() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  return (
    <div>
      <h2>Edit category</h2>
      <InputFieldMenu
        titleState={[title, setTitle]}
        descriptionState={[description, setDescription]}
        imageState={[imageURL, setImageURL]}
        altState={[imageAlt, setImageAlt]}
      />
    </div>
  );
}
