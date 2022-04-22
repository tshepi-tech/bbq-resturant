//Project files
import CategoryItem from "./CategoryItem";

export default function CategoryList({ menu, onDelete, editContent }) {
  //Components
  const categories = menu.map((item) => (
    <CategoryItem
      editContent={editContent}
      onDelete={onDelete}
      key={item.id}
      item={item}
    />
  ));
  return <div>{categories}</div>;
}
