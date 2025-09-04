import React from 'react';
import form from '../assets/form.pdf';
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>CERTIFICATION IN EMERGING TECHNOLOGIES</h1>
        <p>Offered by JNTU-GV, Vizianagaram</p>
        <p>AI, ML, IoT, Cybersecurity, Quantum | Duration: 3 Months | Hybrid Mode</p>
        <p><strong>Fee:</strong> ₹20,000 | ₹15,000 for Women/SC/ST</p>
        <p><strong>Installment Option:</strong> Fee can be paid in two installments</p>
        
        <a href="https://forms.gle/8B8hWybHvdhUNmtt9" target="_blank" rel="noreferrer">
          <button>Register Now</button>
        </a>
        <br></br>
          <a href={form} download className="download-btn">Download Application</a>
      </div>
    </section>
  );
}
