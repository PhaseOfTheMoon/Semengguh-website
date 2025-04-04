<>
  <meta charSet="utf-8" />
  <meta name="description" content="Park Guide Profile" />
  <meta name="keywords" content="HTML5 tags, park guide, profile" />
  <meta name="author" content="Daryl LIM, Wei Chien CHIN" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Park Guide Profile | TerraGuide</title>
  <link
    rel="icon"
    type="image/x-icon"
    href="styles/images/TerraGuide-Favicon.png"
  />
  <link rel="stylesheet" href="styles/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* Header (static replacement of PHP include) */}
  <header className="header">
    <nav id="navbar" className="navbar-template">
      <div className="nav-logo">
        <a href="index.html">
          <img src="styles/images/TerraGuide_Logo.png" alt="TerraGuide Logo" />
        </a>
      </div>
      <ul id="nav-links" className="nav-links">
        <li className="navbar-item">
          <a href="index.html">Home</a>
        </li>
        <li className="navbar-item">
          <a href="aboutus.html">About Us</a>
        </li>
        <li className="navbar-dropdown">
          <div className="navbar-dropbtn">
            <a href="mycourses.html" className="navbar-dropbtn-text-btn">
              My Courses
            </a>
            <i className="fa fa-caret-down" />
          </div>
          <div className="navbar-dropdown-content">
            <a href="tools.html">Course 1</a>
            <a href="care.html">Course 2</a>
          </div>
        </li>
        <li className="navbar-dropdown">
          <div className="navbar-dropbtn">
            <a href="dextai.html" className="navbar-dropbtn-text-btn">
              Dext AI
            </a>
            <i className="fa fa-caret-down" />
          </div>
          <div className="navbar-dropdown-content">
            <a href="alwin-profile.html">Alwin's Profile</a>
            <a href="chin-profile.html">Chin's Profile</a>
            <a href="razael-profile.html">Razael's Profile</a>
            <a href="riad-profile.html">Riad's Profile</a>
          </div>
        </li>
        <li className="navbar-dropdown">
          <div className="navbar-dropbtn">
            <a href="blogs.html" className="navbar-dropbtn-text-btn">
              Blogs
            </a>
            <i className="fa fa-caret-down" />
          </div>
          <div className="navbar-dropdown-content">
            <a href="blogmenu.html">Blogs</a>
          </div>
        </li>
        <li className="navbar-item">
          <a href="parkguide.html">Park Guide</a>
        </li>
      </ul>
      {/* Replace sign up/login with search, bell and avatar */}
      {/* Replace the nav-btn div with this */}
      <div className="nav-btn profile-header-icons">
        <a href="#" className="profile-icon-btn">
          <i className="fas fa-search" />
        </a>
        <a href="#" className="profile-icon-btn">
          <i className="fas fa-bell" />
        </a>
        <div className="profile-header-avatar">
          <img src="styles/images/parkguide_example.png" alt="User Avatar" />
        </div>
      </div>
      {/* Mobile toggle menus */}
      <div className="navbar-toggle-dropdown">
        <div className="nav-toggle-btn-bars">
          <i className="fa-solid fa-bars" />
          <ul className="navbar-menu-dropdown">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="aboutus.html">About Us</a>
            </li>
            <li>
              <a href="courses.html">My Courses</a>
            </li>
            <li>
              <a href="dextai.html">Dext AI</a>
            </li>
            <li>
              <a href="blogmenu.html">Blogs</a>
            </li>
            <li>
              <a href="parkguide.html">Park Guide</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* Park Guide Profile Content */}
  <div className="guide-profile-container">
    <div className="guide-avatar-container">
      <img
        src="styles/images/parkguide_example.png"
        alt="Park Guide Avatar"
        className="guide-avatar"
      />
    </div>
    <h2 className="guide-name">Timmy He</h2>
    <div className="guide-description-section">
      <h3>Description:</h3>
      <div className="guide-description" contentEditable="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
        minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut enim ad minim veniam.
      </div>
      <div className="separator-line" />
    </div>
    {/* In the guide-actions div, update the back button */}
    <div className="guide-actions">
      <a href="index.html" className="back-button">
        Back
      </a>
    </div>
  </div>
  {/* Footer (static replacement of PHP include) */}
  <footer>
    <div className="footer-container">
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Phone Number: +601234567</p>
        <p>Email Address: terraguide@gmail.com</p>
      </div>
      <div className="footer-column">
        <h3>Address</h3>
        <p>
          NBK Phase 2, The Northbank, GROUND FLOOR, Salak 22 (SL 22/4866, 93050
          Kuching)
        </p>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" /> Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram" /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>©2024 TerraGuide. All Rights Reserved</p>
    </div>
  </footer>
</>
