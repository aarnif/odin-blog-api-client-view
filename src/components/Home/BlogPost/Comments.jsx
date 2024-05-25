import baseUrl from "../../../baseUrl";
import blogService from "../../../services/blogService";
import CommentIcons from "./CommentIcons";

import { useMatch } from "react-router-dom";

const Comment = ({ postId, comment }) => {
  return (
    <div>
      <div className="w-full flex justify-start items-center mt-4 pb-4">
        <div
          style={{
            backgroundImage: `url(${baseUrl}/posts/${postId}/comments/${comment.id}/image)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-14 h-14 mr-4 rounded-full bg-slate-500"
        ></div>
        <div>
          <div className="text-slate-700 dark:text-slate-200">
            {comment.author}
          </div>
          <div className="text-slate-500 dark:text-slate-300">
            {comment.createdAt}
          </div>
        </div>
      </div>
      <div className="ml-[4.5rem] text-md text-slate-700 dark:text-slate-300">
        {comment.content}
      </div>
      <CommentIcons />
    </div>
  );
};

const AddComment = ({ setPosts }) => {
  const postId = useMatch("/posts/:id").params.id;

  const handleSubmitNewComment = (event) => {
    event.preventDefault();
    console.log("New comment submitted!");
    const newComment = {
      author: event.target.name.value,
      content: event.target.comment.value,
    };
    blogService.addComment(postId, newComment).then((comment) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        );
      });
    });
    event.target.reset();
  };

  return (
    <div>
      <h2 className="mt-4 text-xl text-slate-700 font-bold dark:text-slate-200">
        Add a comment
      </h2>
      <form
        className="mt-4 flex flex-col text-slate-700"
        onSubmit={handleSubmitNewComment}
      >
        <input
          htmlFor="name"
          id="name"
          type="text"
          placeholder="Your name"
          className="border border-slate-300 rounded-lg p-2 
          hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:bg-slate-100 placeholder:text-slate-500 transition
          dark:bg-slate-600 hover:dark:bg-slate-500 focus:dark:bg-slate-500 dark:placeholder-white"
        />
        <textarea
          htmlFor="comment"
          id="comment"
          placeholder="Your comment"
          className="min-h-36 border border-slate-300 rounded-lg p-2 mt-4 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:bg-slate-100 placeholder:text-slate-500 transition
          dark:bg-slate-600 hover:dark:bg-slate-500 focus:dark:bg-slate-500 dark:placeholder-white"
        ></textarea>
        <div className="w-full flex justify-end items-center">
          <button className="mt-4 py-2 px-4 bg-slate-500 text-white rounded-lg hover:bg-slate-600 active:scale-95 transition">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

const Comments = ({ postId, posts, setPosts }) => {
  const postComments = posts.comments;
  if (!postComments.length) {
    return (
      <div className="w-full">
        <h1 className="mt-4 mb-8 text-2xl text-slate-700 font-bold">
          No comments.
        </h1>
        <AddComment setPosts={setPosts} />
      </div>
    );
  }

  return (
    <div id="comments-section" className="w-full">
      <h1 className="mt-4 mb-8 text-2xl text-slate-700 font-bold dark:text-slate-200">
        {postComments.length} Comments
      </h1>
      <AddComment setPosts={setPosts} />
      {postComments.map((comment, index) => (
        <Comment key={index} postId={postId} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
