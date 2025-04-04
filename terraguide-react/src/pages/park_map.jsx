<>
  &lt;&gt;
  <meta charSet="utf-8" />
  <meta name="description" content="Introduction about the project" />
  <meta name="keywords" content="HTML5 tags" />
  <meta name="author" content="Daryl LIM, Wei Chien CHIN" />
  <meta httpequiv="X-UA-Compatible" content="IE=edge" />
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
  <p>hello cruelii world</p>
  {"{"}/* Header (static replacement of PHP include) */{"}"}
  <header classname="header">
    <nav id="navbar" classname="navbar-template">
      <div classname="nav-logo">
        <a href="index.html">
          <img src="styles/images/TerraGuide_Logo.png" alt="TerraGuide Logo" />
        </a>
      </div>
      <ul id="nav-links" classname="nav-links">
        <li classname="navbar-item">
          <a href="index.html">Home</a>
        </li>
        <li classname="navbar-item">
          <a href="aboutus.html">About Us</a>
        </li>
        <li classname="navbar-dropdown">
          <div classname="navbar-dropbtn">
            <a href="mycourses.html" classname="navbar-dropbtn-text-btn">
              My Courses
            </a>
            <i classname="fa fa-caret-down"></i>
          </div>
          <i classname="fa fa-caret-down">
            <div classname="navbar-dropdown-content">
              <a href="tools.html">Course 1</a>
              <a href="care.html">Course 2</a>
            </div>
          </i>
        </li>
        <i classname="fa fa-caret-down">
          <li classname="navbar-dropdown">
            <div classname="navbar-dropbtn">
              <a href="dextai.html" classname="navbar-dropbtn-text-btn">
                Dext AI
              </a>
              <i classname="fa fa-caret-down"></i>
            </div>
            <i classname="fa fa-caret-down">
              <div classname="navbar-dropdown-content">
                <a href="alwin-profile.html">Alwin's Profile</a>
                <a href="chin-profile.html">Chin's Profile</a>
                <a href="razael-profile.html">Razael's Profile</a>
                <a href="riad-profile.html">Riad's Profile</a>
              </div>
            </i>
          </li>
          <i classname="fa fa-caret-down">
            <li classname="navbar-item">
              <a href="blogmenu.html">Blogs</a>
            </li>
            <li classname="navbar-item">
              <a href="parkguide.html">Park Guide</a>
            </li>
            <div classname="nav-btn">
              <a href="registration.html" classname="action_btn1" id="signup">
                Sign Up
              </a>
              <span classname="divider">
                <a href="login.html" classname="action_btn2" id="login">
                  Log In
                </a>
              </span>
            </div>
            {"{"}/* Mobile toggle menus */{"}"}
            <div classname="navbar-toggle-dropdown">
              <div classname="nav-toggle-btn-bars">
                <i classname="fa-solid fa-bars">
                  <ul classname="navbar-menu-dropdown">
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
                </i>
              </div>
              <i classname="fa-solid fa-bars"></i>
            </div>
            <i classname="fa-solid fa-bars">
              <div classname="navbar-toggle-dropdown">
                <div classname="nav-toggle-btn-user">
                  <i classname="fa-solid fa-user">
                    <ul classname="navbar-profile-dropdown">
                      <li>
                        <a href="registration.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="login.html">Log In</a>
                      </li>
                    </ul>
                  </i>
                </div>
                <i classname="fa-solid fa-user"></i>
              </div>
              <i classname="fa-solid fa-user"></i>
            </i>
          </i>
        </i>
      </ul>
      <i classname="fa fa-caret-down">
        <i classname="fa fa-caret-down">
          <i classname="fa-solid fa-bars">
            <i classname="fa-solid fa-user"></i>
          </i>
        </i>
      </i>
    </nav>
    <i classname="fa fa-caret-down">
      <i classname="fa fa-caret-down">
        <i classname="fa-solid fa-bars">
          <i classname="fa-solid fa-user"></i>
        </i>
      </i>
    </i>
  </header>
  <i classname="fa fa-caret-down">
    <i classname="fa fa-caret-down">
      <i classname="fa-solid fa-bars">
        <i classname="fa-solid fa-user">
          <div classname="title-container">
            <h3 classname="section-title">Semenggoh Park Map</h3>
            <div classname="underline"></div>
            <div classname="search-container">
              <input
                id="searchInput"
                classname="search-box"
                type="text"
                placeholder="search place"
                defaultvalue="Semenggoh"
              />
            </div>
            <div classname="map-container">
              <div id="map"></div>
              <div classname="P-container">
                <h3>
                  Popular Tourist Spot{"{"}" "{"}"}
                  <span classname="tgl-btn" onclick="toggleSpots()">
                    See All
                  </span>
                </h3>
                <div classname="pm-grid" id="pm-spots">
                  <div classname="card">
                    <div classname="top-text">Top 1</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                  <div classname="card">
                    <div classname="top-text">Top 2</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                  <div classname="card">
                    <div classname="top-text">Top 3</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                  <div classname="card hidden">
                    <div classname="top-text">Top 4</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                  <div classname="card hidden">
                    <div classname="top-text">Top 5</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                  <div classname="card hidden">
                    <div classname="top-text">Top 6</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                  <div classname="card hidden">
                    <div classname="top-text">Top 7</div>
                    <div classname="image-container">
                      <img
                        src="styles/images/test.jpg"
                        alt="San Francisco"
                        classname="card-image"
                      />
                    </div>
                    <div classname="card-title">San Francisco</div>
                    <div classname="card-description">
                      San Francisco is a part of california
                    </div>
                  </div>
                </div>
              </div>
              <div classname="pdf-map-container">
                <div classname="map-header">
                  <h3 classname="map-title">View Tourist Map</h3>
                  <a href="your-pdf-link.pdf" classname="view-pdf">
                    View in PDF
                  </a>
                </div>
                <div classname="map-box">
                  <img
                    src="your-map-image.jpg"
                    alt="Tourist Map"
                    classname="map-image"
                  />
                </div>
              </div>
              <div classname="back-container">
                <button classname="back-button">Back</button>
              </div>
              {"{"}/* Footer (static replacement of PHP include) */{"}"}
              <footer>
                <div classname="footer-container">
                  <div classname="footer-column">
                    <h3>Address</h3>
                    <p>
                      Lot 218, KCLD,
                      <br />
                      Jalan Tapang, Kota Sentosa,
                      <br /> (93250 Kuching, Sarawak, Malaysia)
                    </p>
                  </div>
                  <div classname="footer-column">
                    <h3>Contact Us</h3>
                    <ul>
                      <li>
                        Email:{"{"}" "{"}"}
                        <a href="mailto:info@borneoadventure.com">
                          info@borneoadventure.com
                        </a>
                      </li>
                      <li>
                        Phone: <a href="tel:+1234567890">+123 456 7890</a>
                      </li>
                    </ul>
                  </div>
                  <div classname="footer-column">
                    <h3>Follow Us</h3>
                    <ul classname="social-icons">
                      <li>
                        <a href="#">
                          <i classname="fa-brands fa-facebook"> Facebook</i>
                        </a>
                        <i classname="fa-brands fa-facebook"></i>
                      </li>
                      <i classname="fa-brands fa-facebook">
                        <li>
                          <a href="#">
                            <i classname="fa-brands fa-twitter"> Twitter</i>
                          </a>
                          <i classname="fa-brands fa-twitter"></i>
                        </li>
                        <i classname="fa-brands fa-twitter">
                          <li>
                            <a href="#">
                              <i classname="fa-brands fa-instagram">
                                {" "}
                                Instagram
                              </i>
                            </a>
                            <i classname="fa-brands fa-instagram"></i>
                          </li>
                          <i classname="fa-brands fa-instagram"></i>
                        </i>
                      </i>
                    </ul>
                    <i classname="fa-brands fa-facebook">
                      <i classname="fa-brands fa-twitter">
                        <i classname="fa-brands fa-instagram"></i>
                      </i>
                    </i>
                  </div>
                  <i classname="fa-brands fa-facebook">
                    <i classname="fa-brands fa-twitter">
                      <i classname="fa-brands fa-instagram"></i>
                    </i>
                  </i>
                </div>
                <i classname="fa-brands fa-facebook">
                  <i classname="fa-brands fa-twitter">
                    <i classname="fa-brands fa-instagram">
                      <div classname="footer-row">
                        <div classname="footer-column">
                          <h3>Website Showcase</h3>
                          <ul>
                            <li>
                              <a
                                href="https://youtu.be/qpcaOutmXec?si=K1WlNoX6gx7yJBhu"
                                title="Website Showcase"
                              >
                                <i classname="fa-brands fa-square-youtube">
                                  {" "}
                                  Our Presentation Video
                                </i>
                              </a>
                              <i classname="fa-brands fa-square-youtube"></i>
                            </li>
                            <i classname="fa-brands fa-square-youtube"></i>
                          </ul>
                          <i classname="fa-brands fa-square-youtube"></i>
                        </div>
                        <i classname="fa-brands fa-square-youtube"></i>
                      </div>
                      <i classname="fa-brands fa-square-youtube">
                        <div classname="footer-bottom">
                          <p> © 2025 TerraGuide. All Rights Reserved</p>
                        </div>
                      </i>
                    </i>
                  </i>
                </i>
              </footer>
              <i classname="fa-brands fa-facebook">
                <i classname="fa-brands fa-twitter">
                  <i classname="fa-brands fa-instagram">
                    <i classname="fa-brands fa-square-youtube"></i>
                  </i>
                </i>
              </i>
            </div>
          </div>
        </i>
      </i>
    </i>
  </i>
</>
