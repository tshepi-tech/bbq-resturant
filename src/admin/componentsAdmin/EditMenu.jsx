//NPM
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router";

//Project files
import { useRestaurant } from "../../state/RestaurantContext";
import InputFieldMenu from "./InputFieldMenu";
import { firestore } from "../../scripts/firebase";
import InputMenuUpdate from "./InputMenuUpdate";

export default function EditMenu() {
  const { id } = useParams();

  const { descriptionCat, titleCat, imageURLCat, imageAltCat } =
    useRestaurant();

  const updateCategory = {
    title: titleCat,
    description: descriptionCat,
    imageURL: imageURLCat,
    imageAlt: imageAltCat,
    id: titleCat,
  };

  async function onUpdate() {
    const updateItem = doc(firestore, "Restaurant/Menu/Content", `${id}`);

    await updateDoc(updateItem, {
      updateCategory,
    });
    console.log("updated");
  }

  return (
    <div>
      <InputMenuUpdate onUpdate={onUpdate} />
    </div>
  );
}
