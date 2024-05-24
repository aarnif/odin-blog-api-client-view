import BlogPost from "./index.jsx";

const SinglePostView = ({
  post,
  setPosts,
  showDropdown,
  setShowDropdown,
  iconId,
  setIconId,
}) => {
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
