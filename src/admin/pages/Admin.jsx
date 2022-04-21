//NPM packages
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <h1>Welcome admin</h1>
      <p>Make changes to: </p>
      <Link to="page/Menu">Categories</Link>
      <br />
      <Link to="/adminProduct">Products</Link>
    </div>
  );
}
