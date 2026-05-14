import { NavLink } from "react-router-dom";

export default function Card({ id, title, text }) {
  return (
    <div className="card">
      <h1>{id}</h1>
      <h3>{title}</h3>
      <p>{text}</p>
      <NavLink to={`/post/${id}`}>
        <button>Vai</button>
      </NavLink>
    </div>
  );
}
// Devo utilizzare UseParams per recuperare i parametri dalla URL e visualizzare i dettagli del post selezionato.
