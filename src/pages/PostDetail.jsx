// useParams: per recuperare i parametri dinamici dalla URL (es: /post/:id)
// useNavigate: per navigare programmaticamente tra le pagine (es: dopo un'azione, reindirizzare l'utente)

import { useParams, useNavigate } from "react-router-dom";

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <div className="container">
        <h2>Post non trovato!</h2>
      </div>
    );

  return (
    /* container full-width senza sidebar */
    <div className="container">
      <div className="post-detail" style={{ width: "100%" }}>
        <button onClick={() => navigate("/")}>Torna alla Home</button>
        <h1>{post.title}</h1>
        <p>
          <strong>ID Post:</strong> {id}
        </p>
        <div className="content">{post.text}</div>
      </div>
    </div>
  );
};

export default PostDetail;
