import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Home = ({ posts, menuItems }) => {
  return (
    <>
      <Hero />

      <div className="container">
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

        <Sidebar menuItems={menuItems} />
      </div>
    </>
  );
};

export default Home;
