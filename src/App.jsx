import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

// Componenti
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pagine
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail"; // Importiamo il nuovo file

function App() {
  const [user, setUser] = useState({
    name: "Simone",
    surname: "Ciao",
    age: 30,
    city: "Pescara",
  });

  const menu = [
    { id: 1, page: "Home", slug: "/" },
    { id: 2, page: "Servizi", slug: "/servizi" },
    { id: 3, page: "Contatti", slug: "/contatti" },
  ];

  const posts = [
    { id: 1, title: "Introduzione", text: "Introduzione al progetto" },
    { id: 2, title: "Descrizione", text: "Descrizione del progetto" },
    { id: 3, title: "Funzionalità", text: "Spiegazione delle funzionalità" },
  ];

  const aboutPage = {
    title: "About",
    content: "Prototipo",
  };

  const handleChangeCity = (city) => {
    setUser({ ...user, city: city });
  };

  return (
    <div className="app">
      <Navbar menuItems={menu} />

      {/* Rimosso Hero da qui per metterlo solo in Home */}

      <Routes>
        {/* Passiamo menu e posts a Home perché ora contiene Hero e Sidebar */}
        <Route path="/" element={<Home posts={posts} menuItems={menu} />} />
        {/* Rotta Dinamica: Full width come da schema */}
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route
          path="/about"
          element={
            <About title={aboutPage.title} content={aboutPage.content} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer changCity={handleChangeCity} user={user} />
    </div>
  );
}

export default App;
