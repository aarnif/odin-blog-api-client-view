import Icon from "@mdi/react";
import { mdiChatOutline, mdiHeartOutline } from "@mdi/js";

const CommentIcons = () => {
  return (
    <div className="w-full flex justify-between items-center mb-4 py-4 text-slate-500 dark:text-slate-300">
      <div className="flex justify-start items-center">
        <div
          className="mr-4 p-2 flex justify-around items-center rounded-full
        hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition
        dark:hover:bg-slate-800 dark:text-slate-300"
        >
          <Icon path={mdiHeartOutline} size={1} className="mr-1" />
          <div className="text-md">LIKE</div>
        </div>
        <div
          className="p-2 flex justify-around items-center rounded-full       
         hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition
         dark:hover:bg-slate-800 dark:text-slate-300"
        >
          <Icon path={mdiChatOutline} size={1} className="mr-1" />
          <div className="text-md">REPLY</div>
        </div>
      </div>
      <div
        className="w-16 p-2 flex justify-around items-center rounded-full        
         hover:bg-slate-300 hover:text-slate-100 hover:cursor-pointer active:scale-95 transition
         dark:hover:bg-slate-800 dark:text-slate-300"
      >
        <div className="text-md">SHARE</div>
      </div>
    </div>
  );
};

export default CommentIcons;
