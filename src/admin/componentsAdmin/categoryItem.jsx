import { Link } from "react-router-dom";

export default function CategoryItem({ item, onDelete, editContent }) {
  const { imageAlt, id, title, description, imageURL } = item;

  return (
    <div>
      <li>
        <img src={imageURL} alt={imageAlt} />
        <p>{title}</p>
        <p>{description}</p>
      </li>
      <button onClick={() => onDelete(id)}>Delete</button>

      <Link to="/edit">
        <button onClick={() => editContent(id)}>Edit</button>
      </Link>
    </div>
  );
}
