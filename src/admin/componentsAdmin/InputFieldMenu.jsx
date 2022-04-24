//Project files
import InputCategory from "./InputCategory";
import inputSetup from "../../data/inputSetup.json";
import { useRestaurant } from "../../state/RestaurantContext";

export default function InputFieldMenu({ onCreate }) {
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
      <form onSubmit={onCreate}>
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
        <button onClick={onCreate}>submit</button>
      </form>
    </div>
  );
}
