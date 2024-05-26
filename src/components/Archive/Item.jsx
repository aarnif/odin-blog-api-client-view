import baseUrl from "../../baseUrl";

import { Link } from "react-router-dom";

const Item = ({ post }) => {
  return (
    <div className="w-full flex justify-between items-start py-8 border-b border-b-slate-300">
      <div>
        <Link to={`/posts/${post.id}`}>
          <h2 className="text-2xl font-bold">{post.title}</h2>
        </Link>
        <h3 className="mt-2 text-xl text-slate-600 dark:text-slate-300">
          {post.lead}
        </h3>
        <div className="mt-2 flex justify-start text-slate-500 dark:text-slate-300">
          <div className="mr-1">{post.createdAt}</div>
          <div className="mr-1">•</div>
          <div className="mr-1">{post.author.name.toUpperCase()}</div>
        </div>
      </div>
      <div
        className="min-w-60 h-40 bg-slate-400 rounded-lg"
        style={{
          backgroundImage: `url(${baseUrl}/posts/${post.id}/image)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Item;
