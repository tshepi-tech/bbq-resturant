//Project files
import CategoryItem from "./CategoryItem";

export default function CategoryList({ menu, onDelete }) {
  //Components
  const categories = menu.map((item) => (
    <CategoryItem onDelete={onDelete} key={item.id} item={item} />
  ));
  return <div>{categories}</div>;
}
