import baseUrl from "../baseUrl";
import useFetchPosts from "../hooks/useFetchPosts";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { motion } from "framer-motion";

const SearchItem = ({ post, setShowSearchBox }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(`Navigate to post ${post.id} titled: ${post.title}`);
    setShowSearchBox(false);
    navigate(`/posts/${post.id}`);
  };

  return (
    <button
      className="w-full h-[100px] p-4 flex justify-start items-center cursor-pointer rounded-xl hover:bg-slate-300 transition
      dark:hover:bg-slate-600 dark:text-white"
      onClick={handleClick}
    >
      <div
        className="min-w-12 h-12 mr-4 rounded-xl bg-slate-300"
        style={{
          backgroundImage: `url(${baseUrl}/posts/${post.id}/image)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <h4 className="text-slate-500 text-left font-semibold dark:text-white">
          {post.title}
        </h4>
        <p className="text-slate-400 text-left dark:text-slate-300">
          {post.lead} {post.createdAt}
        </p>
      </div>
    </button>
  );
};

const SearchBox = ({ setShowSearchBox }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { posts, loading } = useFetchPosts(searchTerm);

  const handleChange = (event) => {
    console.log("Search with term: ", event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <motion.div
      key={"Overlay"}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10 transition"
      onClick={() => setShowSearchBox(false)}
      initial={{ width: "0vw", opacity: 0 }}
      animate={{ width: "100vw", opacity: 1, duration: 1.0 }}
      exit={{ width: "0vw", opacity: 0, transition: { delay: 1.0 } }}
    >
      <motion.div
        key={"searchBox"}
        className="overflow-auto w-[500px] h-[600px] bg-white rounded-xl text-slate-700 z-100 dark:bg-slate-700 dark:text-white"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, duration: 0.4 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ delay: 0.4, type: "tween" }}
      >
        <div className="w-full border-b border-b-slate-300">
          <div className="p-4 flex justify-between items-center">
            <Icon path={mdiMagnify} size={1.2} className="fill-current" />
            <input
              onChange={handleChange}
              className="flex-grow mx-4 rounded-lg p-2 
              hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:bg-slate-100 placeholder:text-slate-500 transition
              dark:bg-slate-600 hover:dark:bg-slate-500 focus:dark:bg-slate-500 dark:placeholder-white"
              name="search-posts"
              id="search-posts"
              type="text"
              placeholder="Search posts by title"
            ></input>
          </div>
        </div>
        <div>
          <h3 className="p-4 text-slate-500 font-semibold dark:text-white">
            POSTS
          </h3>
          <div>
            {posts.map((post) => (
              <SearchItem
                key={post.id}
                post={post}
                setShowSearchBox={setShowSearchBox}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
SearchBox.displayName = "SearchBox";

export default SearchBox;
