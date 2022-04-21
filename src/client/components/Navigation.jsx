//NPM packages
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h4>Sizzle-BBQ</h4>
      </Link>
      <ul>
        <NavLink to="category/Menu">Menu </NavLink>
        <NavLink to="contact">Contact </NavLink>
        <NavLink to="Admin">Admin</NavLink>
      </ul>
    </nav>
  );
}
