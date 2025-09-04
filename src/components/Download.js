import React from 'react';
import brochure from '../assets/Download.pdf';
import form from '../assets/form.pdf';

export default function Download() {
  return(
    <div className="section-container">
    <section id="download" data-aos="fade-up">
      <h2>Course Brochure</h2>
      <p>
        Click below to download the official course brochure in PDF format.
      </p>
      <a href={brochure} download className="download-btn">Download PDF</a>
      <br></br>
      <a href={form} download className="download-btn">Download Application</a>
      <div className="section-image">
        <img
          src={require('../assets/Brocheure.jpg')}
          alt="AI Tools"
          style={{ width: '200px', height: '250px', padding:'20px' }}
        />
      </div>
    </section>
    </div>
  );
}