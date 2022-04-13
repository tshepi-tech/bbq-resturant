//Project files
import MenuList from "../components/MenuList";

export default function Menu({ menuState }) {
  const [menu, setMenu] = menuState;

  return (
    <div>
      <MenuList menu={menu} />
    </div>
  );
}
