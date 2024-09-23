const FormInput = ({ placeholder, type, value, handleChanger }) => {
  return (
    <input
      className="input input-bordered border-accent"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChanger}
    />
  );
};

export default FormInput;
