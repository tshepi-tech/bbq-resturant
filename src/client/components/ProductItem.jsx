export default function ProductItem({ item }) {
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
  } = item;

  return (
    <div>
      <li>
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </li>
      <button>View more</button>
    </div>
  );
}
