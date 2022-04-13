//Project files
import CategoryItem from "./CategoryItem";

export default function CategoryList({ menu }) {
  //Components
  const categories = menu.map((item) => (
    <CategoryItem key={item.id} item={item} />
  ));
  return <div>{categories}</div>;
}

{
  /*onDelete={onDelete}*/
}
