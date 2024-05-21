import useFetchPosts from "./hooks/useFetchPosts.js";
import Header from "./components/Header/index.jsx";
import Home from "./components/Home/index.jsx";
import Archive from "./components/Archive/index.jsx";
import Footer from "./components/Footer/index.jsx";
import SinglePostView from "./components/Home/BlogPost/SinglePostView.jsx";

import { Routes, Route, useMatch } from "react-router-dom";

const App = () => {
  const match = useMatch("/posts/:id");
  const { posts, loading } = useFetchPosts();

  const post = match ? posts.find((post) => post.id === match.params.id) : null;

  console.log("All blogposts:", posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-start items-center">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive?sort=createdAt" element={<Archive />} />
          <Route path="/archive?sort=likes" element={<Archive />} />
          <Route path="/archive?sort=comments" element={<Archive />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/posts/:id" element={<SinglePostView post={post} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
