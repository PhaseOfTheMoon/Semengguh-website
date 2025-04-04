<>
  <meta charSet="utf-8" />
  <meta name="description" content="Park Guides information" />
  <meta
    name="keywords"
    content="park guides, nature guides, wildlife experts"
  />
  <meta name="author" content="Daryl LIM, Wei Chien CHIN" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Park Guides</title>
  <link
    rel="icon"
    type="image/x-icon"
    href="styles/images/TerraGuide-Favicon.png"
  />
  <link rel="stylesheet" href="styles/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxTve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
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
        <li className="navbar-item">
          <a href="dextai.html">Dext AI</a>
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
  {/* Main Content */}
  <div className="parkguide-page-container">
    <h1 className="parkguide-page-title">Park Guides</h1>
    {/* First Row of Park Guides */}
    <div className="parkguide-container">
      {/* Parkguide Green Box 4 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 4" />
        </div>
        <h3>Emily Chen</h3>
        <p>
          Conservation photographer and naturalist with expertise in Borneo's
          bird species. Leads specialized birdwatching tours.
        </p>
      </div>
      {/* Parkguide Green Box 5 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 5" />
        </div>
        <h3>David Tan</h3>
        <p>
          Former park ranger with extensive knowledge of Semenggoh's trails and
          wildlife habitats. Specializes in night safari experiences.
        </p>
      </div>
      {/* Parkguide Green Box 6 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 6" />
        </div>
        <h3>Lisa Rahman</h3>
        <p>
          Environmental educator focusing on conservation efforts and
          sustainable tourism. Expert in engaging visitors of all ages.
        </p>
      </div>
    </div>
    {/* Second Row of Park Guides */}
    <div
      className="parkguide-container"
      style={{ marginTop: 40, marginBottom: 60 }}
    >
      {/* Parkguide Green Box 7 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 7" />
        </div>
        <h3>Robert Lim</h3>
        <p>
          Botanist specializing in Borneo's unique plant species. Offers tours
          focused on medicinal plants and traditional uses of rainforest flora.
        </p>
      </div>
      {/* Parkguide Green Box 8 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 8" />
        </div>
        <h3>Maria Santos</h3>
        <p>
          Wildlife photographer and conservation advocate. Helps visitors
          capture amazing wildlife moments while teaching about ethical wildlife
          photography.
        </p>
      </div>
      {/* Parkguide Green Box 9 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 9" />
        </div>
        <h3>James Lee</h3>
        <p>
          Entomologist with a passion for Borneo's insect diversity. Leads
          specialized tours focusing on the fascinating world of tropical
          insects.
        </p>
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
