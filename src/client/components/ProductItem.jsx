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
  /* 
  const ingredientsList = ingredients.map((item) => (
    <li key={item.id} item={item} />
  ));
 */
  console.log(ingredients);

  return (
    <div>
      <li>
        <img src={heroURL} alt={heroAlt} />
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </li>
      <button>Back</button>
    </div>
  );
}
