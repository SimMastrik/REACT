import Card from "../components/Card";

const Home = ({ posts }) => {
  return (
    <div>
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
    </div>
  );
};
export default Home;
