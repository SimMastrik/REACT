import React, { useState, useEffect } from "react";
import Form from "../components/Form";

const Contatti = () => {
  const [countryCodes, setCountryCodes] = useState([]);

  // useEffect per caricare i prefissi internazionali all'avvio
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd")
      .then((res) => res.json())
      .then((data) => {
        // Formattiamo i dati: filtriamo chi non ha prefisso e creiamo label/value
        const formattedCodes = data
          .filter((country) => country.idd?.root)
          .map((country) => {
            const prefix = `${country.idd.root}${country.idd.suffixes?.[0] || ""}`;
            return {
              label: `${country.name.common} (${prefix})`,
              value: prefix,
            };
          })
          .sort((a, b) => a.label.localeCompare(b.label)); // Ordine alfabetico dei paesi

        setCountryCodes(formattedCodes);
      })
      .catch((err) =>
        console.error("Errore nel caricamento dei prefissi:", err),
      );
  }, []);

  const contattiFields = [
    { id: "nome", label: "Nome", type: "text", name: "nome" },
    { id: "cognome", label: "Cognome", type: "text", name: "cognome" },
    { id: "email", label: "Email", type: "email", name: "email" },
    {
      id: "prefisso",
      label: "Prefisso",
      type: "select",
      name: "prefisso",
      options: countryCodes, // Passiamo l'elenco caricato dall'API
    },
    { id: "tel", label: "Telefono", type: "tel", name: "telefono" },
    { id: "msg", label: "Messaggio", type: "textarea", name: "messaggio" },
  ];

  return (
    <div className="container">
      <div className="post-detail" style={{ width: "100%" }}>
        <h1>Contattaci</h1>
        <p>Compila il modulo per ricevere maggiori informazioni.</p>

        {/* Passiamo i campi (inclusa la select dinamica) al componente Form */}
        <Form fields={contattiFields} buttonText="Invia Messaggio" />
      </div>
    </div>
  );
};

export default Contatti;
