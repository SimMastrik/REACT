import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Home = ({ posts, menuItems }) => {
  return (
    <>
      {/* L'Hero viene visualizzato solo nella Home */}
      <Hero />

      <div className="container">
        {/* Sezione principale con le card */}
        <main className="articles">
          <div className="cards">
            {posts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post?.title}
                desc={post.text}
              />
            ))}
          </div>
        </main>

        {/* La Sidebar viene spostata qui per apparire solo nella Home */}
        <Sidebar menuItems={menuItems} />
      </div>
    </>
  );
};

export default Home;
