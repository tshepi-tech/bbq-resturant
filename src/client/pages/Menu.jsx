//NPM pacakages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import MenuList from "../components/MenuList";
import { getCollection, getDocument } from "../../scripts/firestore";

export default function Menu() {
  const { categoryId } = useParams();

  // Local state
  const [document, setDocument] = useState({});
  const [menu, setMenu] = useState([]);

  // Methods
  useEffect(() => {
    async function loadData() {
      const documentData = await getDocument("Restaurant", categoryId);
      const menuData = await getCollection(`Restaurant/${categoryId}/Content/`);
      setDocument(documentData);
      setMenu(menuData);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Menu page hardcoded</h1>
      <MenuList menu={menu} />
    </div>
  );
}
