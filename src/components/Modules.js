import React from 'react';

export default function Modules() {
  const moduleData = [
    {
      title: "Artificial Intelligence & Tools",
      weeks: "Weeks 1 (4 Sessions)",
      topics: [
        "Introduction to AI & Historical Evolution",
        "Intelligent Applications Today",
        "Ethics in AI"
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      weeks: "Weeks 2–3 (20 Sessions)",
      topics: [
        "Types of Learning: Supervised, Unsupervised, Reinforcement",
        "Classification and Clustering Algorithms",
        "Neural Networks, CNNs, RNNs, LSTM",
        "Tools: TensorFlow, Keras, PyTorch, Scikit-learn",
        "Practicals: Image classification, Sentiment analysis"
      ]
    },
    {
      title: "Artificial Intelligence Tools",
      weeks: "Weeks 3–4 (16 Sessions)",
      topics: [
        "Intelligent Systems & Search Techniques",
        "Natural Language Processing (NLP): Text Classification, Chatbots",
        "AI Tools: OpenAI, IBM Watson, Google AI, Microsoft Azure AI",
        "Practicals: Chatbot development, NLP tasks"
      ]
    },
    {
      title: "Internet of Things (IoT)",
      weeks: "Weeks 5–6 (20 Sessions)",
      topics: [
        "IoT Architecture and Protocol Stack",
        "Sensors, Actuators, and Communication Protocols",
        "IoT Platforms: Arduino, Raspberry Pi",
        "Applications: Smart Home, Healthcare, Agriculture",
        "Practicals: Smart irrigation system, MQTT cloud communication"
      ]
    },
    {
      title: "Cyber Security",
      weeks: "Weeks 7–8 (20 Sessions)",
      topics: [
        "Cybersecurity Principles and Threat Landscape",
        "Cryptography: Hashing, Encryption, Digital Signatures",
        "Network Security: Firewalls, VPNs",
        "Security Tools: Wireshark, Metasploit, Burp Suite",
        "Practicals: Packet sniffing, Secure login, SQLi demonstration"
      ]
    },
    {
      title: "Quantum Computing",
      weeks: "Weeks 9–10 (20 Sessions)",
      topics: [
        "Classical vs Quantum Computing, Qubits, Superposition",
        "Quantum Gates and Circuits",
        "Quantum Algorithms: Grover’s, Shor’s",
        "Quantum Programming with Qiskit, IBM Q",
        "Practicals: Quantum circuit simulation, IBMQ backend execution"
      ]
    }
  ];

  return (
    <div className="section-container">
    <section id="modules">
      <h2>Modules Covered</h2>
      {moduleData.map((module, index) => (
        <div className="module" key={index} style={{ marginBottom: '40px' }}>
          <h3>{module.title}</h3>
          <p><strong>{module.weeks}</strong></p>
          <ul>
            {module.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </div>
  );
}
