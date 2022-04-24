//NPM packages
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function MenuItem({ item }) {
  const { imageAlt, id, title, description, imageURL } = item;
  const { categoryId } = useParams();

  return (
    <div className="menu_item">
      <img src={imageURL} alt={imageAlt} />
      <section className="category_info">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/category/${categoryId}/${item.id}`}>
          <button>Meals</button>
        </Link>
      </section>
    </div>
  );
}
