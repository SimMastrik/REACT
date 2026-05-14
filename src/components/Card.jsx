import { useLinkClickHandler } from "react-router-dom";

export default function Card({ id, title, desc }) {
  const handleClick = useLinkClickHandler(`/post/${id}`);

  return (
    <div className="card">
      <h1>{id}</h1>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button onClick={handleClick}>Vai</button>
    </div>
  );
}
// ✅Devo utilizzare UseParams per recuperare i parametri dalla URL e visualizzare i dettagli del post selezionato.
// 2 utilizza il router on click per navigare alla pagina
