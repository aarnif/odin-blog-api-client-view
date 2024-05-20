import blogService from "../../../services/blogService";
import CommentIcons from "./CommentIcons";

import { useState } from "react";
import { useMatch } from "react-router-dom";

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="w-full flex justify-start items-center mt-4 pb-4">
        <div
          style={{
            backgroundImage: "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-14 h-14 mr-4 rounded-full bg-slate-500"
        ></div>
        <div>
          <div className="text-slate-700">{comment.author}</div>
          <div className="text-slate-500">{comment.createdAt}</div>
        </div>
      </div>
      <div className="ml-[4.5rem] text-md text-slate-700">
        {comment.content}
      </div>
      <CommentIcons />
    </div>
  );
};

const AddComment = ({ setPostComments }) => {
  const postId = useMatch("/posts/:id").params.id;

  const handleSubmitNewComment = (event) => {
    event.preventDefault();
    console.log("New comment submitted!");
    const newComment = {
      author: event.target.name.value,
      content: event.target.comment.value,
    };
    blogService.addComment(postId, newComment).then((comment) => {
      setPostComments((prevComments) => [...prevComments, comment]);
    });
    event.target.reset();
  };

  return (
    <div>
      <h2 className="mt-4 text-xl text-slate-700 font-bold">Add a comment</h2>
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
          hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:bg-slate-100 placeholder:text-slate-500 transition"
        />
        <textarea
          htmlFor="comment"
          id="comment"
          placeholder="Your comment"
          className="min-h-36 border border-slate-300 rounded-lg p-2 mt-4 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:bg-slate-100 placeholder:text-slate-500 transition"
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

const Comments = ({ comments }) => {
  const [postComments, setPostComments] = useState(comments);
  console.log("Comments:", postComments);
  if (!postComments.length) {
    return (
      <div className="w-full">
        <h1 className="mt-4 mb-8 text-2xl text-slate-700 font-bold">
          No comments.
        </h1>
        <AddComment setPostComments={setPostComments} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="mt-4 mb-8 text-2xl text-slate-700 font-bold">
        {postComments.length} Comments
      </h1>
      <AddComment setPostComments={setPostComments} />
      {postComments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
