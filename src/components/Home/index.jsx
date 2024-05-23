import { useState } from "react";

import BlogPost from "./BlogPost/index";

const Home = ({ posts, setPosts, showDropdown, setShowDropdown }) => {
  return (
    <div className="w-full max-w-[800px] mt-40">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
          setPosts={setPosts}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      ))}
    </div>
  );
};

export default Home;
