export default function CategoryItem({ item, onDelete }) {
  const { alt, id, category, descriptionLng, imageURL } = item;

  //Methods

  return (
    <div>
      <li>
        <img src={imageURL} alt={alt} />
        <p>{category}</p>
        <p>{descriptionLng}</p>
      </li>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}
