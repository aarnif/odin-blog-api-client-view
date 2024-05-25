import baseUrl from "../../../baseUrl";

const CommentersView = ({ postId, comments }) => {
  const firstFiveComments = comments.slice(0, 5); // Only show the first five commenters
  return (
    <div className="w-full flex justify-start items-center py-4 border-t text-slate-700 dark:text-slate-200">
      <ul className="flex items-center -space-x-2 overflow-hidden">
        {firstFiveComments.map((comment) => (
          <li key={comment.id}>
            <div
              style={{
                backgroundImage: `url(${baseUrl}/posts/${postId}/comments/${comment.id}/image)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-slate-700"
            ></div>
          </li>
        ))}
      </ul>
      <div className="ml-8">{comments.length} comments</div>
    </div>
  );
};

export default CommentersView;
