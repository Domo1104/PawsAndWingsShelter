import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({ handleLogout, userLogin }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h3 className="logo" onClick={() => navigate("/")}> P . A . W . S </h3>
      <div className="nav-links">
        <Link className="links" to="/dogadoption"> Dog Adoption </Link>
        <Link className="links" to="/catadoption"> Cat Adoption </Link>
        <Link className="links" to="/birdadoption"> Bird Adoption </Link>
        <Link className="links" to="/petcare"> Pet Care </Link>
        <Link className="links" to="/sheltersorganizations"> Shelters/Organizations </Link>
        <Link className="links" to="/accountinfo"> Account Info </Link>
      </div>
      {/* Change Login button to Logout */}
      {userLogin !== null ? (
          <div className="login-signup">
            <Link className="link" to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="login-signup">
            <Link className="link" to="/signup">
              Sign Up
            </Link>
            <Link className="link" to="/login">
              Log In
            </Link>
          </div>
        )}
    </div>
  );
}

export default NavBar;
