import React from 'react';

export default function Capstone() {
  const projects = [
    "Smart Health Prediction System – ML model + IoT vitals data",
    "AI Chatbot with Sentiment Analysis – NLP + DL integration",
    "Autonomous Irrigation System – Predict crop water needs (IoT + ML)",
    "Cyber Threat Detection – Network log classification using ML",
    "Quantum-Enhanced Classifier – Compare classical vs quantum ML",
    "Emotion Detection from Images – CNN-based DL model",
    "Stock Price Prediction – LSTM with time-series data",
    "Fake News Detection – NLP + Classification pipeline",
    "E-commerce Recommender System – Collaborative filtering using ML",
    "Disease Diagnosis Assistant – ML + Raspberry Pi health sensors"
  ];

  return (
    <div className="section-container">
    <section id="capstone">
      <h2>Capstone Projects</h2>
      <p>Students will work in interdisciplinary teams to develop innovative real-world applications integrating AI, ML, IoT, Cybersecurity, and Quantum Computing.</p>
      <h3>Project Use Cases</h3>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>{proj}</li>
        ))}
      </ul>
      <h3>Assessment Criteria</h3>
      <ul>
        <li>Project Development & Presentation – <strong>30%</strong></li>
        <li>Final MCQ Exam – <strong>30%</strong></li>
        <li>Assignments & Quizzes – <strong>40%</strong></li>
      </ul>
    </section>
    </div>
  );
}
