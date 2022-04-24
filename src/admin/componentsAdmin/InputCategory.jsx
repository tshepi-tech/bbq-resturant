export default function InputCategory({ setup, state }) {
  const { label, required, type } = setup;
  const [setter, getter] = state;

  return (
    <div>
      <label>
        {label}
        <input
          onChange={(event) => getter(event.target.value)}
          required={required}
          type={type}
          value={setter}
        />
      </label>
    </div>
  );
}
