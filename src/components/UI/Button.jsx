const Button = ({ text, type, color, disabled, onClick }) => {
  return (
    <button
      type={type}
      className={`${color} btn w-2/5 mt-2 mr-2`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
