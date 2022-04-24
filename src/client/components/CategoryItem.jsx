//NPM packages
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  const { categoryId, subId } = useParams();
  const { imageAlt, id, title, details, imageURL, price } = item;

  return (
    <div className="category_item">
      <img src={imageURL} alt={imageAlt} />
      <section className="product_info">
        <h2>{title}</h2>
        <p>{details}</p>
        <p className="price">{price} :-</p>
        <Link to={`/category/${categoryId}/${subId}/${item.id}`}>
          <button>View more</button>
        </Link>
      </section>
    </div>
  );
}
