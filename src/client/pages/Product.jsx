//NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router";

//Project files
import ProductItem from "../components/ProductItem";
import { getCollection, getDocument } from "../../scripts/firestore";

export default function Product() {
  const { categoryId, subId, productId } = useParams();
  //Local state
  const [products, setProducts] = useState([]);
  const [document, setDocument] = useState({});

  useEffect(() => {
    async function loadData() {
      const data = await getCollection(
        `Restaurant/${categoryId}/Content/${subId}/Content/`
      );
      const documentData = await getDocument(
        `Restaurant/${categoryId}/Content/${subId}/Content/`,
        productId
      );
      setProducts(data);
      setDocument(documentData);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Product page hardcoded</h1>
      <ProductItem document={document} />
    </div>
  );
}
