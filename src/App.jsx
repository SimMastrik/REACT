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
  const [counter, setCounter] = useState(0);
  const incrementByOne = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementByOne = () => {
    setCounter((prev) => prev - 1);
  };
  const incrementBy = (n) => {
    setCounter((prev) => prev + n);
  };
  const decrementBy = (n) => {
    setCounter((prev) => prev - n);
  };
  // Array di dati dei post
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
  // const menu = [
  //   { name: "Home", link: "#" },
  //   { name: "Contatti", link: "#" },
  // ];
  // const textLogo = "Logo";
  const posts = [
    { id: 1, title: "Post 1", text: "Testo di esempio per la prima card..." },
    { id: 2, title: "Post 2", text: "Testo di esempio per la seconda card..." },
    { id: 3, title: "Post 3", text: "Testo di esempio per la terza card..." },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      {/*
      <main className="container">
        <div className="articles">
          <div className="cards">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} text={post.text} />
            ))}
          </div>
          <Counter counter={counter} increment = {incrementByOne} decrement = {decrementByOne} incrementBy = {incrementBy} decrementBy = {decrementBy}
          />
        </div>

        <Sidebar />
      </main>
*/}
      <Content
        posts={posts}
        counter={counter}
        increment={incrementByOne}
        decrement={decrementByOne}
        incrementBy={incrementBy}
        decrementBy={decrementBy}
      />
      <Footer changeCity={handleChangeCity} user={user} />
    </>
  );
}

export default App;
