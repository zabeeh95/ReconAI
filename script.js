const projects = [
  {
    title: "3D Gaussian Splatting Research",
    desc: "Sparse-view novel view synthesis with depth-guided optimization.",
    github: "https://github.com/zabeeh95",
    demo: "#"
  },
  {
    title: "YOLO Object Detection System",
    desc: "Real-time detection and tracking system using YOLO + OpenCV.",
    github: "https://github.com/zabeeh95",
    demo: "#"
  },
  {
    title: "RAG AI Assistant",
    desc: "Document-based Q&A system using embeddings + BM25 + LLMs.",
    github: "https://github.com/zabeeh95",
    demo: "#"
  }
];

const container = document.getElementById("project-list");

projects.forEach(p => {
  container.innerHTML += `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="${p.github}" target="_blank">GitHub</a>
      <a href="${p.demo}" target="_blank">Demo</a>
    </div>
  `;
});