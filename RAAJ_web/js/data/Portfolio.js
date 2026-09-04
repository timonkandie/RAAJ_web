/**
 * Portfolio Data & Service Definitions
 * Source file – minify to Portfolio.min.js before deployment
 */

const services = {
  logoDesign: { name: "Logo Design", icon: "🎨", color: "#2563EB" },
  posters: { name: "Poster Design", icon: "🖼️", color: "#7C3AED" },
  flyers: { name: "Flyer Design", icon: "📄", color: "#059669" },
  packaging: { name: "Packaging", icon: "📦", color: "#D97706" },
  businessCards: { name: "Business Cards", icon: "📇", color: "#0D9488" }
};

const portfolio = {
  logoDesign: [
    {
      id: 101,
      slug: "nairobi-cafe-identity",
      title: "Nairobi Café Brandmark",
      client: "Nairobi Specialty Coffee",
      category: "Logo Design",
      description: "A warm, contemporary logo identity blending artisan coffee elements with geometric Kenyan motifs.",
      challenge: "Establish a modern urban café identity while respecting rich local coffee culture.",
      solution: "Created a minimalist coffee bean emblem interwoven with traditional heritage patterns.",
      completionDate: "2026-03-15",
      duration: "2 Weeks",
      software: ["Adobe Illustrator", "Photoshop"],
      tags: ["Branding", "Minimalist", "Coffee", "Typography"],
      featured: true,
      images: {
        hero: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop"
        ]
      }
    },
    {
      id: 102,
      slug: "apex-fintech-mark",
      title: "Apex Horizon Tech",
      client: "Apex Financial",
      category: "Logo Design",
      description: "Sleek tech insignia representing dynamic growth and digital trust for a leading fintech platform.",
      challenge: "Communicate security and innovative financial movement in a ultra-clean icon.",
      solution: "Designed an interlocking gradient 'A' with forward momentum metrics.",
      completionDate: "2026-01-20",
      duration: "3 Weeks",
      software: ["Figma", "Illustrator"],
      tags: ["Fintech", "Corporate", "Vector"],
      featured: false,
      images: {
        hero: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
        gallery: []
      }
    }
  ],
  posters: [
    {
      id: 201,
      slug: "savannah-jazz-festival",
      title: "Savannah Music Fest",
      client: "Nairobi Arts Council",
      category: "Poster Design",
      description: "High-impact promotional poster utilizing vibrant neon typography and abstract musical shapes.",
      challenge: "Capture the rhythmic energy of live jazz in a single visual canvas.",
      solution: "Employed dynamic fluid gradients and expressive hand-crafted typography.",
      completionDate: "2026-04-10",
      duration: "10 Days",
      software: ["Photoshop", "InDesign"],
      tags: ["Event", "Music", "Poster", "Typography"],
      featured: true,
      images: {
        hero: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop",
        gallery: []
      }
    }
  ],
  flyers: [
    {
      id: 301,
      slug: "urban-bistro-menu-flyer",
      title: "Bistro Seasonal Promo",
      client: "Urban Bistro",
      category: "Flyer Design",
      description: "Elegantly structured promotional flyer for a seasonal culinary launch.",
      challenge: "Fit detailed multi-course menu options without creating visual clutter.",
      solution: "Structured multi-column grid system highlighting hero dishes with high-contrast accents.",
      completionDate: "2026-02-28",
      duration: "1 Week",
      software: ["InDesign", "Illustrator"],
      tags: ["Print", "Restaurant", "Flyer"],
      featured: true,
      images: {
        hero: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
        gallery: []
      }
    }
  ],
  packaging: [
    {
      id: 401,
      slug: "organica-skincare-box",
      title: "Organica Eco Packaging",
      client: "Organica Botanicals",
      category: "Packaging",
      description: "Sustainable luxury box design using recycled materials and metallic foil accents.",
      challenge: "Stand out in retail beauty aisles while communicating eco-friendly values.",
      solution: "Embossed botanical illustrations on unbleached kraft stock with matte gold foil.",
      completionDate: "2026-05-02",
      duration: "4 Weeks",
      software: ["Illustrator", "Dimension"],
      tags: ["Packaging", "Eco", "Cosmetics", "3D"],
      featured: true,
      images: {
        hero: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop",
        gallery: []
      }
    }
  ],
  businessCards: [
    {
      id: 501,
      slug: "nexus-executive-cards",
      title: "Nexus Executive Suite",
      client: "Nexus Capital",
      category: "Business Cards",
      description: "Ultra-thick cotton stock card with painted edges and subtle blind debossing.",
      challenge: "Deliver a tactile luxury impression for high-net-worth partner meetings.",
      solution: "Combined 600gsm black cotton paper with spot UV and metallic copper edge foil.",
      completionDate: "2026-03-01",
      duration: "1 Week",
      software: ["Illustrator"],
      tags: ["Print", "Luxury", "Business Card"],
      featured: true,
      images: {
        hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
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
