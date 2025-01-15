import "./Button.css";

const Button = ({ onClick, children }) => {
  return (
    <button className="button-20" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
