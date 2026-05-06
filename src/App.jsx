//import Card from "./components/Card";
//import Sidebar from "./components/Sidebar";
//import Counter from "./components/Counter";
// rimossi e spostato in Content e per migliore leggibilità del codice
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./App.scss";

function App() {
  const [user, setUser] = useState({
    name: "Simone",
    surname: "Ciao",
    age: 30,
    city: "Pescara",
  });

  useEffect(() => {
    console.log("CIAO", user);
  }, [user]);

  const handleChangeCity = (city) => {
    setUser({ ...user, city: city });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Footer changeCity={handleChangeCity} user={user} />
    </>
  );
}

export default App;
