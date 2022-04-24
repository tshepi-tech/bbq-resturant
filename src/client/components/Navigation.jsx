//NPM packages
import { Link, NavLink } from "react-router-dom";

//Project files
import sizzleLogo from "../../media/sizzleLogo.png";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={sizzleLogo} alt="Logo of restuarant" />
      </Link>
      <ul>
        <NavLink className="NavLink" to="category/Menu">
          Menu{" "}
        </NavLink>
        <NavLink className="NavLink" to="contact">
          Contact{" "}
        </NavLink>
        <NavLink className="NavLink" to="Admin">
          Admin
        </NavLink>
      </ul>
    </nav>
  );
}
