import BlogPost from "./index.jsx";

import { useEffect } from "react";

const SinglePostView = ({
  post,
  setPosts,
  setShowHeaderItems,
  showDropdown,
  setShowDropdown,
  iconId,
  setIconId,
}) => {
  useEffect(() => {
    setShowHeaderItems(false);
  }, [setShowHeaderItems]);

  return (
    <div className="w-full max-w-[800px] mt-40">
      <BlogPost
        key={post.id}
        iconsIndexOne={0}
        iconsIndexTwo={1}
        post={post}
        setPosts={setPosts}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        iconId={iconId}
        setIconId={setIconId}
      />
    </div>
  );
};

export default SinglePostView;
