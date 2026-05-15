import React from "react";

const Form = ({ fields, buttonText = "Invia" }) => {
  return (
    <form
      className="dynamic-form"
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      {fields.map((field) => (
        <div
          key={field.id}
          className="form-group"
          style={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <label
            htmlFor={field.id}
            style={{ color: "var(--text-main)", fontWeight: "600" }}
          >
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.name}
              rows="4"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid var(--border-color)",
                background: "var(--bg-color)",
                color: "white",
                resize: "none",
              }}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid var(--border-color)",
                background: "var(--bg-color)",
                color: "white",
              }}
            />
          )}
        </div>
      ))}

      <button type="submit" style={{ width: "fit-content", marginTop: "10px" }}>
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
