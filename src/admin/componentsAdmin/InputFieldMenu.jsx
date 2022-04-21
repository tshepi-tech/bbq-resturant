export default function InputFieldMenu() {
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
