import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  const menu = [
    { name: "Home", link: "#" },
    { name: "Contatti", link: "#" },
  ];
  const textLogo = "Logo";
  const posts = [
    { id: 1, title: "Post 1", content: "..." },
    { id: 2, title: "Post 2", content: "..." },
    { id: 3, title: "Post 3", content: "..." },
  ];

  return (
    <div className="App">
      <h1>{textLogo}</h1>

      <nav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="post-container">
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
