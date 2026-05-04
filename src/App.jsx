import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  // Array di dati dei post
  const posts = [
    { id: 1, title: "Post 1", text: "Testo di esempio per la prima card..." },
    { id: 2, title: "Post 2", text: "Testo di esempio per la seconda card..." },
    { id: 3, title: "Post 3", text: "Testo di esempio per la terza card..." },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <main className="container">
        <div className="articles">
          <div className="cards">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} text={post.text} />
            ))}
          </div>
        </div>

        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
