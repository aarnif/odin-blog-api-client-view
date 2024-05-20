import BlogPost from "./index.jsx";

const SinglePostView = ({ post }) => {
  return (
    <div className="w-full max-w-[800px] mt-40">
      <BlogPost post={post} />
    </div>
  );
};

export default SinglePostView;
