import { Link } from "react-router-dom";
import { CartState } from "../Context";
import "./styles.css";

const Header = () => {
  const { cart } = CartState();

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
