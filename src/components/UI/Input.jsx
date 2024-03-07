const Input = ({ placeholder, register, value }) => {
  return (
    <input
      value={value}
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs mt-2"
      {...register}
    />
  );
};

export default Input;
