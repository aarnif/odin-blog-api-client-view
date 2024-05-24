import BlogPost from "./BlogPost/index";

const Home = ({
  posts,
  setPosts,
  showDropdown,
  setShowDropdown,
  iconId,
  setIconId,
}) => {
  let index = 0;
  return (
    <div className="w-full max-w-[800px] mt-40">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          iconsIndexOne={index++}
          iconsIndexTwo={index++}
          post={post}
          setPosts={setPosts}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          iconId={iconId}
          setIconId={setIconId}
        />
      ))}
    </div>
  );
};

export default Home;
