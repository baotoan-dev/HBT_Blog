// Dynamic Project Generator
class ProjectGenerator {
  constructor() {
    this.projects = PROJECTS_DATA;
  }

  // Generate project cards for index.html
  generateProjectCards() {
    const projectsData = [
      {
        id: "product-landing",
        title: "Product Landing Page",
        description: "Modern, responsive landing page with GSAP animations",
        image:
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      },
      {
        id: "e-commerce-dashboard",
        title: "E-commerce Dashboard",
        description: "Real-time analytics dashboard with data visualization",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      },
      {
        id: "mobile-banking-app",
        title: "Mobile Banking App",
        description: "Secure mobile banking with biometric authentication",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
        tags: ["React Native", "TypeScript", "Redux"],
      },
      {
        id: "ai-chat-platform",
        title: "AI Chat Platform",
        description:
          "Intelligent conversational AI with multi-model integration",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
        tags: ["Next.js", "Python", "OpenAI", "FastAPI"],
      },
    ];

    return projectsData
      .map(
        (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
          <a href="project-detail.html?project=${
            project.id
          }" class="btn-outline">
            <span>View Details</span>
          </a>
        </div>
      </article>
    `
      )
      .join("");
  }

  // Generate navigation for project detail pages
  generateProjectNavigation(currentProjectId) {
    const projectIds = Object.keys(this.projects);
    const currentIndex = projectIds.indexOf(currentProjectId);

    const prevProject = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
    const nextProject =
      currentIndex < projectIds.length - 1
        ? projectIds[currentIndex + 1]
        : null;

    let navigation = '<div class="project-navigation">';

    if (prevProject) {
      const prevData = this.projects[prevProject];
      navigation += `
        <a href="project-detail.html?project=${prevProject}" class="nav-project prev">
          <i class="fa-solid fa-chevron-left"></i>
          <div>
            <span>Previous</span>
            <strong>${prevData.title}</strong>
          </div>
        </a>
      `;
    }

    if (nextProject) {
      const nextData = this.projects[nextProject];
      navigation += `
        <a href="project-detail.html?project=${nextProject}" class="nav-project next">
          <div>
            <span>Next</span>
            <strong>${nextData.title}</strong>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </a>
      `;
    }

    navigation += "</div>";
    return navigation;
  }

  // Get related projects (exclude current)
  getRelatedProjects(currentProjectId, limit = 3) {
    const allProjects = Object.keys(this.projects).filter(
      (id) => id !== currentProjectId
    );
    return allProjects.slice(0, limit).map((id) => ({
      id,
      ...this.projects[id],
    }));
  }
}

// Utility functions for URL handling
const ProjectUtils = {
  createProjectUrl: (projectId) => `project-detail.html?project=${projectId}`,

  getCurrentProjectId: () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("project");
  },

  redirectToProject: (projectId) => {
    window.location.href = ProjectUtils.createProjectUrl(projectId);
  },

  // SEO-friendly URL generation
  generateSeoUrl: (projectId, title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return `project-detail.html?project=${projectId}&slug=${slug}`;
  },
};

// Auto-initialization for index.html
document.addEventListener("DOMContentLoaded", () => {
  // Only run on index.html
  if (
    window.location.pathname.includes("index.html") ||
    window.location.pathname === "/"
  ) {
    const projectsContainer = document.querySelector("#projects .blog-grid");
    if (projectsContainer) {
      const generator = new ProjectGenerator();
      projectsContainer.innerHTML = generator.generateProjectCards();
    }
  }
});

// Export for use in other files
if (typeof window !== "undefined") {
  window.ProjectGenerator = ProjectGenerator;
  window.ProjectUtils = ProjectUtils;
}
