import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

// Componenti
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pagine
import Home from "./pages/Home";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

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

      <Routes>
        <Route path="/" element={<Home posts={posts} menuItems={menu} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
        <Route
          path="/about"
          element={
            <About title={aboutPage.title} content={aboutPage.content} />
          }
        />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer changCity={handleChangeCity} user={user} />
    </div>
  );
}

export default App;
