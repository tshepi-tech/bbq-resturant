//NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import {
  getCollection,
  getDocument,
  createDocument,
} from "../../scripts/firestore";

export default function AdminProducts() {
  const { categoryId, subId, productId } = useParams();

  const [products, setProducts] = useState([]);

  const [category, setCategoroy] = useState("seafood");
  const [title, setTitle] = useState("hake");
  const [details, setDetails] = useState("crispy baked hake");
  const [description, setDescription] = useState(
    "the meal is served with eithe fries or salad"
  );
  const [ingredients, setIngredients] = useState("fish spice,hake,flour");
  const [price, setPrice] = useState("120");
  const [imageURL, setImageURL] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRautT1BLDvEXfdPw1tsdcZr8DbBjyAvWjzUQ&usqp=CAU"
  );
  const [imageAlt, setImageAlt] = useState("hake with broccoli");
  const [heroURL, setHeroURL] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtUzDiNbPfVhfm3JMyJmv11FBfL2WlHqi5Q&usqp=CAU"
  );
  const [heroAlt, setHeroAlt] = useState("hake with fries");

  async function onCreate(event) {
    event.preventDefault();
    const newProduct = {
      category: category,
      title: title,
      details: details,
      description: description,
      ingredients: ingredients,
      price: price,
      imageURL: imageURL,
      imageAlt: imageAlt,
      heroURL: heroURL,
      heroAlt: heroAlt,
    };
    const documentId = await createDocument(
      `Restaurant/Menu/Content/${newProduct.category}/Content`,
      newProduct
    );
    newProduct.id = documentId;
    setProducts([...products, newProduct]);
    console.log("done");
  }

  return (
    <div>
      {" "}
      <h1>Products</h1>
      <button onClick={onCreate}>Add</button>
    </div>
  );
}
