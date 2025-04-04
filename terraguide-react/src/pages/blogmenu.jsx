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
  <link rel="stylesheet" href="src/assets/style.css" />
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
          <img src="src/assets/images/TerraGuide_Logo.png" alt="TerraGuide Logo" />
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
  <div className="b-container">
    <h3>
      Popular Tourist Spot{" "}
      <span className="tgl-btn" onclick="toggleSpots()">
        See All
      </span>
    </h3>
    <div className="blog-grid" id="pm-spots">
      <a href="blogs.html" className="b-card-link">
        <div className="b-card">
          <div className="b-image-container">
            <img
              src="styles/images/smg1.png"
              alt="The History of Semenggoh..."
              className="b-card-image"
            />
          </div>
          <div className="b-content">
            <div className="b-card-title">The History of Semenggoh...</div>
            <div className="b-card-description">
              Semenggoh Wildlife Centre enables tourists to interact with wild
              orang utans and enjoy the orang utans feeding time for the amazing
              experience.
            </div>
          </div>
        </div>
      </a>
      <a href="blogs2.html" className="b-card-link">
        <div className="b-card">
          <div className="b-image-container">
            <img
              src="styles/images/smg2.png"
              alt="Species of Orang Utan"
              className=" b-card-image"
            />
          </div>
          <div className="b-content">
            <div className="b-card-title">Species of Orang Utan</div>
            <div className="b-card-description">
              Orangutans typically inhabit the majority of Sarawak's southern
              region. There are currently only a few orangutans in Sarawak, with
              the majority of them living in the Batang Ai National Park (BANP)
            </div>
          </div>
        </div>
      </a>
      <div className="coming-soon-card">
        <div className="coming-soon-box">Coming Soon</div>
        <div className="coming-soon-title">Coming Soon</div>
        <div className="coming-soon-text">Coming Soon</div>
      </div>
      <div className="coming-soon-card hidden">
        <div className="coming-soon-box">Coming Soon</div>
        <div className="coming-soon-title">Coming Soon</div>
        <div className="coming-soon-text">Coming Soon</div>
      </div>
      <div className="coming-soon-card hidden">
        <div className="coming-soon-box">Coming Soon</div>
        <div className="coming-soon-title">Coming Soon</div>
        <div className="coming-soon-text">Coming Soon</div>
      </div>
      <div className="coming-soon-card hidden">
        <div className="coming-soon-box">Coming Soon</div>
        <div className="coming-soon-title">Coming Soon</div>
        <div className="coming-soon-text">Coming Soon</div>
      </div>
    </div>
  </div>
  {/* Footer (static replacement of PHP include) */}
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
