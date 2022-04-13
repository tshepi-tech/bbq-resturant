//Project files
import CategoryList from "../componentsAdmin/CategoryList";

export default function Admin({ menuState }) {
  const [menu, setMenu] = menuState;

  return (
    <div>
      <CategoryList menu={menu} />
    </div>
  );
}
