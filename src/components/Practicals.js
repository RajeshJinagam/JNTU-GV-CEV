import React from 'react';

export default function Practicals() {
  const tasks = [
    "Build a Rule-Based Chatbot using Python",
    "Create a Sentiment Analysis Tool using Scikit-learn",
    "Train a Logistic Regression Model for Diabetes Prediction",
    "Develop a CNN for Digit Recognition (MNIST Dataset)",
    "Customer Segmentation using K-Means Clustering",
    "Build a Real-Time IoT Dashboard for Temperature Monitoring",
    "Automate Smart Irrigation System using Soil Moisture Sensor",
    "Create a Secure Login System using Password Hashing",
    "Analyze Network Packets using Wireshark",
    "Perform SQL Injection Demo using DVWA",
    "Implement Caesar Cipher and Vigenère Cipher in Python",
    "Train and Evaluate a Random Forest Classifier for Credit Scoring",
    "Simulate a Quantum Circuit using IBM Qiskit",
    "Visualize Quantum Superposition using Qiskit’s Statevector Simulator",
    "Build a Home Automation System (Control Lights via Mobile)",
    "Time Series Forecasting using LSTM for Stock Prices",
    "Develop a Face Recognition Attendance System using OpenCV",
    "Create a Simple Recommender System using Cosine Similarity",
    "Quantum Random Number Generator using Qiskit",
    "Capstone Prototype: AI-Based Health Monitoring with IoT Sensors"
  ];

  return (
    <div className="section-container">
    <section id="practicals">
      <h2>Practical Experiments</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
    </div>
  );
}