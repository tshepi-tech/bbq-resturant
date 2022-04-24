//NPM package
import { useNavigate } from "react-router";

export default function ProductItem({ document }) {
  //Properties
  const {
    imageAlt,
    title,
    description,
    imageURL,
    price,
    heroURL,
    heroAlt,
    ingredients,
  } = document;

  const navigate = useNavigate();

  return (
    <div>
      <section className="product_heading">
        <h1>{title}</h1>
        <h2 className="price">{price} :-</h2>
      </section>
      <img className="hero_image" src={heroURL} alt={heroAlt} />
      <section className="product_content">
        <img src={imageURL} alt={imageAlt} />
        <div className="product_description">
          <p>{description}</p>
          <p>Ingredients:{ingredients}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </section>
    </div>
  );
}
