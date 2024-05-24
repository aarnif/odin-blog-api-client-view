import { Link, useMatch } from "react-router-dom";

const LinkItem = ({ to, itemName }) => {
  const match = useMatch(to);
  return (
    <li className="h-full flex-grow flex justify-center items-center hover:bg-slate-300 transition font-subtitle">
      <Link
        to={to}
        className="h-full w-full flex justify-center items-center transition"
        style={{
          fontWeight: match && "bold",
          color: match && "#92400e",
          borderBottom: match && "2px solid #92400e",
        }}
      >
        {itemName}
      </Link>
    </li>
  );
};

export default LinkItem;
