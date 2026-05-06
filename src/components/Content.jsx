import { useState } from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Counter from "./Counter";

function Content({ posts: initialPosts }) {
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

  const posts = initialPosts || [
    { id: 1, title: "Post 1", text: "Testo di esempio per la prima card..." },
    { id: 2, title: "Post 2", text: "Testo di esempio per la seconda card..." },
    { id: 3, title: "Post 3", text: "Testo di esempio per la terza card..." },
  ];

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
          increment={incrementByOne}
          decrement={decrementByOne}
          incrementBy={incrementBy}
          decrementBy={decrementBy}
        />
      </div>
      <Sidebar />
    </main>
  );
}

export default Content;
