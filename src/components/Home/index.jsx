import BlogPost from "./BlogPost";

const Home = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
