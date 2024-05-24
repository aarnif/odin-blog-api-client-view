import Item from "./Item";
import useFetchPosts from "../../hooks/useFetchPosts";

import { useEffect, useState, useRef, forwardRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const FilterByButton = ({ to, name, text, sortedBy }) => {
  return (
    <button
      className="w-24 h-14 m-1 flex justify-center items-center text-slate-500 rounded-full hover:bg-slate-400 transition
      dark:text-slate-200 dark:hover:bg-slate-700"
      style={{
        // Add differen styles for the button when it is selected
        backgroundColor: sortedBy === name && "white",
        color: sortedBy === name && "#2b6cb0",
      }}
    >
      <Link to={to} className="w-full h-full flex justify-center items-center">
        {text}
      </Link>
    </button>
  );
};

const FilterByPostMenu = ({ sortedBy, setShowSearchBox }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div
        className="flex-grow max-w-[350px] py-1 flex justify-around items-center bg-slate-300 rounded-full
      dark:bg-slate-800"
      >
        <FilterByButton
          to="/archive?sort=createdAt"
          name="createdAt"
          text="Latest"
          sortedBy={sortedBy}
        />
        <FilterByButton
          to="/archive?sort=likes"
          name="likes"
          text="Top"
          sortedBy={sortedBy}
        />
        <FilterByButton
          to="/archive?sort=comments"
          name="comments"
          text="Discussions"
          sortedBy={sortedBy}
        />
      </div>
      <button
        className="p-2 rounded-xl transition hover:bg-slate-400 active:scale-95 "
        onClick={() => setShowSearchBox(true)}
      >
        <Icon path={mdiMagnify} size={1.2} className="fill-current" />
      </button>
    </div>
  );
};
FilterByPostMenu.displayName = "FilterByPostMenu";

const Archive = ({ setShowSearchBox }) => {
  const [sortedBy, setSortedBy] = useState("createdAt");
  const [searchParams, setSearchParams] = useSearchParams();
  const { posts, loading } = useFetchPosts("", searchParams.get("sort"));
  console.log("Archive Posts", posts);
  console.log("Sorted by:", sortedBy);

  useEffect(() => {
    if (searchParams.get("sort")) {
      setSortedBy(searchParams.get("sort"));
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-[800px] mt-52">
      <FilterByPostMenu
        sortedBy={sortedBy}
        setShowSearchBox={setShowSearchBox}
      />
      {posts.map((post) => (
        <Item key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Archive;
