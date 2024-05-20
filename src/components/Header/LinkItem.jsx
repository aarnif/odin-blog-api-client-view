import { Link, useMatch } from "react-router-dom";

const LinkItem = ({ to, itemName }) => {
  const match = useMatch(to);
  return (
    <li className="h-full flex-grow flex justify-center items-center hover:bg-slate-300 transition">
      <Link
        to={to}
        className="h-full w-full flex justify-center items-center transition"
        style={{
          fontWeight: match && "bold",
          color: match && "#2b6cb0",
          borderBottom: match && "2px solid #2b6cb0",
        }}
      >
        {itemName}
      </Link>
    </li>
  );
};

export default LinkItem;
