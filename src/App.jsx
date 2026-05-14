/* Libreria di Routing
Route e Routes: per definire le rotte dell'applicazione
useParams: per recuperare i parametri dinamici dalla URL (es: /post/:id)
useNavigate: per navigare programmaticamente tra le pagine (es: dopo un'azione, reindirizzare l'utente)
*/
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.scss";

// Componenti
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Pagine
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const PostDetail = ({ posts }) => {
  const { id } = useParams(); // Recupera l'ID dall'URL (es: /post/2)
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <div className="container">
        <h2>Post non trovato!</h2>
      </div>
    );

  return (
    <div className="post-detail">
      <button onClick={() => navigate("/")}>Torna alla Home</button>
      <h1>{post.title}</h1>
      <p>
        <strong>ID Post:</strong> {id}
      </p>
      <div className="content">{post.text}</div>
    </div>
  );
};

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
    { id: 1, title: "Post 1", text: "Testo di esempio 1" },
    { id: 2, title: "Post 2", text: "Testo di esempio 2" },
    { id: 3, title: "Post 3", text: "Testo di esempio 3" },
  ];

  const aboutPage = {
    title: "About",
    content: "Prototipo",
  };

  useEffect(() => {
    console.log("Utente aggiornato:", user);
  }, [user]);

  const handleChangeCity = (city) => {
    setUser({ ...user, city: city });
  };

  return (
    <div className="app">
      <Navbar menuItems={menu} />
      <Hero />

      <div className="container">
        <Routes>
          {/* Pagina Principale con la lista delle card */}
          <Route path="/" element={<Home posts={posts} />} />

          {/* Rotta Dinamica per il dettaglio post */}
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />

          {/* Altre rotte */}
          <Route
            path="/about"
            element={
              <About title={aboutPage.title} content={aboutPage.content} />
            }
          />

          {/* Rotta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Sidebar menuItems={menu} />
      </div>

      <Footer changCity={handleChangeCity} user={user} />
    </div>
  );
}

export default App;
