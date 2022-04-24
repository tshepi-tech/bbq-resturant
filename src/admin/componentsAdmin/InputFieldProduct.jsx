//Project files
import InputCategory from "./InputCategory";
import inputSetup from "../../data/inputSetup.json";
import { useRestaurant } from "../../state/RestaurantContext";

export default function InputFieldProduct({ onCreate }) {
  const {
    category, setCategory,
   title, setTitle,
  details, setDetails,
 description, setDescription,

 ingredients, setIngredients,
 price, setPrice,
imageURL, setImageURL,
   imageAlt, setImageAlt,
heroURL, setHeroURL,
    heroAlt, setHeroAlt
  } = useRestaurant();

  return (
    <div>
      <form onSubmit={onCreate}>
      < InputCategory 
          state={[ category, setCategory]}
          setup={inputSetup.title}
        />
        <InputCategory
          state={[title, setTitle]}
          setup={inputSetup.title}
        />
        <InputCategory
          state={[details, setDetails]}
          setup={inputSetup.title}
        />
        <InputCategory
          state={[description, setDescription]}
          setup={inputSetup.description}
        />
         <InputCategory
          state={[ingredients, setIngredients}
          setup={inputSetup.title}
        />
        <InputCategory
          state={[price, setPrice}
          setup={inputSetup.title}
        />
        <InputCategory
          state={[imageURL, setImageURL]}
          setup={inputSetup.imageURL}
        />
        <InputCategory
          state={[imageAlt, setImageAlt]}
          setup={inputSetup.imageAlt}
        />
        <InputCategory
          state={[heroURL, setHeroURL]}
          setup={inputSetup.imageAlt}
        />
        <InputCategory
          state={[heroAlt, setHeroAlt]}
          setup={inputSetup.imageAlt}
        />
        <button onClick={onCreate}>submit</button>
      </form>
    </div>
  );
}
