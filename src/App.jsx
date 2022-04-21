//NPM packages
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

//Project files
//import Admin from "./admin/pages/Admin";
import Category from "./client/pages/Category";
import Product from "./client/pages/Product";
import Contact from "./client/pages/Contact";
import Home from "./client/pages/Home";
import Menu from "./client/pages/Menu";
import Navigation from "./client/components/Navigation";
import { getCollection } from "../src/scripts/firestore";

export default function App() {
  return (
    <div className="App">
      <h1>BBQ resturant</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryId" element={<Menu />} />
        <Route path="category/:categoryId/:subId" element={<Category />} />
        <Route
          path="category/:categoryId/:subId/:productId"
          element={<Product />}
        />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
