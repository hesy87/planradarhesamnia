const Input = ({ placeholder, register }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xl mt-2"
      {...register}
    />
  );
};

export default Input;
