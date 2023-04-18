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
        <Link className="links" to="/shelterorganizations"> Shelters/Organizations </Link>
      </div>
      <div className="login-signup">
        <Link className="links" to="/login"> Login </Link>
        <Link className="links" to="/signup"> Signup </Link>
      </div>
      {/* Change Login button to Logout */}
        {userLogin !== null }
      
    </div>
  );
}

export default NavBar;
