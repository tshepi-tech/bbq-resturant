//NPM packages
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function MenuItem({ item }) {
  const { imageAlt, id, title, description, imageURL } = item;
  const { categoryId } = useParams();

  return (
    <div>
      <li>
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{description}</p>
      </li>
      <Link to={`/category/${categoryId}/${item.id}`}>
        <button>Meals</button>
      </Link>
    </div>
  );
}
