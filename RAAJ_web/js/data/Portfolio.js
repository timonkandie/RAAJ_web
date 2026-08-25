const services = {
  logoDesign: { name: "Logo Design", icon: "🎨", color: "#2563EB" },
  posters: { name: "Poster Design", icon: "🖼️", color: "#7C3AED" },
  flyers: { name: "Flyer Design", icon: "📄", color: "#059669" },
  packaging: { name: "Packaging", icon: "📦", color: "#D97706" },
  businessCards: { name: "Business Cards", icon: "📇", color: "#0D9488" }
};

const portfolio = {
  logoDesign: [],
  posters: [],
  flyers: [],
  packaging: [],
  businessCards: []
};

function getServices() { return services; }
function getProjects(category) { return portfolio[category] || []; }
function getFeaturedProject(category) { return getProjects(category)[0] || null; }
function getAllProjects() { return Object.values(portfolio).flat(); }
function getRandomProjects(category, count) { return getProjects(category).slice(0, count); }
function searchProjects(keyword) { return getAllProjects(); }

window.getServices = getServices;
window.getProjects = getProjects;
window.getFeaturedProject = getFeaturedProject;
window.getAllProjects = getAllProjects;
window.getRandomProjects = getRandomProjects;
window.searchProjects = searchProjects;
