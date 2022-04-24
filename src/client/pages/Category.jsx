//NPM packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import { getCollection } from "../../scripts/firestore";
import CategoryList from "../components/CategoryList";

export default function Category() {
  const { categoryId, subId } = useParams();

  //Local state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getCollection(
        `Restaurant/${categoryId}/Content/${subId}/Content`
      );
      setProducts(data);
    }
    loadData();
  }, []);
  return (
    <div className="category">
      <div className="category_heading">
        <h1>{subId}</h1>
      </div>

      <CategoryList products={products} />
    </div>
  );
}
