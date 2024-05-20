import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.jsx";
import Footer from "./components/Footer/index.jsx";
import SinglePostView from "./components/Home/BlogPost/SinglePostView.jsx";

import blogService from "./services/blogService.js";
import { useState, useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const match = useMatch("/posts/:id");

  useEffect(() => {
    blogService.getAllPosts().then((posts) => setPosts(posts));
  }, []);

  const post = match ? posts.find((post) => post.id === match.params.id) : null;

  console.log("All blogposts:", posts);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-start items-center">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/archive" element={<div>Archive</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/posts/:id" element={<SinglePostView post={post} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
