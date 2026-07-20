const projects = [
  // ============================================================
  // 👁️ COMPUTER VISION PROJECTS
  // ============================================================
  {
    title: "Enhanced 3D Gaussian Splatting Research",
    desc: "Improved sparse-view novel view synthesis by integrating DepthAnything-V2 with 3D Gaussian Splatting and custom loss functions for better geometric consistency and reconstruction quality.",
    github: "https://github.com/zabeeh95/ReconAI",
    demo: "#",
    image: "assets/gaussian_splatting_garden.jpg",
    tags: ["3D Vision", "Neural Rendering", "PyTorch"],
    category: "computer-vision"
  },

  {
    title: "VisionLLM Unified Framework for Image Reasoning",
    desc: "VisionAgent: Multi-modal AI for image understanding. Integrates YOLOv8 for object detection, SmolVLM for scene description, and Phi-3 for intelligent reasoning. Features GPU acceleration, batch processing, bounding box visualization, and a clean Streamlit UI. Open-source and easily configurable.",
    github: "https://github.com/zabeeh95/VisionLLM-Unified-Framework-for-Visual-Reasoning",
    demo: "#",
    image: "assets/VisionLLM-Unified-Framework-for-Visual-Reasoning1.jpg",
    tags: ["VLM", "Image Reasoning", "PyTorch"],
    category: "computer-vision"
  },

  {
    title: "Real-Time People Detection & Tracking",
    desc: "Built a people analytics system using YOLO11 and ByteTrack. Detects pedestrians, assigns persistent IDs, visualizes trajectories, and enables crowd analysis applications.",
    github: "https://github.com/zabeeh95",
    demo: "https://youtu.be/2WBJV3c_RBE",
    image: "assets/YOLO tracking peopleshort.png",
    tags: ["YOLO", "Tracking", "Surveillance"],
    category: "computer-vision"
  },
  {
    title: "Multi-Lane Vehicle Counting & Tracking",
    desc: "Real-time traffic analytics pipeline using YOLOv11 with SORT/DeepSORT for multi-lane vehicle counting and trajectory visualization.",
    github: "https://github.com/zabeeh95",
    demo: "https://youtu.be/7wYQRGW7kjU",
    image: "assets/YOLO tracking vehicles1.png",
    tags: ["YOLO", "Tracking", "Traffic Analytics"],
    category: "computer-vision"
  },
    {
    title: "6-DOF Robotic Arm with Vision-Based Recognition",
    desc: "Programmed a 6-DOF ROT3U robotic arm with forward/inverse kinematics. Integrated OpenCV-based tracking and deep learning for letter recognition.",
    github: "https://github.com/zabeeh95/AlphabetRecognitionROT3U",
    demo: "https://youtu.be/BYxyUCkfxNg",
    image: "assets/vision ROT3U.png",
    tags: ["Robotics", "Kinematics", "Vision","Trajectorty Planning"],
    category: "robotics"
  },

  {
    title: "Real-Time Facial Emotion Recognition",
    desc: "CNN with dual channel/spatial attention achieving 66% accuracy on 7 emotion classes with live webcam deployment using OpenCV DNN.",
    github: "https://github.com/zabeeh95/EmotionRecognition",
    demo: "#",
    image: "assets/vision Emotion Recognition.png",
    tags: ["Facial Analysis", "CNN", "Real-Time"],
    category: "computer-vision"
  },
  {
    title: "Computer Vision Hand Sign Classification",
    desc: "Real-time hand gesture recognition using MediaPipe (21 landmarks) and Random Forest (100 estimators) with live webcam inference.",
    github: "https://github.com/zabeeh95",
    demo: "#",
    image: "assets/vision hand gestures 1.png",
    tags: ["Gesture Recognition", "MediaPipe", "Random Forest"],
    category: "computer-vision"
  },


  // ============================================================
  // 🧠 MACHINE LEARNING & AI PROJECTS
  // ============================================================
  {
    title: "Brain Tumor Segmentation using Attention Residual U-Net",
    desc: "Developed an Attention Residual U-Net for MRI brain tumor segmentation using attention gates and residual blocks. Applied Focal Tversky Loss to handle class imbalance.",
    github: "https://github.com/zabeeh95/BrainTumorSegmentation",
    demo: "#",
    image: "assets/Med MRI Segmentation.jpg",
    tags: ["Medical Imaging", "U-Net", "Segmentation"],
    category: "machine-learning"
  },
  {
    title: "Pneumonia Detection from Chest X-Rays",
    desc: "Custom CNN with class weighting (pneumonia +50%) achieving 86% accuracy, 95% recall, and 90% precision on 5,232 chest X-ray images.",
    github: "https://github.com/zabeeh95/PneumoniaDetection",
    demo: "#",
    image: "assets/Med X Ray Penuemania detection.png",
    tags: ["Medical AI", "CNN", "Classification"],
    category: "machine-learning"
  },
      {
    title: "LLM-Powered Technical Documentation Assistant (RAG)",
    desc: "Production-ready RAG system using FastAPI, FAISS, Sentence Transformers, reranking, and Ollama. Supports semantic search, context-aware answers, and Docker deployment.",
    github: "https://github.com/zabeeh95/AI_BookAssistant_Deploymnet",
    demo: "#",
    image: "assets/LLM RAG Technical manual Assiatant 3.png",
    tags: ["RAG", "LLM", "FastAPI", "Docker"],
    category: "machine-learning"
  },




  {
    title: "Deep Learning CAPTCHA Recognition (CNN + CTC)",
    desc: "OCR-style CAPTCHA solver using CNN + BiLSTM with CTC loss achieving 62.93% word and 86.69% character accuracy on 113K+ samples.",
    github: "https://github.com/zabeeh95/CaptchaBreaker",
    demo: "#",
    image: "assets/vision CAPTCHA recognition.jpg",
    tags: ["OCR", "CTC", "Sequence Modeling"],
    category: "machine-learning"
  },

    {
    title: "Real-Time Smile Detection",
    desc: "3-layer CNN (32→64→128 filters) with batch normalization and dropout achieving 91% validation accuracy on 13,165 grayscale face images.",
    github: "https://github.com/zabeeh95",
    demo: "#",
    image: "assets/Vision Smile Recognition.png",
    tags: ["Facial Analysis", "CNN", "Classification"],
    category: "computer-vision"
  },
  {
    title: "Real-Time Rock-Paper-Scissors Detection using YOLOv8",
    desc: "Trained and deployed YOLO-based object detector for Rock, Paper, Scissors gestures with real-time webcam inference.",
    github: "https://github.com/zabeeh95/YOLO_RPS",
    demo: "#",
    image: "assets/YOLO_RPS.png",
    tags: ["YOLO", "Object Detection", "Real-Time"],
    category: "computer-vision"
  },

      {
    title: "LLM-Powered Books AI Assistant (RAG)",
    desc: "Offline RAG system using FAISS, Sentence Transformers, Cross Encoder reranking, LangChain, and Streamlit for book-based QA.",
    github: "https://github.com/zabeeh95/RAG_based_book_QA",
    demo: "#",
    image: "assets/LLM AI book Assistant.jpg",
    tags: ["RAG", "LLM", "LangChain"],
    category: "machine-learning"
  },


  // ============================================================
  // 🤖 ROBOTICS & HARDWARE PROJECTS
  // ============================================================

  {
    title: "Sound Source Localization",
    desc: "Designed a distributed acoustic sensing system using Arduino and XBee sensors. Applied triangulation algorithms in MATLAB to estimate sound source positions.",
    github: "https://github.com/zabeeh95/SoundSourceLocalization",
    demo: "#",
    image: "assets/Sound_Source Localization.png",
    tags: ["MATLAB", "XBee", "Acoustic Sensing"],
    category: "robotics"
  },

  // ============================================================
  // 📱 FULL-STACK & APPLICATIONS
  // ============================================================
  {
    title: "Truemayte – Anonymous Social Platform",
    desc: "Built a full-stack anonymous social networking application featuring real-time messaging, social feeds, and backend synchronization for active users. Developed scalable REST APIs using Django and Django REST Framework, optimized PostgreSQL database performance, implemented CI/CD pipelines with GitHub Actions, and deployed production services on DigitalOcean.",
    github: "https://github.com/zabeeh95",
    demo: "https://youtu.be/n_iPvdL0UVg",
    image: "assets/True Mate Demo monogram.png",
    tags: ["Django", "REST API", "PostgreSQL", "CI/CD"],
    category: "fullstack"
  }
];

// ============================================================
// RENDER PROJECTS WITH CATEGORY FILTERING
// ============================================================
const container = document.getElementById("project-list");
let currentFilter = "all";

function renderProjects(filter) {
  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  container.innerHTML = '';
  
  filtered.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.animationDelay = `${index * 0.1}s`;

    // Only show demo button if demo link is not "#"
    const demoButton = p.demo && p.demo !== "#" 
      ? `<a href="${p.demo}" target="_blank" class="btn-small btn-demo">Demo</a>` 
      : '';

    card.innerHTML = `
      <div class="project-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='assets/placeholder.png'">
      </div>
      <div class="project-content">
        <span class="category-badge">${getCategoryLabel(p.category)}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" class="btn-small btn-github">GitHub</a>
          ${demoButton}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function getCategoryLabel(category) {
  const labels = {
    'computer-vision': '👁️ Computer Vision',
    'machine-learning': '🧠 Machine Learning & AI',
    'robotics': '🤖 Robotics & Hardware',
    'fullstack': '📱 Full-Stack & Apps'
  };
  return labels[category] || category;
}

// ============================================================
// FILTER BUTTONS
// ============================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.filter;
    renderProjects(currentFilter);
  });
});

// ============================================================
// INITIAL RENDER
// ============================================================
renderProjects('all');