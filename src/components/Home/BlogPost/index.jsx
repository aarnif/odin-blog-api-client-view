import baseUrl from "../../../baseUrl";
import Icons from "./Icons";
import Comments from "./Comments";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";

const BlogPost = ({
  iconsIndexOne,
  iconsIndexTwo,
  post,
  setPosts,
  showDropdown,
  setShowDropdown,
  iconId,
  setIconId,
}) => {
  const match = useMatch("/posts/:id");
  const [postId, setPostId] = useState(null);

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
      <h2 className="mt-4 text-xl text-slate-500 dark:text-slate-200">
        {post.lead}
      </h2>

      <div className="w-full flex justify-start items-center mt-4 pb-4">
        <div
          style={{
            backgroundImage: `url(${baseUrl}/authors/${post.author.id}/image)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-14 h-14 mr-4 rounded-full bg-slate-500"
        ></div>
        <div>
          <div className="text-slate-700 dark:text-slate-300">
            {post.author.name}
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            {post.createdAt}
          </div>
        </div>
      </div>

      <Icons
        iconId={iconsIndexOne}
        post={post}
        setPosts={setPosts}
        showDropdown={
          showDropdown && postId === post.id && iconId === iconsIndexOne
        }
        setShowDropdown={setShowDropdown}
        setPostId={setPostId}
        setIconId={setIconId}
      />

      <div
        style={{
          backgroundImage: `url(${baseUrl}/posts/${post.id}/image)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[500px] rounded-lg bg-slate-500"
      ></div>

      <div className="mt-4 text-lg text-slate-700 dark:text-slate-200">
        {post.content.map((paragraph) => (
          <p className="mb-4">{paragraph}</p>
        ))}
      </div>

      <Icons
        iconId={iconsIndexTwo}
        post={post}
        setPosts={setPosts}
        showDropdown={
          showDropdown && postId === post.id && iconId === iconsIndexTwo
        }
        setShowDropdown={setShowDropdown}
        setPostId={setPostId}
        setIconId={setIconId}
      />

      {match && <Comments posts={post} setPosts={setPosts} />}
    </div>
  );
};

export default BlogPost;
