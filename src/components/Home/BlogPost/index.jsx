import Icons from "./Icons";
import Comments from "./Comments";
import ShareDropDown from "./ShareDropDown.jsx";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const BlogPost = ({ post, setPosts, showDropdown, setShowDropdown }) => {
  const match = useMatch("/posts/:id");
  const [postId, setPostId] = useState(null);

  const handleClickShare = (event) => {
    event.stopPropagation();
    console.log(`Share post ${event.target.id}`);
    setPostId(event.target.id);
    setShowDropdown(true);
  };

  return (
    <div
      key={post.id}
      className="w-full flex flex-col justify-center items-start mb-8"
    >
      <Link to={`/posts/${post.id}#post-title`}>
        <h1 id="post-title" className="text-3xl font-bold">
          {post.title}
        </h1>
      </Link>
      <h2 className="mt-4 text-xl text-slate-500">{post.lead}</h2>

      <div className="w-full flex justify-start items-center mt-4 pb-4">
        <div
          style={{
            backgroundImage: post.profilePic.length
              ? `url(${post.profilePic})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-14 h-14 mr-4 rounded-full bg-slate-500"
        ></div>
        <div>
          <div className="text-slate-700">{post.author}</div>
          <div className="text-slate-500">{post.createdAt}</div>
        </div>
      </div>

      <Icons
        post={post}
        setPosts={setPosts}
        handleClickShare={handleClickShare}
      />

      <div
        style={{
          backgroundImage: post.image.length ? `url(${post.image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[500px] rounded-lg bg-slate-500"
      ></div>

      <div className="mt-4 text-lg text-slate-700">
        {post.content.map((paragraph) => (
          <p className="mb-4">{paragraph}</p>
        ))}
      </div>

      <Icons
        post={post}
        setPosts={setPosts}
        handleClickShare={handleClickShare}
      />

      {match && <Comments posts={post} setPosts={setPosts} />}
      <AnimatePresence>
        {showDropdown && postId && (
          <ShareDropDown setShowDropdown={setShowDropdown} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPost;
