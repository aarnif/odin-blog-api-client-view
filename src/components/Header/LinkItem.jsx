import { Link } from "react-router-dom";

const LinkItem = ({ to, itemName }) => {
  return (
    <li>
      <Link to={to} className="hover:underline">
        {itemName}
      </Link>
    </li>
  );
};

export default LinkItem;
