const TextInput = ({ id, label, name, type = "text", value, onChange }) => (
  <div
    className="form-group"
    style={{ display: "flex", flexDirection: "column", gap: "5px" }}
  >
    <label htmlFor={id} style={{ color: "var(--text-main)" }}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid var(--border-color)",
        background: "var(--bg-color)",
        color: "white",
      }}
    />
  </div>
);
export default TextInput;
