//NPM package
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function RestaurantProvider({ children }) {
  //state
  const [titleCat, setTitleCat] = useState("");
  const [descriptionCat, setDescriptionCat] = useState("");
  const [imageURLCat, setImageURLCat] = useState("");
  const [imageAltCat, setImageAltCat] = useState("");

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [heroURL, setHeroURL] = useState("");
  const [heroAlt, setHeroAlt] = useState("");
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
  const valuesProduct = {
    category,
    setCategory,
    title,
    setTitle,
    details,
    setDetails,
    description,
    setDescription,

    ingredients,
    setIngredients,
    price,
    setPrice,
    imageURL,
    setImageURL,
    imageAlt,
    setImageAlt,
    heroURL,
    setHeroURL,
    heroAlt,
    setHeroAlt,
  };
  //Methods

  function deleteCategory({ id, menu, setMenu }) {
    const clonedCategories = [...menu];
    const index = clonedCategories.findIndex((item) => item.id === id);

    clonedCategories.splice(index, 1);
    alert("Category deleted successfully");
    setMenu(clonedCategories);
  }

  return (
    <Context.Provider valuesProduct={valuesProduct} value={values}>
      {children}
    </Context.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(Context);
  const errorText =
    "To use useRestaurant(), you need to wrap the parent component with <RestaurantProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
