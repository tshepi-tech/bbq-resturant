//NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router";

//Project files
import ProductList from "../components/ProductList";
import { getCollection, getDocument } from "../../scripts/firestore";

export default function Product() {
  const { categoryId, subId, productId } = useParams();
  //Local state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getCollection(
        `Restaurant/${categoryId}/Content/${subId}/Content/`
      );
      setProducts(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Product page hardcoded</h1>
      <ProductList products={products} />
    </div>
  );
}
