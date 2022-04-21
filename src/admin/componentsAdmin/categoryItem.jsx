export default function CategoryItem({ item }) {
  const { imageAlt, id, title, description, imageURL } = item;

  return (
    <div>
      <li>
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{description}</p>
      </li>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
