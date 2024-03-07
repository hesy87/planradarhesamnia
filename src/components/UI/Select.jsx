const Select = ({ value, onChange, fields, placeholder }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xl mt-2"
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {fields.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
