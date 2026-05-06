import Card from "Card";
import Sidebar from "./Sidebar";
import Counter from "./Counter";

function Content({
  posts,
  counter,
  increment,
  decrement,
  incrementBy,
  decrementBy,
}) {
  return (
    <main className="container">
      <div className="articles">
        <div className="cards">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} text={post.text} />
          ))}
        </div>
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
          incrementBy={incrementBy}
          decrementBy={decrementBy}
        />
      </div>
      <Sidebar />
    </main>
  );
}

export default Content;
