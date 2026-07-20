const projectData = [
  {
    id: 1,
    title: "Hand Gesture Controlled Home Appliances",
    subtitle: "IoT + Computer Vision Project",

    shortDescription:
      "A smart home automation system that allows users to control electrical appliances using hand gestures without touching any physical switch.",

    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Arduino UNO",
      "Embedded C",
      "Relay Module"
    ],

    overview:
      "This project enables users to control home appliances using real-time hand gesture recognition. A webcam captures hand movements, MediaPipe detects landmarks, OpenCV processes the frames, and Arduino receives commands to switch appliances ON or OFF.",

    problem:
      "Traditional switches require physical interaction, which may not be convenient for elderly people or individuals with disabilities. The system provides a touch-free way of controlling electrical devices.",

    objective:
      "To build an intelligent gesture recognition system capable of controlling multiple electrical appliances accurately using computer vision and Arduino.",

    hardware: [
      "Arduino UNO",
      "USB Webcam",
      "Relay Module",
      "LED/Bulb",
      "Connecting Wires"
    ],

    software: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Arduino IDE",
      "VS Code"
    ],

    workflow: [
      "Capture live video using webcam.",
      "Detect hand landmarks using MediaPipe.",
      "Identify finger positions.",
      "Recognize predefined hand gestures.",
      "Send command to Arduino.",
      "Arduino switches appliances ON/OFF through relay."
    ],

    features: [
      "Real-time gesture recognition",
      "Touchless appliance control",
      "Fast response",
      "Low-cost implementation",
      "User-friendly interface"
    ],

    advantages: [
      "Easy to use",
      "Improves accessibility",
      "No physical contact required",
      "Energy efficient",
      "Expandable for smart homes"
    ],

    futureScope:
      "The project can be enhanced using AI-based gesture recognition, voice assistant integration, IoT connectivity and mobile application support.",

    conclusion:
      "The project demonstrates how Computer Vision and IoT can be combined to create an efficient touch-free home automation solution."
  },

  {
    id: 2,
    title: "Smart Queue Load Balancer",
    subtitle: "MERN Stack Project",

    shortDescription:
      "A web application that balances customer queues efficiently by reducing waiting time and distributing service load.",

    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js"
    ],

    overview:
      "Smart Queue Load Balancer is a MERN Stack application developed to manage customer queues in hospitals, banks and government offices. It reduces waiting time by intelligently balancing service requests.",

    problem:
      "Manual queue management often leads to long waiting times and inefficient resource utilization.",

    objective:
      "To develop an automated queue management system that improves customer experience and increases operational efficiency.",

    modules: [
      "Admin Login",
      "Customer Management",
      "Token Generation",
      "Queue Monitoring",
      "Dashboard",
      "Reports"
    ],

    workflow: [
      "Customer registers.",
      "Token is generated.",
      "Queue status updates in real-time.",
      "Admin monitors service counters.",
      "Customers receive updates."
    ],

    features: [
      "Real-time queue tracking",
      "Admin Dashboard",
      "Digital token system",
      "Customer management",
      "Responsive interface"
    ],

    futureScope:
      "Future versions may include AI-based queue prediction, SMS notifications and mobile application support.",

    conclusion:
      "The system improves queue management while reducing waiting time and increasing service efficiency."
  },

  {
    id: 3,
    title: "LSTM-Based Real-Time Anomaly Detection Framework",
    subtitle: "Research Project",

    shortDescription:
      "A deep learning framework that detects abnormal network activities using LSTM models.",

    technologies: [
      "Python",
      "TensorFlow",
      "LSTM",
      "Pandas",
      "NumPy",
      "Scikit-learn"
    ],

    overview:
      "This research focuses on detecting anomalies in network traffic using Long Short-Term Memory (LSTM) neural networks. The model learns normal traffic patterns and identifies suspicious behavior in real time.",

    objective:
      "To improve cybersecurity by accurately detecting anomalies using deep learning.",

    workflow: [
      "Collect dataset.",
      "Preprocess data.",
      "Train LSTM model.",
      "Predict anomalies.",
      "Generate alerts."
    ],

    features: [
      "Deep Learning based detection",
      "Real-time prediction",
      "High accuracy",
      "Reduced false positives"
    ],

    conclusion:
      "LSTM models effectively capture sequential network behavior, making them suitable for anomaly detection applications.",

    futureScope:
      "Future work includes federated learning integration, explainable AI and deployment in cloud environments."
  }
];

export default projectData;