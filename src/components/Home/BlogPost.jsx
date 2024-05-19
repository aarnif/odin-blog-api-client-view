const BlogPost = ({ post }) => {
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
    </div>
  );
};

export default BlogPost;
