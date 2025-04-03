import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import ParkGuide from './pages/ParkGuide';
import Blogs from './pages/Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/profile" element={
            <>
              <Header isProfilePage={true} />
              <Profile />
              <Footer />
            </>
          } />
          <Route path="*" element={
            <>
              <Header isProfilePage={false} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/parkguide" element={<ParkGuide />} />
                <Route path="/blogs" element={<Blogs />} />
                {/* Add more routes as needed */}
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
