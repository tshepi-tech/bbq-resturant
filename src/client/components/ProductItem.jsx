export default function ProductItem({ document }) {
  const {
    imageAlt,
    id,
    title,
    description,
    imageURL,
    price,
    heroURL,
    heroAlt,
    ingredients,
  } = document;

  return (
    <div>
      <h1>{title}</h1>
      <li>
        <img src={heroURL} alt={heroAlt} />
        <img src={imageURL} alt={imageAlt} />
        <p>{description}</p>
        <p>{price} :-</p>
        <p>Ingredients:{ingredients}</p>
      </li>
      <button>Back</button>
    </div>
  );
}
