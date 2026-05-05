export default function Footer({ user, changeCity }) {
  return (
    <footer className="footer">
      {user.name} - {user.city} -{" "}
      <button
        onClick={() => changeCity(user.city === "Pescara" ? "Roma" : "Pescara")}
      >
        Cambia città
      </button>
      <p>Powered by Simone © 2026 Il Mio Sito Flexbox</p>
    </footer>
  );
}
