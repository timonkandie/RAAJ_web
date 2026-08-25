/**
 * Portfolio Data Store & Query Engine
 */
const services = {
  logoDesign: {
    name: "Logo Design",
    icon: "🎨",
    color: "#2563EB"
  },
  posters: {
    name: "Poster Design",
    icon: "🖼️",
    color: "#7C3AED"
  },
  flyers: {
    name: "Flyer Design",
    icon: "📄",
    color: "#059669"
  },
  packaging: {
    name: "Packaging",
    icon: "📦",
    color: "#D97706"
  },
  businessCards: {
    name: "Business Cards",
    icon: "📇",
    color: "#0D9488"
  }
};

const portfolio = {
  logoDesign: [
    {
      id: 101,
      slug: "project-slug",
      title: "[Project Title]",
      client: "[Client Name]",
      category: "Logo Design",
      description: "[Brief Description of the project]",
      challenge: "[Describe the challenge]",
      solution: "[Describe the solution]",
      completionDate: "[YYYY-MM-DD]",
      duration: "[Duration, e.g., 2 Weeks]",
      software: ["[Software 1]", "[Software 2]"],
      tags: ["[Tag 1]", "[Tag 2]"],
      featured: true,
      images: {
        hero: "assets/my-image.jpeg",
        gallery: [
          "assets/my-image.jpeg"
        ]
      }
    }
  ],
  posters: [
    {
      id: 201,
      slug: "project-slug-2",
      title: "[Project Title]",
      client: "[Client Name]",
      category: "Poster Design",
      description: "[Brief Description]",
      challenge: "[Describe challenge]",
      solution: "[Describe solution]",
      completionDate: "[YYYY-MM-DD]",
      duration: "[Duration]",
      software: ["[Software]"],
      tags: ["[Tag]"],
      featured: true,
      images: {
        hero: "assets/my-image.jpeg",
        gallery: []
      }
    }
  ],
  flyers: [
    {
      id: 301,
      slug: "project-slug-3",
      title: "[Project Title]",
      client: "[Client Name]",
      category: "Flyer Design",
      description: "[Brief Description]",
      challenge: "[Describe challenge]",
      solution: "[Describe solution]",
      completionDate: "[YYYY-MM-DD]",
      duration: "[Duration]",
      software: ["[Software]"],
      tags: ["[Tag]"],
      featured: true,
      images: {
        hero: "assets/my-image.jpeg",
        gallery: []
      }
    }
  ],
  packaging: [
    {
      id: 401,
      slug: "project-slug-4",
      title: "[Project Title]",
      client: "[Client Name]",
      category: "Packaging",
      description: "[Brief Description]",
      challenge: "[Describe challenge]",
      solution: "[Describe solution]",
      completionDate: "[YYYY-MM-DD]",
      duration: "[Duration]",
      software: ["[Software]"],
      tags: ["[Tag]"],
      featured: true,
      images: {
        hero: "assets/my-image.jpeg",
        gallery: []
      }
    }
  ],
  businessCards: [
    {
      id: 501,
      slug: "project-slug-5",
      title: "[Project Title]",
      client: "[Client Name]",
      category: "Business Cards",
      description: "[Brief Description]",
      challenge: "[Describe challenge]",
      solution: "[Describe solution]",
      completionDate: "[YYYY-MM-DD]",
      duration: "[Duration]",
      software: ["[Software]"],
      tags: ["[Tag]"],
      featured: true,
      images: {
        hero: "assets/my-image.jpeg",
        gallery: []
      }
    }
  ]
};

function getServices() {
  return services;
}

function getProjects(category) {
  return portfolio[category] || [];
}

function getFeaturedProject(category) {
  const categoryProjects = portfolio[category] || [];
  return categoryProjects.find(project => project.featured) || categoryProjects[0];
}

function getAllProjects() {
  return Object.values(portfolio).flat();
}

function getRandomProjects(category, count) {
  const projects = [...(portfolio[category] || [])];
  return projects.sort(() => Math.random() - 0.5).slice(0, count);
}

function searchProjects(keyword) {
  if (!keyword) return getAllProjects();
  const lower = keyword.toLowerCase();
  return getAllProjects().filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.client.toLowerCase().includes(lower) ||
    p.tags.some(tag => tag.toLowerCase().includes(lower))
  );
}

window.getServices = getServices;
window.getProjects = getProjects;
window.getFeaturedProject = getFeaturedProject;
window.getAllProjects = getAllProjects;
window.getRandomProjects = getRandomProjects;
window.searchProjects = searchProjects;
