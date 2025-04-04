<>
  <meta charSet="utf-8" />
  <meta name="description" content="Timetable for park activities" />
  <meta name="keywords" content="timetable, schedule, activities" />
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
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxTve5UMg5GT6L4JJg=="
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
            <a href="alwin-profile.html">Alwin Ai</a>
            <a href="chin-profile.html">Angel Ai</a>
            <a href="razael-profile.html">Daryl Ai</a>
            <a href="riad-profile.html">Aeron Ai</a>
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
  {/* Main Content */}
  <div className="timetable-page-container">
    <h1 className="timetable-page-title">Timetable</h1>
    {/* First Row of Activities */}
    <div className="timetable-container">
      {/* Green Box 6 - Morning Briefing */}
      <div className="timetable-box">
        <div className="time-badge">9:00am</div>
        <h3>Morning Briefing &amp; Preparation</h3>
        <p>
          Start your day with a comprehensive briefing about the park, safety
          guidelines, and what to expect during your visit.
        </p>
      </div>
      {/* Green Box 7 - Guided Nature Walk */}
      <div className="timetable-box">
        <div className="time-badge">10:30am</div>
        <h3>Morning Guided Nature Walk</h3>
        <p>
          Explore the lush rainforest with our experienced guides who will point
          out interesting flora and fauna along the way.
        </p>
      </div>
      {/* Green Box 8 - Break & Rest */}
      <div className="timetable-box">
        <div className="time-badge">12:00pm</div>
        <h3>Break &amp; Rest</h3>
        <p>
          Take some time to relax, have lunch, and recharge for the afternoon
          activities. Enjoy the peaceful surroundings of the park.
        </p>
      </div>
    </div>
    {/* Second Row of Activities */}
    <div className="timetable-container" style={{ marginTop: 40 }}>
      {/* Green Box 9 - Orangutan Feeding */}
      <div className="timetable-box">
        <div className="time-badge">2:00pm</div>
        <h3>Orangutan Feeding Session</h3>
        <p>
          Witness the orangutans during their feeding time. Learn about their
          diet, behavior, and conservation efforts to protect these amazing
          primates.
        </p>
      </div>
      {/* Green Box 10 - Conservation Talk */}
      <div className="timetable-box">
        <div className="time-badge">3:30pm</div>
        <h3>Conservation Talk</h3>
        <p>
          Join our conservation experts for an informative session about the
          challenges facing Borneo's wildlife and how we can help protect them.
        </p>
      </div>
      {/* Green Box 11 - Afternoon Walk */}
      <div className="timetable-box">
        <div className="time-badge">4:30pm</div>
        <h3>Afternoon Nature Walk</h3>
        <p>
          Experience the rainforest as it transitions into evening. Different
          wildlife becomes active during this time, offering new sightings.
        </p>
      </div>
    </div>
    {/* Third Row of Activities */}
    <div
      className="timetable-container"
      style={{ marginTop: 40, marginBottom: 60 }}
    >
      {/* Green Box 12 - Evening Briefing */}
      <div className="timetable-box">
        <div className="time-badge">6:00pm</div>
        <h3>Evening Briefing</h3>
        <p>
          Gather for a summary of the day's activities and prepare for any
          evening programs if you're staying overnight at the park.
        </p>
      </div>
      {/* Green Box 13 - Night Safari */}
      <div className="timetable-box">
        <div className="time-badge">7:30pm</div>
        <h3>Night Safari (Optional)</h3>
        <p>
          For overnight guests, join our guided night safari to spot nocturnal
          creatures and experience the rainforest after dark.
        </p>
      </div>
      {/* Green Box 14 - Stargazing */}
      <div className="timetable-box">
        <div className="time-badge">9:00pm</div>
        <h3>Stargazing Session</h3>
        <p>
          End your day by observing the stars from our viewing platform. Learn
          about constellations and enjoy the peaceful night atmosphere.
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
