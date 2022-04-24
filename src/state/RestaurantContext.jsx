//NPM package
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function RestaurantProvider({ children }) {
  //state
  const [titleCat, setTitleCat] = useState("");
  const [descriptionCat, setDescriptionCat] = useState("");
  const [imageURLCat, setImageURLCat] = useState("");
  const [imageAltCat, setImageAltCat] = useState("");
  //Properties
  const values = {
    descriptionCat,
    setDescriptionCat,
    titleCat,
    setTitleCat,
    deleteCategory,
    imageURLCat,
    setImageURLCat,
    imageAltCat,
    setImageAltCat,
  };

  //Methods
  const newCategory = {
    title: titleCat,
    description: descriptionCat,
    imageURL: imageURLCat,
    imageAlt: imageAltCat,
    id: titleCat,
  };

  function deleteCategory({ id, menu, setMenu }) {
    const clonedCategories = [...menu];
    const index = clonedCategories.findIndex((item) => item.id === id);

    clonedCategories.splice(index, 1);
    alert("Category deleted successfully");
    setMenu(clonedCategories);
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useRestaurant() {
  const context = useContext(Context);
  const errorText =
    "To use useRestaurant(), you need to wrap the parent component with <RestaurantProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
