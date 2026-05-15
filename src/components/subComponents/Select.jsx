const Select = ({ id, label, name, options = [] }) => (
  <div
    className="form-group"
    style={{ display: "flex", flexDirection: "column", gap: "5px" }}
  >
    <label htmlFor={id} style={{ color: "var(--text-main)" }}>
      {label}
    </label>
    <select
      id={id}
      name={name}
      style={{
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid var(--border-color)",
        background: "var(--bg-color)",
        color: "white",
      }}
    >
      <option value="">Seleziona prefisso...</option>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
