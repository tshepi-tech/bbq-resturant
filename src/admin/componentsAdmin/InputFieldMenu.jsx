//Project files
import InputCategory from "./InputCategory";
import inputSetup from "../../data/inputSetup.json";

export default function InputFieldMenu({
  titleState,
  descriptionState,
  imageState,
  altState,
  onCreate,
}) {
  const [title, setTitle] = titleState;
  const [description, setDescription] = descriptionState;
  const [imageURL, setImageURL] = imageState;
  const [imageAlt, setImageAlt] = altState;

  return (
    <div>
      <form onSubmit={onCreate}>
        <InputCategory state={[title, setTitle]} setup={inputSetup.title} />
        <InputCategory
          state={[description, setDescription]}
          setup={inputSetup.description}
        />
        <InputCategory
          state={[imageURL, setImageURL]}
          setup={inputSetup.imageURL}
        />
        <InputCategory
          state={[imageAlt, setImageAlt]}
          setup={inputSetup.imageAlt}
        />
        <button onClick={onCreate}>submit</button>
      </form>
    </div>
  );
}
