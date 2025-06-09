import React from 'react';

export default function References() {
  const references = [
    {
      category: 'AI & Tools',
      resources: [
        "Artificial Intelligence: A Modern Approach – Russell & Norvig",
        "OpenAI API Documentation",
        "IBM Watson Developer Docs"
      ]
    },
    {
      category: 'Machine Learning & Deep Learning',
      resources: [
        "Hands-On Machine Learning – Aurélien Géron",
        "DeepLearning.ai (Andrew Ng)",
        "TensorFlow and Keras Official Documentation"
      ]
    },
    {
      category: 'Internet of Things (IoT)',
      resources: [
        "Internet of Things: A Hands-On Approach – Bahga & Madisetti",
        "Raspberry Pi Official Tutorials",
        "Arduino Project Hub"
      ]
    },
    {
      category: 'Cyber Security',
      resources: [
        "Computer Security: Principles and Practice – Stallings & Brown",
        "OWASP Top 10",
        "MITRE ATT&CK Framework"
      ]
    },
    {
      category: 'Quantum Computing',
      resources: [
        "Quantum Computation and Quantum Information – Nielsen & Chuang",
        "IBM Qiskit Documentation",
        "Qiskit Tutorials and GitHub Repository"
      ]
    }
  ];

  return (
    <div className="section-container">
    <section id="references">
      <h2>Recommended References</h2>
      {references.map((ref, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{ref.category}</h3>
          <ul>
            {ref.resources.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </div>
  );
}
