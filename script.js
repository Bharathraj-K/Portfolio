const projects = [
  {
    title: "AR Portfolio – Augmented Reality Interactive Showcase",
    date: "2025",
    tags: ["Unity", "Vuforia", "AR", "C#", "Git", "Git LFS", "3D Modeling"],
    description: `AR Portfolio is an interactive Augmented Reality (AR) application built
      using Unity and Vuforia Engine. This project enables users to scan AR
      markers to view digital portfolios, 3D models, and personal branding
      content in a visually immersive and engaging way.`,
    points: [
      "Displays an interactive 3D portfolio using Unity and Vuforia AR",
      "Implements cylindrical UI scrolling with touch and gaze interaction",
      "Supports dynamic content panels for seamless user navigation",
      "Integrates AR camera tracking for intuitive user experience",
      "Utilizes shader effects and animation for cyberpunk-style visuals"
    ],
    link: "https://github.com/Bharathraj-K/AR_PORTFOLIOGit"
  },
  {
    title: "AI Voice Assistant",
    date: "2025",
    tags: ["Unity", "C#", "Windows Speech API", "REST API", "JSON", "Git", "Git LFS", "UI/UX Design", "Blender", "3D Modeling"],
    description: `Built a standalone AI-powered voice assistant application for desktop.
      The software allows users to interact through voice commands, processes
      natural language using Groq’s LLaMA 3 API, and delivers intelligent
      responses in a dynamic and user-friendly interface.`,
    points: [
      "Captures and processes real-time speech input using Windows Speech API",
      "Integrates AI language model responses via RESTful API calls with asynchronous handling",
      "Provides smooth, interactive 3D UI with real-time visual feedback using Unity and Blender assets"
    ],
    link: "https://github.com/Bharathraj-K/AIAssistant"
  },
  {
    title: "Reddit Post Sentiment & Summarizer",
    date: "2025",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "VADER", "Transformers", "HuggingFace", "PRAW", "Git"],
    description: `A web application built with Streamlit and Python that analyzes and summarizes recent posts and comments from any Reddit community.`,
    points: [
      "Builds an interactive web app for Reddit data analysis and summarization",
      "Fetches posts/comments from Reddit using PRAW and Reddit API",
      "Performs sentiment classification with VADER for titles and comments",
      "Summarizes Reddit post content using transformer models via HuggingFace",
      "Visualizes sentiment data with dynamic pie charts",
      "Allows real-time subreddit mood tracking and content overview",
      "Supports analyzing specific post IDs or top posts by subreddit"
    ],
    link: "https://github.com/Bharathraj-K/Reddit-Post-Sentiment-Analyzer"
  },
  {
    title: "WeatherApp – Real-Time Weather Forecast",
    date: "2025",
    tags: ["Node.js", "Express", "EJS", "HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Render"],
    description: `A simple and responsive weather forecast web app that fetches real-time weather data using the OpenWeatherMap API.`,
    points: [
      "Search for any city worldwide and view weather details",
      "Displays temperature, humidity, wind speed, and conditions",
      "Handles errors gracefully for invalid city inputs",
      "Implements clean and adaptive UI with EJS templating",
      "Fetches API data securely via environment variables",
      "Deployed for free on Render with environment key protection"
    ],
    link: "https://github.com/Bharathraj-K/WeatherApp"
  },
  {
    title: "Chatter – Real-Time Chat Application",
    date: "2025",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary", "Vite", "REST API", "CSS"],
    description: `Chatter is a full-stack real-time chat application that enables users to sign up, log in, update profiles, and chat with other users instantly. It features online status, image sharing, and a modern responsive UI.`,
    points: [
      "Implements secure user authentication with JWT and Express middleware",
      "Supports real-time messaging and online status using Socket.io",
      "Allows profile management and image uploads via Cloudinary integration",
      "Features a responsive React frontend with context-based state management",
      "Provides RESTful API endpoints for user and message operations",
      "Includes online user tracking and instant message delivery"
    ],
    link: "https://github.com/Bharathraj-K/Chatter"
  }
];

const projectsGrid = document.querySelector(".projects-grid");

projects.forEach(proj => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${proj.title}</h3>
    <div class="date">${proj.date}</div>
    <div class="tag-container">
      ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <p class="description">${proj.description}</p>
    <ul>
      ${proj.points.map(point => `<li>${point}</li>`).join("")}
    </ul>
    <div class="buttons">
      <a href="${proj.link}" target="_blank"><i class="fab fa-github"></i> Goto Project</a>
    </div>
  `;

  projectsGrid.appendChild(card);
});

