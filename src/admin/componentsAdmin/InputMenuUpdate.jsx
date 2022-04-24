//Project files
import inputSetup from "../../data/inputSetup.json";
import InputCategory from "./InputCategory";
import { useRestaurant } from "../../state/RestaurantContext";

export default function InputMenuUpdate({ onUpdate }) {
  const {
    descriptionCat,
    setDescriptionCat,
    titleCat,
    setTitleCat,
    imageURLCat,
    setImageURLCat,
    imageAltCat,
    setImageAltCat,
  } = useRestaurant();

  return (
    <div>
      <form onSubmit={onUpdate}>
        <InputCategory
          state={[titleCat, setTitleCat]}
          setup={inputSetup.title}
        />
        <InputCategory
          state={[descriptionCat, setDescriptionCat]}
          setup={inputSetup.description}
        />
        <InputCategory
          state={[imageURLCat, setImageURLCat]}
          setup={inputSetup.imageURL}
        />
        <InputCategory
          state={[imageAltCat, setImageAltCat]}
          setup={inputSetup.imageAlt}
        />
        <button onClick={onUpdate}>submit edits</button>
      </form>
    </div>
  );
}
