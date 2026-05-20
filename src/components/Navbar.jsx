import { Button } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import logo from "../assets/Group 2.svg";
import rocket from '../assets/vector.svg'
import { useNavigate } from "react-router";

function Navbar() {
	const navigate = useNavigate();

  return (
    <nav className="navbar-section mx-4">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">

          {/* LOGO */}
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Alihassan Logo"
              className="logo-img"
            />
          </div>

          {/* NAV LINKS */}
          <ul className="nav-links d-none d-lg-flex">
            <li className="txt-primary">Home</li>
            <li>Eco System</li>
            <li>About Us</li>
            <li>News</li>
            <li>Contacts</li>
            <li>Winners</li>
          </ul>

          {/* BUTTON */}
          <Button
            variant="contained"
            endIcon={<img src={rocket} alt="Company logo" />}
            className="launch-btn"
			onClick={()=> navigate('/launch')}
          >
            Launch Now 
          </Button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;