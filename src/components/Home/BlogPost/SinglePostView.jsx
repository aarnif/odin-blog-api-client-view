import BlogPost from "./index.jsx";

const SinglePostView = ({ post, setPosts }) => {
  return (
    <div className="w-full max-w-[800px] mt-40">
      <BlogPost post={post} setPosts={setPosts} />
    </div>
  );
};

export default SinglePostView;
