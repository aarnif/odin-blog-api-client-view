import BlogPost from "./BlogPost/index";

const Home = ({ posts }) => {
  return (
    <div className="w-full max-w-[800px] mt-40">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
