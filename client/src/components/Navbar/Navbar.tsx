import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Store Logo on the left */}
      <Link to="/">
        <img
          src="/storeLogo.jpg"
          alt="Store Logo"
          className="store-logo"
        />
      </Link>
      
      <ul>
        {/* Login, Sign Up, and Logout on the right */}
        {loggedIn() === false ? (
          <>
            <li><Link to="/login" className="button-like">Login</Link></li>
            <li><Link to="/sign-up" className="button-like">Sign Up</Link></li>
          </>
        ) : (
          <li><button onClick={() => logout()} className="button-like">Logout</button></li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;