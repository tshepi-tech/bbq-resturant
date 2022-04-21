// NPM packages
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home">
      <h1>resturant 🍲 </h1>
      <Link to="category/Menu">Menu </Link>
    </div>
  );
}
