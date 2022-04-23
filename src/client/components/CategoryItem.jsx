//NPM packages
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { categoryId, subId } = useParams();
  const { imageAlt, id, title, details, imageURL, price } = item;

  return (
    <div>
      <li>
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{details}</p>
        <p>{price}</p>
      </li>
      <Link to={`/category/${categoryId}/${subId}/${item.id}`}>
        <button>View more</button>
      </Link>
    </div>
  );
}
