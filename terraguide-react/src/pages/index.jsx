<>
  <meta charSet="utf-8" />
  <meta name="description" content="Introduction about the project" />
  <meta name="keywords" content="HTML5 tags" />
  <meta name="author" content="Daryl LIM, Wei Chien CHIN" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
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
  {/* slideshow 1 */}
  <div className="registration-height-container">
    <div className="registration-svg-form-index">
      {" "}
      {/* green box */}
      <div className="slideshow-container">
        {/* Slide 1 */}
        <div className="mySlides">
          <div className="slide-left">
            <h1>BOOK A PARK GUIDE</h1>
            <div className="slieshow1text">
              <p>
                Park Guide can help you explore the entire Semenggoh Nature
                Reserve.
              </p>
              <p>Book it Now!</p>
            </div>
          </div>
          <div className="slide-right">
            <img src="styles/images/icon1.svg" alt="Slide 1 Image" />
            <a href="dexai.html" className="slide-btn">
              BOOK NOW
            </a>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="mySlides">
          <div className="slide-left">
            <h1>FLORA &amp; FAUNA</h1>
            <div className="slieshow1text">
              <p>
                Our AI can identify any endanger animal and plants in the
                National Park
              </p>
              <p>Give it a try now!</p>
            </div>
          </div>
          <div className="slide-right">
            <img src="styles/images/icon2.svg" alt="Slide 2 Image" />
            <a href="dexai.html" className="slide-btn">
              GET STARTED
            </a>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="mySlides">
          <div className="slide-left">
            <h1>RECCOMENDATION SYSTEM</h1>
            <div className="slieshow1text">
              <p>
                Our AI can recommend any further course after taking the
                Introduction to Park Guide{" "}
              </p>
              <p>Give it a try now!</p>{" "}
            </div>
          </div>
          <div className="slide-right">
            <img src="styles/images/icon3.svg" alt="Slide 3 Image" />
            <a href="dexai.html" className="slide-btn">
              GET STARTED
            </a>
          </div>
        </div>
        {/* Dots under slideshow (inside green box) */}
        <div className="dot-container">
          <span className="dot" onclick="currentSlide(1)" />
          <span className="dot" onclick="currentSlide(2)" />
          <span className="dot" onclick="currentSlide(3)" />
        </div>
      </div>
    </div>
  </div>
  <div className="green-box-map-aeron">
    <p>The Parks Map</p>
    <div id="map" />
  </div>
  {/* Featured Blogs Section */}
  <div className="table-section">
    <div className="table-title-container">
      <h1 className="table-title">Featured Blogs</h1>
      <a href="blogmenu.html" className="see-all-btn2">
        All blogs
      </a>
    </div>
  </div>
  {/* Slideshow 2 */}
  <div className="slideshow-container-2">
    <div className="mySlides2">
      <img
        src="styles/images/smg1.png"
        className="slide-image"
        alt="Slide 1 Image"
      />
      <div className="green-box-s2">
        <h2>The History of Semenggoh Nature Reserve.</h2>
        <p>
          Semenggoh Wildlife Centre enables tourists to interact with wild orang
          utans and enjoy the orang utans feeding time for the amazing
          experience. For more than thirty years...
        </p>
      </div>
    </div>
    <div className="mySlides2">
      <img
        src="styles/images/smg2.png"
        className="slide-image"
        alt="Slide 2 Image"
      />
      <div className="green-box-s2">
        <h2>Species of Orangutan</h2>
        <p>
          Discover areas where you can spot endangered species such as
          orangutans...
        </p>
      </div>
    </div>
    <div className="mySlides2">
      <img
        src="styles/images/smg5.png"
        className="slide-image"
        alt="Slide 3 Image"
      />
      <div className="green-box-s2">
        <h2>Best Hiking Routes</h2>
        <p>Plan your hiking adventure with detailed route maps.</p>
      </div>
    </div>
    <div className="arrow-container">
      <span className="arrow" onclick="plusSlides2(-1)">
        ❮
      </span>
      <span className="arrow" onclick="plusSlides2(1)">
        ❯
      </span>
    </div>
  </div>
  {/* end of slideshow 2 */}
  {/* Timetable Section */}
  <div className="timetable-section">
    <div className="timetable-title-container">
      <h1 className="timetable-title">Timetable</h1>
      <a href="timetable.html" className="see-all-btn">
        See all activities
      </a>
    </div>
    <div className="timetable-container">
      {/* Green Box 3 - Morning Briefing */}
      <div className="timetable-box">
        <div className="time-badge">9:00am</div>
        <h3>Morning Briefing &amp; Preparation</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat et
          metus varius.
        </p>
      </div>
      {/* Green Box 4 - Guided Nature Walk */}
      <div className="timetable-box">
        <div className="time-badge">10:30am</div>
        <h3>Morning Guided Nature Walk</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat et
          metus varius.
        </p>
      </div>
      {/* Green Box 5 - Break & Rest */}
      <div className="timetable-box">
        <div className="time-badge">12:00pm</div>
        <h3>Break &amp; Rest</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat et
          metus varius. Nulla vitae et amet.
        </p>
      </div>
    </div>
  </div>
  {/* Park Guides Section */}
  <div className="parkguide-section">
    <div className="parkguide-title-container">
      <h1 className="parkguide-title">Park Guides</h1>
      <a href="parkguide.html" className="see-all-btn">
        See all guides
      </a>
    </div>
    <div className="parkguide-container">
      {/* Parkguide Green Box 1 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 1" />
        </div>
        <h3>John Smith</h3>
        <p>
          Experienced guide with 10+ years in Semenggoh Nature Reserve. Expert
          in orangutan behavior and rainforest ecology.
        </p>
      </div>
      {/* Parkguide Green Box 2 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 2" />
        </div>
        <h3>Sarah Johnson</h3>
        <p>
          Wildlife biologist specializing in primate conservation. Passionate
          about educating visitors on Borneo's unique ecosystem.
        </p>
      </div>
      {/* Parkguide Green Box 3 */}
      <div className="parkguide-box">
        <div className="guide-image">
          <img src="styles/images/parkguide_example.png" alt="Park Guide 3" />
        </div>
        <h3>Michael Wong</h3>
        <p>
          Local expert with deep knowledge of indigenous traditions and
          medicinal plants of the Borneo rainforest.
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
