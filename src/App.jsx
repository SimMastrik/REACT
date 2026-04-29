import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container">
        <div className="articles">
          <div className="cards">
            <Card title="Post 1" text="Testo di esempio per la prima card..." />
            <Card
              title="Post 2"
              text="Testo di esempio per la seconda card..."
            />
            <Card title="Post 3" text="Testo di esempio per la terza card..." />
          </div>
        </div>

        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
// ricreare il progetto in html homepage con react
