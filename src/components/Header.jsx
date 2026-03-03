import "./Header.css";
import logo from "./sndtlogo.webp";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header-content">

        {/* Left Side */}
        <div className="logo-section">
          <img src={logo} alt="College Logo" className="logo" />
          <h1 className="college-name">UMIT Events</h1>
        </div>

        {/* Right Side Navbar */}
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/about">About</Link>
          <Link to="/login" className="login-btnnavbar">Login</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;