export default function MenuItem({ item, onDelete }) {
  const { alt, id, category, descriptionLng, imageURL } = item;

  //Methods

  return (
    <div>
      <li>
        <img src={imageURL} alt={alt} />
        <p>{category}</p>
        <p>{descriptionLng}</p>
      </li>
      <button>Meals</button>
    </div>
  );
}
