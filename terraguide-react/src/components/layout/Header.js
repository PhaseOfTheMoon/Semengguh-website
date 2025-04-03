import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isProfilePage = false }) => {
  return (
    <header className="header">
      <nav id="navbar" className="navbar-template">
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/TerraGuide_Logo.png" alt="TerraGuide Logo" />
          </Link>
        </div>

        <ul id="nav-links" className="nav-links">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="navbar-dropdown">
            <div className="navbar-dropbtn">
              <Link to="/mycourses" className="navbar-dropbtn-text-btn">My Courses</Link>
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="navbar-dropdown-content">
              <Link to="/tools">Course 1</Link>
              <Link to="/care">Course 2</Link>
            </div>
          </li>
          <li className="navbar-dropdown">
            <div className="navbar-dropbtn">
              <Link to="/dextai" className="navbar-dropbtn-text-btn">Dext AI</Link>
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="navbar-dropdown-content">
              <Link to="/alwin-profile">Alwin's Profile</Link>
              <Link to="/chin-profile">Chin's Profile</Link>
              <Link to="/razael-profile">Razael's Profile</Link>
              <Link to="/riad-profile">Riad's Profile</Link>
            </div>
          </li>
          <li className="navbar-dropdown">
            <div className="navbar-dropbtn">
              <Link to="/blogs" className="navbar-dropbtn-text-btn">Blogs</Link>
              <i className="fa fa-caret-down"></i>
            </div>
            <div className="navbar-dropdown-content">
              <Link to="/blogmenu">Blogs</Link>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/parkguide">Park Guide</Link>
          </li>
        </ul>

        {isProfilePage ? (
          <div className="nav-btn profile-header-icons">
            <a href="#" className="profile-icon-btn"><i className="fas fa-search"></i></a>
            <a href="#" className="profile-icon-btn"><i className="fas fa-bell"></i></a>
            <div className="profile-header-avatar">
              <img src="/images/parkguide_example.png" alt="User Avatar" />
            </div>
          </div>
        ) : (
          <div className="nav-btn">
            <Link to="/registration" className="action_btn1" id="signup">Sign Up</Link>
            <span className="divider"></span>
            <Link to="/login" className="action_btn2" id="login">Log In</Link>
          </div>
        )}

        {/* Mobile toggle menus */}
        <div className="navbar-toggle-dropdown">
          <div className="nav-toggle-btn-bars">
            <i className="fa-solid fa-bars"></i>
            <ul className="navbar-menu-dropdown">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/courses">My Courses</Link></li>
              <li><Link to="/dextai">Dext AI</Link></li>
              <li><Link to="/blogmenu">Blogs</Link></li>
              <li><Link to="/parkguide">Park Guide</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;