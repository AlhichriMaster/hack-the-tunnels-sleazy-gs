import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      {/* <ul>
        <li>
          <div>
            <div className="navbar__logo">
              <Link to="/">Store Logo</Link>
            </div>

            <div className="navbar__account">
              {loggedIn() === false ? (
                <>
                <li style={{float: 'right' }}><Link to="/sign-up" >Sign Up</Link></li>
                  
                <li style={{float: 'right' }}><Link to="/login">Login</Link></li>
                </>
              ) : (
                // <Link to="logout()">Logout</Link>
                <button onClick={() => logout()}>Logout</button>
              )}
            </div>
          </div>
        </li>
      </ul> */}

      
      <ul>

        <li><Link to="/">Store Logo</Link></li>

        {loggedIn() === false ? (
            <>
            <li style={{float: 'right' }}><Link to="/sign-up" >Sign Up</Link></li>
              
            <li style={{float: 'right' }}><Link to="/login">Login</Link></li>
            </>
          ) : (
            // <Link to="logout()">Logout</Link>
            <button onClick={() => logout()}>Logout</button>
          )}

      </ul>
      
      
    </div>
  );
}

export default Navbar;