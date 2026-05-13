import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import NoMatch from "./pages/NotFound";
import About from "./pages/About";

function App() {
  const [user, setUser] = useState({
    name: "Simone",
    surname: "Ciao",
    age: 30,
    city: "Pescara",
  });
  //
  useEffect(() => {
    console.log("CIAO", user);
  }, [user]);
  const handleChangeCity = (city) => {
    // setUser((prevState) => ({ ...prevState, city: city }));
    setUser({ ...user, city: city });
  };
  const menu = [
    { id: 1, page: "Home", slug: "/" },
    { id: 2, page: "Servizi", slug: "/servizi" },
    { id: 3, page: "Contatti", slug: "/contatti" },
  ];
  <Sidebar items={menu} />;
  const textLogo = "Logo";
  const posts = [
    {
      id: 1,
      title: "Post 1",
      text: "Testo di esempio per la prima card...",
    },
    {
      id: 2,
      title: "Post 2",
      text: "Testo di esempio per la seconda card...",
    },
    {
      id: 3,
      title: "Post 3",
      text: "Testo di esempio per la terza card...",
    },
  ];
  const aboutPage = {
    title: "About",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis distinctio corporis laborum quibusdam a, esse deserunt libero quaerat animi eum eos sed dicta neque magni? Nesciunt nam optio fuga sunt?",
  };
  console.log(posts, textLogo, menu);
  //usare map per iterare i post e renderizzare una card per ogni post
  return (
    <div className="app">
      <Navbar />

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
          <Route path="*" element={<NoMatch />} />
        </Routes>

        <Sidebar menu={menu} />
      </div>

      <Footer changCity={handleChangeCity} user={user} />
    </div>
  );
}

export default App;
