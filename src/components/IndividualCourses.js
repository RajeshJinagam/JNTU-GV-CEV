import React from 'react';
import course from '../assets/Courses.pdf';

export default function IndividualCourses() {
  return(
    <div className="section-container">
    <section id="individualcourses" data-aos="fade-up">
      <h2>Individual Courses</h2>
      <p>
        Click below to download the individual courses brochure in PDF format.
      </p>
      <a href={course} download className="download-btn">Download PDF</a>
      <div className="section-image">
        <img
          src={require('../assets/first.jpeg')}
          alt="AI Tools"
          style={{ width: '150px', height: '200px', padding:'20px' }}
        />
        <img
          src={require('../assets/second.jpeg')}
          alt="AI Tools"
          style={{ width: '150px', height: '200px', padding:'20px' }}
        />
        <img
          src={require('../assets/third.jpeg')}
          alt="AI Tools"
          style={{ width: '150px', height: '200px', padding:'20px' }}
        />
        <img
          src={require('../assets/fourth.jpeg')}
          alt="AI Tools"
          style={{ width: '150px', height: '200px', padding:'20px' }}
        />
        <img
          src={require('../assets/fifth.jpeg')}
          alt="AI Tools"
          style={{ width: '150px', height: '200px', padding:'20px' }}
        />
        
      </div>
    </section>
    </div>
  );
}