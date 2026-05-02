import { useState, useEffect } from "react";
import axios from "axios";

const API = "/api";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const addUser = async () => {
    try {
      setError("");
      const res = await axios.post(`${API}/users`, { name, email });
      setUserId(res.data._id);
      alert("User added");
    } catch (err) {
      setError("Error adding user");
    }
  };

  const addPost = async () => {
    try {
      setError("");
      await axios.post(`${API}/posts`, {
        title,
        content,
        user: userId
      });
      alert("Post added");
      getPosts();
    } catch (err) {
      setError("Error adding post");
    }
  };

  const getPosts = async () => {
    try {
      setError("");
      const res = await axios.get(`${API}/posts`);
      setPosts(res.data);
    } catch (err) {
      setPosts([]);
      setError("Error loading posts");
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      <h2>Add User</h2>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={addUser}>Add User</button>

      <h2>Add Post</h2>
      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="content" onChange={(e) => setContent(e.target.value)} />
      <button onClick={addPost}>Add Post</button>

      <h2>Posts</h2>
      <button onClick={getPosts}>Refresh</button>

      {posts.map((p) => (
        <div key={p._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <small>By: {p.user?.name}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
