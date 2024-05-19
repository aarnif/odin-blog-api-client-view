import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.jsx";
import Footer from "./components/Footer/index.jsx";

import blogService from "./services/blogService.js";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    blogService.getAllPosts().then((posts) => setPosts(posts));
  }, []);

  console.log("All blogposts:", posts);
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/archive" element={<div>Archive</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
