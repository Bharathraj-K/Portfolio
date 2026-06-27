const projects = [
  {
    title: "REsonate! – Action Arcade Game",
    date: "2025",
    tags: ["Unity", "C#", "Game Development", "VFX", "Shaders", "Itch.io"],
    description: `Fast-paced arcade game with resonance-based color-matching mechanics, published for GitHub Game Off 2025. Ranked #175 out of 700+ entries globally.`,
    points: [
      "Implemented dynamic enemy spawning system with 3 enemy types (Basic, Cluster, Tank)",
      "Built proximity-based linking algorithm and combo multiplier scoring",
      "Created custom particle VFX for destruction effects and post-processing shaders",
      "Developed input-driven color cycling system and Overload Mode power-up",
      "Optimized with object pooling for performance across wave-based progression"
    ],
    link: "https://bharathraj-k.itch.io/resonate"
  },
  {
    title: "Autonomous Arrow – Action Shooter",
    date: "2025",
    tags: ["Unity", "C#", "Game Development", "Physics", "Itch.io"],
    description: `Experimental action game where you guide an arrow mid-flight through rooms filled with teleport loops, velocity boosters, fans, and lasers. Submitted to NoPoly's Game Jam.`,
    points: [
      "Implemented physics-based arrow steering with WASD controls and boost mechanics",
      "Designed environment interaction systems including teleporters and velocity boosters",
      "Built cyberpunk-inspired 3D visuals with dual-platform support (Windows & WebGL)",
      "Features real-time velocity management and experimental path-carving gameplay"
    ],
    link: "https://bharathraj-k.itch.io/autonomous-arrow"
  },
  {
    title: "Neon Core – 3D Platformer",
    date: "2025",
    tags: ["Unity", "Blender", "C#", "Game Development", "Physics", "Itch.io"],
    description: `Physics-based 3D platformer where players navigate a dangerously unstable neon sphere through challenging obstacle courses with glow-heavy cyberpunk aesthetics.`,
    points: [
      "Implemented tight movement controls and physics-based collision systems",
      "Designed minimalist level design with progressive difficulty",
      "Built neon visual aesthetic with post-processing effects and lighting",
      "Published on Itch.io with playable demo and community feedback"
    ],
    link: "https://bharathraj-k.itch.io/neon-core"
  },
  {
    title: "THOCK – Mechanical Key Simulator",
    date: "2025",
    tags: ["Unity", "C#", "Game Development", "Audio", "WebGL", "Itch.io"],
    description: `3D WebGL simulation experience built around the satisfaction of clicking a single mechanical key. Runs in-browser with adjustable audio feedback.`,
    points: [
      "Implemented realistic key-press physics and adjustable audio system",
      "Built built-in click counter and responsive UI",
      "Features in-browser playability via WebGL with satisfying audio design",
      "Published on Itch.io as a free interactive sound toy"
    ],
    link: "https://bharathraj-k.itch.io/thock"
  },
  {
    title: "AI Voice Assistant",
    date: "2025",
    tags: ["Unity", "C#", "Windows Speech API", "Groq API", "REST API", "Git"],
    description: `Standalone AI-powered voice assistant for desktop. Interacts through voice commands, processes natural language using Groq's LLaMA 3 API, and delivers intelligent responses.`,
    points: [
      "Captures and processes real-time speech input using Windows Speech API",
      "Integrates AI language model responses via async RESTful API calls",
      "Features animated typing effect and custom UI with TextMeshPro",
      "Supports both voice and text input with persistent API key storage"
    ],
    link: "https://github.com/Bharathraj-K/AIAssistant"
  },
  {
    title: "AR Portfolio – Augmented Reality Showcase",
    date: "2025",
    tags: ["Unity", "Vuforia", "AR", "C#", "Blender", "3D Modeling"],
    description: `Interactive Augmented Reality application built using Unity and Vuforia Engine. Scan AR markers to view digital portfolios, 3D models, and personal branding content.`,
    points: [
      "Displays interactive 3D portfolio using Unity and Vuforia AR",
      "Implements cylindrical UI scrolling with touch and gaze interaction",
      "Supports dynamic content panels for seamless user navigation",
      "Integrates AR camera tracking with shader effects for cyberpunk visuals"
    ],
    link: "https://github.com/Bharathraj-K/AR_PORTFOLIOGit"
  },
  {
    title: "Unity Dev Scripts Collection",
    date: "2025",
    tags: ["Unity", "C#", "Open Source", "Game Development"],
    description: `Curated collection of reusable Unity C# scripts for common game mechanics. Designed for modularity and ease of integration with comprehensive documentation.`,
    points: [
      "Includes player controllers, camera systems, and inventory management",
      "Features interaction systems and utility scripts for rapid prototyping",
      "Designed for modularity with comprehensive code documentation",
      "Featured in Unity development tutorials for beginners and indie developers"
    ],
    link: "https://github.com/Bharathraj-K/unity-dev-scripts"
  },
  {
    title: "AI Code Reviewer – GitHub PR Bot",
    date: "2026",
    tags: ["Python", "FastAPI", "LLM", "GitHub Webhooks", "Semgrep", "Bandit"],
    description: `Automated GitHub pull request review system using LLMs and static analysis tools to analyze code changes in real time and post structured reviews.`,
    points: [
      "Built GitHub webhook-driven FastAPI backend with HMAC-SHA256 verification",
      "Runs Bandit and Semgrep for security vulnerability detection",
      "Feeds static analysis results into LLM for context-aware code reviews",
      "Supports local LM Studio and HuggingFace Transformer models"
    ],
    link: "https://github.com/Bharathraj-K/AI_CODE_REVIEWER"
  },
  {
    title: "Reddit Post Sentiment & Summarizer",
    date: "2025",
    tags: ["Python", "Streamlit", "VADER", "HuggingFace", "PRAW"],
    description: `Streamlit web application that analyzes and summarizes Reddit posts and comments using sentiment analysis and transformer-based summarization.`,
    points: [
      "Fetches posts/comments from Reddit using PRAW and Reddit API",
      "Performs sentiment classification with VADER for titles and comments",
      "Summarizes content using transformer models via HuggingFace",
      "Visualizes sentiment data with dynamic pie charts"
    ],
    link: "https://github.com/Bharathraj-K/Reddit-Post-Sentiment-Analyzer"
  },
  {
    title: "WeatherApp – Real-Time Weather Forecast",
    date: "2025",
    tags: ["Node.js", "Express", "EJS", "OpenWeatherMap API", "Render"],
    description: `Responsive weather forecast web app that fetches real-time weather data using the OpenWeatherMap API with clean adaptive UI.`,
    points: [
      "Search for any city worldwide and view weather details",
      "Displays temperature, humidity, wind speed, and conditions",
      "Handles errors gracefully for invalid city inputs",
      "Deployed on Render with environment key protection"
    ],
    link: "https://github.com/Bharathraj-K/WeatherApp"
  },
  {
    title: "Chatter – Real-Time Chat Application",
    date: "2025",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
    description: `Full-stack real-time chat application with user authentication, online status, image sharing, and modern responsive UI.`,
    points: [
      "Implements secure authentication with JWT and Express middleware",
      "Supports real-time messaging and online status using Socket.io",
      "Allows profile management and image uploads via Cloudinary",
      "Features responsive React frontend with context-based state management"
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
