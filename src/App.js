import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import CourseOutline from './components/CourseOutline.js';
import Modules from './components/Modules.js';
import Practicals from './components/Practicals.js';
import Capstone from './components/Capstone.js';
import References from './components/References.js';
import Contact from './components/Contact.js';
import Registration from './components/Registration.js';
import Footer from './components/Footer.js';
import Download from './components/Download.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CourseOutline />
      <Modules />
      <Practicals />
      <Capstone />
      <References />
      <Contact/>
      <Download/>
      <Registration />
      <Footer />
    </div>
  );
}

export default App;