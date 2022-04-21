export default function MenuItem({ item }) {
  const { imageAlt, id, title, description, imageURL } = item;

  return (
    <div>
      <li>
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{description}</p>
      </li>
      <button>Meals</button>
    </div>
  );
}
