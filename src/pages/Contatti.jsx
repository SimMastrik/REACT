import React from "react";
import Form from "../components/Form";

const Contatti = () => {
  const contattiFields = [
    { id: "nome", label: "Nome", type: "text", name: "nome" },
    { id: "cognome", label: "Cognome", type: "text", name: "cognome" },
    { id: "email", label: "Email", type: "email", name: "email" },
    { id: "tel", label: "Telefono", type: "tel", name: "telefono" },
    { id: "msg", label: "Messaggio", type: "textarea", name: "messaggio" },
  ];

  return (
    <div className="container">
      <div className="post-detail" style={{ width: "100%" }}>
        <h1>Contattaci</h1>
        <p>Compila il modulo per ricevere maggiori informazioni.</p>

        {/* Utilizziamo il componente Form per creare un modulo dinamico basato sui campi definiti */}
        <Form fields={contattiFields} buttonText="Invia Messaggio" />
      </div>
    </div>
  );
};

export default Contatti;
