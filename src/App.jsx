//NPM packages
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

//Project files
import Admin from "./admin/pages/Admin";
import Contact from "./client/pages/Contact";
import Home from "./client/pages/Home";
import Menu from "./client/pages/Menu";
import Navigation from "./client/components/Navigation";
import { getCollection } from "../src/scripts/firestore";

export default function App() {
  //local state
  const [menu, setMenu] = useState([]);

  //method
  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);

      setMenu(data);
    }
    loadData("menu");
  }, []);

  return (
    <div className="App">
      <h1>BBQ resturant</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin menuState={[menu, setMenu]} />} />
      </Routes>
    </div>
  );
}
