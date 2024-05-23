import blogService from "../../../services/blogService";

import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChatOutline, mdiHeartOutline } from "@mdi/js";

const Icons = ({ post, setPosts }) => {
  const navigate = useNavigate();

  const handleLikePost = () => {
    console.log(`Liked post ${post.id}, titled ${post.title}`);
    blogService.likePost(post.id).then((updatedPost) => {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        )
      );
    });
  };

  return (
    <div className="w-full flex justify-between items-center mb-4 py-4 border-t border-b text-slate-500">
      <div className="flex justify-start items-center">
        <div
          className="w-24 h-14 mr-4 flex justify-around items-center border border-slate-500 rounded-full        
         hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition"
        >
          <button
            className="w-full h-full flex justify-around items-center"
            onClick={handleLikePost}
          >
            <Icon path={mdiHeartOutline} size={1.5} />
            <div className="text-lg">{post.likes}</div>
          </button>
        </div>
        <div
          className="w-24 h-14 mr-4 flex justify-around items-center border border-slate-500 rounded-full        
         hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition"
        >
          <button
            onClick={() => {
              navigate(`/posts/${post.id}#comments-section`);
              console.log(`Redirecting to comments-section on post ${post.id}`);
            }}
            className="w-full h-full flex justify-around items-center"
          >
            <Icon path={mdiChatOutline} size={1.5} />
            <div className="text-lg">{post.comments.length}</div>
          </button>
        </div>
      </div>
      <div
        className="w-24 h-14 mr-4 flex justify-around items-center border border-slate-500 rounded-full        
         hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition"
      >
        <div className="text-lg">Share</div>
      </div>
    </div>
  );
};

export default Icons;
