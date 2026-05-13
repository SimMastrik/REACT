import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

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
    // setUser((prevState) => ({ ...prevState, city: city }));
    setUser({ ...user, city: city });
  };
  // Definizione dell'array menu
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

  console.log(posts, menu);
  //usare map per iterare i post e renderizzare una card per ogni post
  return (
    <div className="app">
      <Navbar menuItems={menu} />

      <Hero />

      <div className="container">
        {/* <div className="cards">
          {posts.map((post) => (
            <Card key={post.id} title={post?.title} desc={post.text} />
          ))}
        </div> */}
        {/* <Home posts={posts} /> */}
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/about"
            element={
              <About title={aboutPage?.title} content={aboutPage?.content} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Sidebar menuItems={menu} />
      </div>

      <Footer changCity={handleChangeCity} user={user} />
    </div>
  );
}

export default App;
