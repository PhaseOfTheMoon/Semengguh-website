<>
  <meta charSet="utf-8" />
  <meta name="description" content="Introduction about the project" />
  <meta name="keywords" content="HTML5 tags" />
  <meta name="author" content="Daryl LIM, Wei Chien CHIN" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Semenggoh</title>
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
  {/* Replace this with your HTML version of header if needed */}
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
        <li className="navbar-item">
          <a href="blogmenu.html">Blogs</a>
        </li>
        <li className="navbar-item">
          <a href="parkguide.html">Park Guide</a>
        </li>
        <div className="nav-btn">
          <a href="registration.html" className="action_btn1" id="signup">
            Sign Up
          </a>
          <span className="divider" />
          <a href="login.html" className="action_btn2" id="login">
            Log In
          </a>
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
                <a href="blogs.html">Blogs</a>
              </li>
              <li>
                <a href="parkguide.html">Park Guide</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-toggle-dropdown">
          <div className="nav-toggle-btn-user">
            <i className="fa-solid fa-user" />
            <ul className="navbar-profile-dropdown">
              <li>
                <a href="registration.html">Sign Up</a>
              </li>
              <li>
                <a href="login.html">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  </header>
  <div className="text-box-registration">
    <h1 className="text-title-registration">REGISTRATION FORM</h1>
  </div>
  <div className="registration-height-container">
    <div className="registration-svg-form">
      <div className="registration-svg">
        <div className="registration-svg-container">
          <img
            src="styles/images/registrationv2-img.png"
            className="registration-svg-image"
            alt="Registration Image"
          />
        </div>
      </div>
      <div className="registration-form">
        <form
          className="registration-form-body"
          id="registrationForm"
          noValidate=""
        >
          <div className="registration-input-container">
            <label htmlFor="firstname" className="registration-input-label">
              First Name:
            </label>
            <div className="registration-input-text">
              <span className="registration-icon">
                <i className="fa-solid fa-user" />
              </span>
              <input
                type="text"
                id="firstname"
                className="registration-input"
                placeholder="E.g. Angel"
                required=""
                maxLength={25}
                pattern="[A-Za-z\s]+"
                title="Only alphabetical characters allowed (A-Z or a-z)"
              />
            </div>
          </div>
          <div className="registration-input-container">
            <label htmlFor="lastname" className="registration-input-label">
              Last Name:
            </label>
            <div className="registration-input-text">
              <span className="registration-icon">
                <i className="fa-solid fa-user" />
              </span>
              <input
                type="text"
                id="lastname"
                className="registration-input"
                placeholder="E.g. Lek"
                required=""
                maxLength={25}
                pattern="[A-Za-z\s]+"
                title="Only alphabetical characters allowed (A-Z or a-z)"
              />
            </div>
          </div>
          <div className="registration-input-container">
            <label htmlFor="username" className="registration-input-label">
              Username:
            </label>
            <div className="registration-input-text">
              <span className="registration-icon">
                <i className="fa-solid fa-user" />
              </span>
              <input
                type="text"
                id="username"
                className="registration-input"
                placeholder="E.g. angellek"
                required=""
                maxLength={25}
                pattern="[A-Za-z\s]+"
                title="Only alphabetical characters allowed (A-Z or a-z)"
              />
            </div>
          </div>
          <div className="registration-input-container">
            <label htmlFor="email" className="registration-input-label">
              Email Address:
            </label>
            <div className="registration-input-text">
              <span className="registration-icon">
                <i className="fa-solid fa-envelope" />
              </span>
              <input
                type="email"
                id="email"
                className="registration-input"
                placeholder="E.g. angellek@gmail.com"
                required=""
              />
            </div>
          </div>
          <div className="registration-input-container">
            <label htmlFor="password" className="registration-input-label">
              Password (25 characters maximum):
            </label>
            <div className="registration-input-text">
              <span className="registration-icon">
                <i className="fa-solid fa-key" />
              </span>
              <input
                type="text"
                id="password"
                className="registration-input"
                required=""
                maxLength={25}
                pattern="[A-Za-z\s]+"
                title="Only alphabetical characters allowed (A-Z or a-z)"
              />
            </div>
          </div>
          <div className="registration-input-container">
            <label
              htmlFor="confirmpassword"
              className="registration-input-label"
            >
              Confirm Password (25 characters maximum):
            </label>
            <div className="registration-input-text">
              <span className="registration-icon">
                <i className="fa-solid fa-key" />
              </span>
              <input
                type="text"
                id="confirmpassword"
                className="registration-input"
                required=""
                maxLength={25}
                pattern="[A-Za-z\s]+"
                title="Only alphabetical characters allowed (A-Z or a-z)"
              />
            </div>
          </div>
          <hr className="registration-hr" />
          <div className="registration-passw-requirement">
            <br />
            <a>
              Your password should be difficult to guess and follow these
              guidelines:
            </a>
            <br />
            <br />
            <ul>
              <li>Maximum of 25 characters</li>
              <li>Only alphabetical characters allowed (A-Z or a-z)</li>
            </ul>
            <br />
          </div>
          <button type="submit" className="register-btn">
            Register Now
          </button>
          <div className="registration-alry-acc">
            <br />
            <br />
            <p>
              Already have an account?{" "}
              <a
                href="login.html"
                title="Login"
                className="registration-custom-login-text"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Replace this with your HTML version of footer if needed */}
  <footer>
    <div className="footer-container">
      <div className="footer-column">
        <h3>Address</h3>
        <p>
          Lot 218, KCLD,
          <br />
          Jalan Tapang, Kota Sentosa,
          <br /> (93250 Kuching, Sarawak, Malaysia)
        </p>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:info@borneoadventure.com">
              info@borneoadventure.com
            </a>
          </li>
          <li>
            Phone: <a href="tel:+1234567890">+123 456 7890</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul className="social-icons">
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" /> Twitter
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
    <div className="footer-row">
      <div className="footer-column">
        <h3>Website Showcase</h3>
        <ul>
          <li>
            <a
              href="https://youtu.be/qpcaOutmXec?si=K1WlNoX6gx7yJBhu"
              title="Website Showcase"
            >
              <i className="fa-brands fa-square-youtube" /> Our Presentation
              Video
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p> © 2025 TerraGuide. All Rights Reserved</p>
    </div>
  </footer>
</>
