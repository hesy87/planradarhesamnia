const Input = ({ placeholder, register }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs mt-2"
      {...register}
    />
  );
};

export default Input;
