//Project files
import CategoryItem from "./CategoryItem";

export default function CategoryList({ products }) {
  const productList = products.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));
  return <div>{productList}</div>;
}
