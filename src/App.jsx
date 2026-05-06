import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./App.scss";

function App() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({
    name: "Simone",
    surname: "Ciao",
    age: 30,
    city: "Pescara",
  });

  // Funzioni del counter raggruppate per chiarezza e pulizia del codice
  const counterActions = {
    increment: () => setCounter((prev) => prev + 1),
    decrement: () => setCounter((prev) => prev - 1),
    incrementBy: (n) => setCounter((prev) => prev + n),
    decrementBy: (n) => setCounter((prev) => prev - n),
  };

  const handleChangeCity = (city) => {
    setUser((prev) => ({ ...prev, city }));
  };

  useEffect(() => {
    console.log("Stato utente aggiornato:", user);
  }, [user]);

  const posts = [
    { id: 1, title: "Post 1", text: "Testo di esempio per la prima card..." },
    { id: 2, title: "Post 2", text: "Testo di esempio per la seconda card..." },
    { id: 3, title: "Post 3", text: "Testo di esempio per la terza card..." },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Content posts={posts} counter={counter} {...counterActions} />
      <Footer changeCity={handleChangeCity} user={user} />
    </>
  );
}

export default App;
