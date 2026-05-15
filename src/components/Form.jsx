import React from "react";
import TextInput from "./subcomponents/TextInput";
import Select from "./subcomponents/Select";
import Button from "./subcomponents/Button";

const Form = ({ fields, buttonText }) => {
  return (
    <form
      className="dynamic-form"
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      {fields.map((field) => {
        if (field.type === "select") {
          // Passa id, label, name e la lista 'options' caricata dall'API
          return <Select key={field.id} {...field} />;
        }
        return <TextInput key={field.id} {...field} />;
      })}
      <Button text={buttonText} />
    </form>
  );
};

export default Form;
