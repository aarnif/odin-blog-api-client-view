import useFetchPosts from "./hooks/useFetchPosts.js";
import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.jsx";
import Archive from "./components/Archive/index.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer/index.jsx";
import SinglePostView from "./components/Home/BlogPost/SinglePostView.jsx";
import ScrollToHashElement from "./ScrollToHashElement.jsx";
import SearchBox from "./components/SearchBox.jsx";

import { useState } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const match = useMatch("/posts/:id");
  const { posts, loading } = useFetchPosts();
  const [showSearchBox, setShowSearchBox] = useState(false);

  const post = match ? posts.find((post) => post.id === match.params.id) : null;

  console.log("All blogposts:", posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header setShowSearchBox={setShowSearchBox} />
      <ScrollToHashElement />
      <div className="w-full min-h-screen flex flex-col justify-start items-center">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/archive"
            element={<Archive setShowSearchBox={setShowSearchBox} />}
          />
          <Route
            path="/archive?sort=createdAt"
            element={<Archive setShowSearchBox={setShowSearchBox} />}
          />
          <Route
            path="/archive?sort=likes"
            element={<Archive setShowSearchBox={setShowSearchBox} />}
          />
          <Route
            path="/archive?sort=comments"
            element={<Archive setShowSearchBox={setShowSearchBox} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<SinglePostView post={post} />} />
        </Routes>
      </div>
      <AnimatePresence>
        {showSearchBox && <SearchBox setShowSearchBox={setShowSearchBox} />}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
