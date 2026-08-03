/* ============================================
   RAAJ Studios — Portfolio Data v1.0
   All project data for the site lives here.
   The hero workspace, portfolio page, and
   portfolio cards all pull from this file.

   TO UPDATE WITH REAL PROJECTS:
   - Replace placeholder titles, clients,
     descriptions, challenges and solutions
     with real project details
   - Replace image paths with real WebP files
     placed in assets/projects/
   - Update software arrays with tools actually
     used on each project
   - Set featured: true on the best project
     per category — that one shows first
     in the hero workspace
   ============================================ */


/* ============================================
   SERVICES
   Defines the five service categories.
   Used for tab labels, colors, and icons.
============================================ */
const services = {

  logoDesign: {
    name:        'Logo Design',
    icon:        '🎨',
    color:       '#33B8FF',
    description: 'We craft memorable logos that capture your brand\'s identity and leave a lasting impression.',
  },

  posters: {
    name:        'Poster Design',
    icon:        '🖼️',
    color:       '#5E35B1',
    description: 'Eye-catching posters designed to communicate your message clearly and powerfully.',
  },

  flyers: {
    name:        'Flyer Design',
    icon:        '📄',
    color:       '#43A047',
    description: 'Bold, effective flyers that get noticed and drive action for your events and promotions.',
  },

  packaging: {
    name:        'Packaging Design',
    icon:        '📦',
    color:       '#FB8C00',
    description: 'Creative packaging that makes your product stand out on the shelf and in the customer\'s hands.',
  },

  businessCards: {
    name:        'Business Cards',
    icon:        '📇',
    color:       '#00897B',
    description: 'Professional business cards that make a strong first impression and represent your brand.',
  },

};


/* ============================================
   PORTFOLIO DATA
   Five categories, three projects each.
   One project per category is marked
   featured: true — shown first in the hero.

   IMAGE PATHS:
   assets/projects/[category]-[number].webp
   Replace with real images when available.
============================================ */
const portfolio = {

  /* ── Logo Design ── */
  logoDesign: [
    {
      id:             1,
      title:          'Nairobi Café',
      client:         'Nairobi Café',
      category:       'Brand Identity',
      description:    'A full brand identity for a modern café in Nairobi that wanted to honour local coffee culture while appealing to a young urban crowd.',
      challenge:      'Build a modern café identity while keeping local character.',
      solution:       'A clean geometric logo inspired by Kenyan coffee culture and warm earthy tones.',
      completionDate: '2024-11',
      duration:       '5 days',
      software:       ['Illustrator', 'Photoshop'],
      tags:           ['café', 'brand identity', 'logo', 'Nairobi', 'food'],
      featured:       true,
      slug:           'nairobi-cafe',
      images: {
        hero:    'assets/projects/logo-01.webp',
        gallery: [
          'assets/projects/logo-01-a.webp',
          'assets/projects/logo-01-b.webp',
        ],
      },
    },
    {
      id:             2,
      title:          'SwiftMove Logistics',
      client:         'SwiftMove Ltd',
      category:       'Corporate Identity',
      description:    'A bold, trustworthy logo for a growing logistics startup operating across East Africa.',
      challenge:      'Communicate speed and reliability in a single mark.',
      solution:       'A dynamic arrow motif combined with strong typography to suggest forward motion.',
      completionDate: '2024-12',
      duration:       '4 days',
      software:       ['Illustrator'],
      tags:           ['logistics', 'startup', 'corporate', 'East Africa'],
      featured:       false,
      slug:           'swiftmove-logistics',
      images: {
        hero:    'assets/projects/logo-02.webp',
        gallery: [
          'assets/projects/logo-02-a.webp',
        ],
      },
    },
    {
      id:             3,
      title:          'GreenLeaf Organics',
      client:         'GreenLeaf Organics',
      category:       'Brand Identity',
      description:    'A fresh, natural logo for an organic food brand targeting health-conscious consumers.',
      challenge:      'Stand out in a crowded organic market without looking generic.',
      solution:       'Hand-drawn leaf illustration with a clean sans-serif wordmark for a premium organic feel.',
      completionDate: '2025-01',
      duration:       '6 days',
      software:       ['Illustrator', 'Procreate'],
      tags:           ['organic', 'food', 'health', 'natural', 'brand'],
      featured:       false,
      slug:           'greenleaf-organics',
      images: {
        hero:    'assets/projects/logo-03.webp',
        gallery: [
          'assets/projects/logo-03-a.webp',
        ],
      },
    },
  ],

  /* ── Poster Design ── */
  posters: [
    {
      id:             4,
      title:          'Afro Fusion Night',
      client:         'Afro Fusion Events',
      category:       'Event Poster',
      description:    'A vibrant event poster for a live music night celebrating Afrobeat, Afropop and fusion genres.',
      challenge:      'Capture the energy and colour of live Afrobeats in a single print.',
      solution:       'Bold typography over layered textures with a warm gold and deep purple palette.',
      completionDate: '2024-10',
      duration:       '2 days',
      software:       ['Photoshop', 'Illustrator'],
      tags:           ['event', 'music', 'Afrobeats', 'nightlife', 'poster'],
      featured:       true,
      slug:           'afro-fusion-night',
      images: {
        hero:    'assets/projects/poster-01.webp',
        gallery: [
          'assets/projects/poster-01-a.webp',
        ],
      },
    },
    {
      id:             5,
      title:          'Fitness Challenge 2025',
      client:         'PeakFit Gym',
      category:       'Promotional Poster',
      description:    'A motivational poster series for a gym\'s 30-day fitness challenge campaign.',
      challenge:      'Make a fitness challenge feel exciting and achievable, not intimidating.',
      solution:       'High-contrast photography combined with energetic type and bright accent colors.',
      completionDate: '2025-01',
      duration:       '3 days',
      software:       ['Photoshop'],
      tags:           ['fitness', 'gym', 'health', 'motivation', 'poster'],
      featured:       false,
      slug:           'fitness-challenge-2025',
      images: {
        hero:    'assets/projects/poster-02.webp',
        gallery: [
          'assets/projects/poster-02-a.webp',
        ],
      },
    },
    {
      id:             6,
      title:          'Nairobi Tech Summit',
      client:         'NBO Tech Community',
      category:       'Conference Poster',
      description:    'Official poster design for an annual technology summit bringing together Kenya\'s top tech minds.',
      challenge:      'Balance professionalism with creativity for a tech-savvy audience.',
      solution:       'Minimal geometric design with circuit-inspired patterns and a bold blue and white palette.',
      completionDate: '2025-02',
      duration:       '3 days',
      software:       ['Illustrator', 'Photoshop'],
      tags:           ['tech', 'conference', 'Nairobi', 'summit', 'poster'],
      featured:       false,
      slug:           'nairobi-tech-summit',
      images: {
        hero:    'assets/projects/poster-03.webp',
        gallery: [
          'assets/projects/poster-03-a.webp',
        ],
      },
    },
  ],

  /* ── Flyer Design ── */
  flyers: [
    {
      id:             7,
      title:          'Mama Osha Restaurant',
      client:         'Mama Osha',
      category:       'Restaurant Flyer',
      description:    'A promotional flyer for a local restaurant\'s new menu launch featuring traditional Kenyan dishes.',
      challenge:      'Make traditional food look irresistible on a small printed format.',
      solution:       'Warm photography of the dishes as hero visuals with handwritten-style accents for a homely feel.',
      completionDate: '2024-09',
      duration:       '1 day',
      software:       ['Photoshop', 'Illustrator'],
      tags:           ['restaurant', 'food', 'menu', 'flyer', 'Kenyan'],
      featured:       true,
      slug:           'mama-osha-restaurant',
      images: {
        hero:    'assets/projects/flyer-01.webp',
        gallery: [
          'assets/projects/flyer-01-a.webp',
        ],
      },
    },
    {
      id:             8,
      title:          'Campus Job Fair',
      client:         'University Career Office',
      category:       'Event Flyer',
      description:    'A clean, professional flyer for a university career fair targeting final-year students.',
      challenge:      'Appeal to students and professional recruiters with a single design.',
      solution:       'Split layout — energetic student imagery on one side, clean job listing details on the other.',
      completionDate: '2024-11',
      duration:       '1 day',
      software:       ['Illustrator'],
      tags:           ['education', 'career', 'event', 'university', 'flyer'],
      featured:       false,
      slug:           'campus-job-fair',
      images: {
        hero:    'assets/projects/flyer-02.webp',
        gallery: [
          'assets/projects/flyer-02-a.webp',
        ],
      },
    },
    {
      id:             9,
      title:          'Black Friday Sale',
      client:         'StyleHub Fashion',
      category:       'Retail Flyer',
      description:    'A high-impact Black Friday sale flyer for a fashion retailer driving foot traffic and online orders.',
      challenge:      'Stand out during Black Friday when everyone is shouting discounts.',
      solution:       'Bold red and black palette, oversized percentage numbers, and a clean product grid layout.',
      completionDate: '2024-11',
      duration:       '2 days',
      software:       ['Photoshop', 'Illustrator'],
      tags:           ['retail', 'fashion', 'sale', 'Black Friday', 'flyer'],
      featured:       false,
      slug:           'black-friday-sale',
      images: {
        hero:    'assets/projects/flyer-03.webp',
        gallery: [
          'assets/projects/flyer-03-a.webp',
        ],
      },
    },
  ],

  /* ── Packaging Design ── */
  packaging: [
    {
      id:             10,
      title:          'Savanna Honey Co.',
      client:         'Savanna Honey Co.',
      category:       'Product Packaging',
      description:    'Full packaging design for a premium Kenyan honey brand targeting retail and export markets.',
      challenge:      'Position a local honey brand as premium without losing its authentic Kenyan roots.',
      solution:       'Hand-illustrated savanna landscape wrapping the jar with gold foil label accents.',
      completionDate: '2024-12',
      duration:       '7 days',
      software:       ['Illustrator', 'Photoshop', 'Dimension'],
      tags:           ['packaging', 'honey', 'premium', 'Kenya', 'retail'],
      featured:       true,
      slug:           'savanna-honey',
      images: {
        hero:    'assets/projects/packaging-01.webp',
        gallery: [
          'assets/projects/packaging-01-a.webp',
          'assets/projects/packaging-01-b.webp',
        ],
      },
    },
    {
      id:             11,
      title:          'UrbanSpice Sauces',
      client:         'UrbanSpice',
      category:       'Product Packaging',
      description:    'A vibrant packaging suite for a hot sauce brand with five flavor variants.',
      challenge:      'Differentiate five variants while keeping a strong unified brand presence.',
      solution:       'Consistent label structure with a unique bold color per flavor and illustrated chili motifs.',
      completionDate: '2025-01',
      duration:       '8 days',
      software:       ['Illustrator', 'Photoshop'],
      tags:           ['packaging', 'food', 'sauce', 'spice', 'variants'],
      featured:       false,
      slug:           'urbanspice-sauces',
      images: {
        hero:    'assets/projects/packaging-02.webp',
        gallery: [
          'assets/projects/packaging-02-a.webp',
        ],
      },
    },
    {
      id:             12,
      title:          'Bloom Skincare',
      client:         'Bloom Skincare',
      category:       'Beauty Packaging',
      description:    'Minimal, elegant packaging for a new Kenyan skincare line targeting young professional women.',
      challenge:      'Look international and premium on a startup budget.',
      solution:       'Clean white packaging with botanical line illustrations and a soft blush and sage palette.',
      completionDate: '2025-02',
      duration:       '6 days',
      software:       ['Illustrator', 'Dimension'],
      tags:           ['skincare', 'beauty', 'packaging', 'minimal', 'premium'],
      featured:       false,
      slug:           'bloom-skincare',
      images: {
        hero:    'assets/projects/packaging-03.webp',
        gallery: [
          'assets/projects/packaging-03-a.webp',
        ],
      },
    },
  ],

  /* ── Business Cards ── */
  businessCards: [
    {
      id:             13,
      title:          'Apex Realty Group',
      client:         'Apex Realty Group',
      category:       'Business Card',
      description:    'Premium double-sided business cards for a real estate firm with a portfolio of luxury properties.',
      challenge:      'Convey luxury and trust in a 85×55mm card.',
      solution:       'Matte black card with gold foil logo, embossed name, and a clean white reverse side.',
      completionDate: '2024-10',
      duration:       '2 days',
      software:       ['Illustrator'],
      tags:           ['real estate', 'luxury', 'business card', 'premium', 'gold'],
      featured:       true,
      slug:           'apex-realty',
      images: {
        hero:    'assets/projects/card-01.webp',
        gallery: [
          'assets/projects/card-01-a.webp',
        ],
      },
    },
    {
      id:             14,
      title:          'Dr. Aisha Consultancy',
      client:         'Dr. Aisha Mwangi',
      category:       'Professional Card',
      description:    'Elegant business cards for an independent business consultant and public speaker.',
      challenge:      'Balance authority with approachability for a personal brand.',
      solution:       'Clean layout with a warm terracotta accent, professional headshot on reverse, and minimal text.',
      completionDate: '2024-12',
      duration:       '1 day',
      software:       ['Illustrator', 'Photoshop'],
      tags:           ['consultant', 'personal brand', 'professional', 'speaker'],
      featured:       false,
      slug:           'dr-aisha-consultancy',
      images: {
        hero:    'assets/projects/card-02.webp',
        gallery: [
          'assets/projects/card-02-a.webp',
        ],
      },
    },
    {
      id:             15,
      title:          'Kazi Creative Studio',
      client:         'Kazi Creative',
      category:       'Creative Card',
      description:    'Bold, unconventional business cards for a young creative studio that wanted to stand out at networking events.',
      challenge:      'Make a business card that people keep instead of throw away.',
      solution:       'Oversized square format with a full-bleed gradient and QR code to portfolio — no address, no clutter.',
      completionDate: '2025-01',
      duration:       '2 days',
      software:       ['Illustrator'],
      tags:           ['creative', 'studio', 'bold', 'unconventional', 'QR code'],
      featured:       false,
      slug:           'kazi-creative',
      images: {
        hero:    'assets/projects/card-03.webp',
        gallery: [
          'assets/projects/card-03-a.webp',
        ],
      },
    },
  ],

};


/* ============================================
   DATA ACCESS FUNCTIONS
   Used by hero.js, portfolio.js, and any
   other file that needs project data.
============================================ */

/* Get all projects in a category */
function getProjects(category) {
  return portfolio[category] || [];
}

/* Get the featured project in a category */
function getFeaturedProject(category) {
  return portfolio[category]?.find(p => p.featured) || portfolio[category]?.[0] || null;
}

/* Get a single project by its slug */
function getProjectBySlug(slug) {
  return Object.values(portfolio)
    .flat()
    .find(p => p.slug === slug) || null;
}

/* Get random projects from a category */
function getRandomProjects(category, count) {
  const projects = [...(portfolio[category] || [])];
  return projects
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

/* Search projects by keyword across all categories */
function searchProjects(keyword) {
  const term = keyword.toLowerCase();
  return Object.values(portfolio)
    .flat()
    .filter(p =>
      p.title.toLowerCase().includes(term)   ||
      p.client.toLowerCase().includes(term)  ||
      p.category.toLowerCase().includes(term)||
      p.tags.some(tag => tag.toLowerCase().includes(term))
    );
}

/* Get all projects across all categories */
function getAllProjects() {
  return Object.values(portfolio).flat();
}

/* Get all service keys */
function getServiceKeys() {
  return Object.keys(services);
}