const Button = ({ text, type = "submit" }) => (
  <button
    type={type}
    style={{ width: "fit-content", marginTop: "10px", padding: "10px 25px" }}
  >
    {text}
  </button>
);
export default Button;
