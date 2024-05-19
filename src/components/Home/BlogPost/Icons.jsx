import Icon from "@mdi/react";
import { mdiChatOutline, mdiHeartOutline } from "@mdi/js";

const Icons = ({ post }) => {
  return (
    <div className="w-full flex justify-between items-center mb-4 py-4 border-t border-b text-slate-500">
      <div className="flex justify-start items-center">
        <div
          className="w-24 h-14 mr-4 flex justify-around items-center border border-slate-500 rounded-full 
        hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition"
        >
          <Icon path={mdiHeartOutline} size={1.5} />
          <div className="text-lg">{post.comments.length}</div>
        </div>
        <div
          className="w-24 h-14 mr-4 flex justify-around items-center border border-slate-500 rounded-full        
         hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition"
        >
          <Icon path={mdiChatOutline} size={1.5} />
          <div className="text-lg">{post.comments.length}</div>
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
