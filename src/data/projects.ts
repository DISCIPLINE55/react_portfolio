export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category: string;
  status: 'completed' | 'in-progress';
  progress?: number; // For in-progress projects (0-100)
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  completedDate?: string;
  startDate?: string;
  features: string[];
  challenges?: string[];
  technologies: {
    frontend: string[];
    backend?: string[];
    database?: string[];
    tools: string[];
  };
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const completedProjects: Project[] = [
  {
    id: 'taskmaster-pro',
    title: 'TaskMaster Pro - Advanced To-Do List',
    description: 'A sophisticated task management application with priority levels, due dates, and advanced filtering capabilities.',
    fullDescription: 'TaskMaster Pro is a comprehensive task management solution designed for productivity enthusiasts and professionals. Built with modern web technologies, it features an intuitive interface for creating, organizing, and tracking tasks with multiple priority levels, due date management, and smart filtering. The application includes data persistence, export/import functionality, and a clean, distraction-free design that helps users stay focused on their goals.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'Task Management'],
    category: 'Productivity Tool',
    status: 'completed',
    image: '/src/assets/task-manager.png',
    liveUrl: 'https://taskmaster-two-eta.vercel.app/',
    githubUrl: 'https://github.com/DISCIPLINE55/taskmaster-pro',
    caseStudyUrl: '/projects/taskmaster-pro',
    completedDate: '2024-02-10',
    features: [
      'Create and manage tasks with descriptions',
      'Three priority levels (Low, Medium, High)',
      'Due date assignment and tracking',
      'Task status filtering (All, Active, Completed)',
      'Task completion tracking with statistics',
      'Data export and import functionality',
      'Responsive design for all devices',
      'Local storage for data persistence',
      'Clean and intuitive user interface',
      'Task counter and progress tracking'
    ],
    technologies: {
      frontend: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
      tools: ['Local Storage API', 'Vercel', 'Responsive Design']
    },
    testimonial: {
      text: 'TaskMaster Pro has completely transformed how I organize my daily tasks. The priority system and clean interface make productivity effortless.',
      author: 'Michael Chen',
      role: 'Project Manager'
    }
  },
  {
    id: 'age-calculator',
    title: 'Advanced Age Calculator',
    description: 'A comprehensive age calculation tool with multiple languages, sharing features, and precise date calculations.',
    fullDescription: 'The Advanced Age Calculator is a user-friendly web application that provides accurate age calculations down to the exact number of years, months, and days. Built with a focus on accessibility and internationalization, it features multi-language support (English and Español), social media sharing capabilities, and the ability to save and load birthdates. The application uses precise date arithmetic to handle leap years, different month lengths, and timezone considerations for accurate results.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Date API', 'Internationalization'],
    category: 'Utility Tool',
    status: 'completed',
    image: '/src/assets/age-calculator.png',
    liveUrl: 'https://age-calculator-zeta-tawny.vercel.app/',
    githubUrl: 'https://github.com/DISCIPLINE55/age-calculator',
    caseStudyUrl: '/projects/age-calculator',
    completedDate: '2024-01-28',
    features: [
      'Precise age calculation (years, months, days)',
      'Multi-language support (English, Spanish)',
      'Save and load birthdate functionality',
      'Social media sharing (Facebook, Twitter)',
      'Print-friendly result format',
      'Responsive design for all devices',
      'Clean and intuitive user interface',
      'Leap year and timezone handling',
      'Accessibility-focused design',
      'Real-time calculation updates'
    ],
    technologies: {
      frontend: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
      tools: ['Date API', 'Local Storage', 'Print CSS', 'Vercel']
    },
    testimonial: {
      text: 'Perfect for calculating exact ages for official documents. The multi-language feature is incredibly helpful for our international clients.',
      author: 'Maria Rodriguez',
      role: 'Administrative Assistant'
    }
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'This responsive, animated, and accessible portfolio showcasing my work and skills.',
    fullDescription: 'A modern, fully responsive portfolio website built with React and TypeScript, featuring smooth animations, dark mode support, and comprehensive accessibility features. Showcases projects, skills, and professional experience with an elegant, user-friendly design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'SEO'],
    category: 'Portfolio',
    status: 'completed',
    image: '/src/assets/portfolio.png',
    liveUrl: 'https://ismailmensah.vercel.app/',
    githubUrl: 'https://github.com/DISCIPLINE55/portfolio',
    caseStudyUrl: '/projects/portfolio-website',
    completedDate: '2024-02-20',
    features: [
      'Fully responsive design for all screen sizes',
      'Dark/Light mode toggle',
      'Smooth scroll animations',
      'Contact form with email integration',
      'SEO optimized with meta tags',
      'Accessibility compliant (WCAG 2.1)',
      'Performance optimized',
      'Progressive Web App features'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      tools: ['Vite', 'Vercel', 'ESLint', 'Prettier']
    }
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Real-time weather application with 5-day forecast and location-based updates.',
    fullDescription: 'A comprehensive weather dashboard that provides real-time weather information and 5-day forecasts. Features geolocation support, multiple city tracking, and a clean, intuitive interface with weather visualizations.',
    tags: ['JavaScript', 'API', 'Tailwind CSS', 'Weather API'],
    category: 'Web Application',
    status: 'completed',
    image: '/src/assets/weather_app.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/DISCIPLINE55/weather-dashboard',
    caseStudyUrl: '/projects/weather-dashboard',
    completedDate: '2023-11-30',
    features: [
      'Real-time weather data integration',
      '5-day weather forecast',
      'Geolocation-based weather detection',
      'Multiple city weather tracking',
      'Weather condition visualizations',
      'Responsive design for mobile and desktop',
      'Local storage for saved cities'
    ],
    technologies: {
      frontend: ['JavaScript', 'HTML5', 'Tailwind CSS'],
      tools: ['OpenWeatherMap API', 'Geolocation API']
    }
  },
  {
    id: 'blog-platform',
    title: 'Personal Blog Platform',
    description: 'Content management system with markdown support and SEO optimization.',
    fullDescription: 'A custom-built blog platform featuring markdown support, SEO optimization, and a clean reading experience. Includes admin panel for content management and analytics integration.',
    tags: ['Next.js', 'MDX', 'SEO', 'CMS'],
    category: 'Content Management',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMHBsYXRmb3JtfGVufDB8fDB8fHww',
    liveUrl: 'https://blog.ismailmensah.dev',
    githubUrl: 'https://github.com/DISCIPLINE55/blog-platform',
    completedDate: '2024-01-05',
    features: [
      'Markdown and MDX support',
      'SEO optimized blog posts',
      'Tag and category system',
      'Search functionality',
      'Comments system',
      'RSS feed generation',
      'Reading time estimation',
      'Social media sharing'
    ],
    technologies: {
      frontend: ['Next.js', 'React', 'Tailwind CSS'],
      tools: ['MDX', 'Next SEO', 'Vercel']
    }
  }
];

export const inProgressProjects: Project[] = [
  {
    id: 'efia-classic-boutique',
    title: 'Sister Efia Classic Boutique',
    description: 'Luxury fashion e-commerce platform featuring premium collections, elegant design, and seamless shopping experience.',
    fullDescription: 'Sister Efia Classic Boutique is a sophisticated e-commerce platform designed for luxury fashion retail. The website showcases premium collections including bags, watches, shoes, and accessories with an emphasis on elegance and class. Built with modern web technologies, it features a responsive design, shopping cart functionality, customer testimonials, and newsletter subscription. The platform is currently being enhanced with advanced payment processing, inventory management, and customer account features.',
    tags: ['React', 'E-commerce', 'Luxury Fashion', 'Responsive Design', 'Shopping Cart'],
    category: 'E-commerce',
    status: 'in-progress',
    progress: 80,
    image: '/src/assets/efia-classic.png',
    liveUrl: 'https://sister-efia-classic.vercel.app/',
    githubUrl: 'https://github.com/DISCIPLINE55/sister-efia-classic',
    startDate: '2024-01-15',
    features: [
      'Premium product showcase with categories ✅',
      'Responsive design for all devices ✅',
      'Shopping cart functionality ✅',
      'Customer testimonials section ✅',
      'Newsletter subscription ✅',
      'Social media integration ✅',
      'Contact information and location ✅',
      'Payment gateway integration 🚧',
      'User authentication system 🚧',
      'Order management dashboard 📝',
      'Inventory tracking system 📝',
      'Advanced product filtering 📝'
    ],
    challenges: [
      'Implementing secure payment processing with multiple gateways',
      'Creating an intuitive admin dashboard for inventory management',
      'Optimizing product image loading and gallery performance',
      'Ensuring mobile-first responsive design for luxury aesthetics'
    ],
    technologies: {
      frontend: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      tools: ['Vercel', 'Responsive Design', 'Shopping Cart API']
    },
    testimonial: {
      text: 'Absolutely love the quality! The handbag I ordered is stunning!',
      author: 'Aisha M.',
      role: 'Customer'
    }
  },
  {
    id: 'quran-memorization-platform',
    title: "Ass-Haabul Qur'an - Quran Memorization Platform",
    description: 'Comprehensive Islamic learning platform focused on Quran memorization, recitation, and spiritual development.',
    fullDescription: 'Ass-Haabul Quran is a dedicated platform for Quran memorization and Islamic learning, designed to support students in their spiritual journey. The platform combines traditional Islamic education methods with modern web technology to provide an engaging and effective learning experience. It features structured memorization programs, audio recitation guides, progress tracking, and community support features. Currently in active development with core features being implemented and tested.',
    tags: ['Islamic Education', 'Quran', 'Memorization', 'Learning Platform', 'Spiritual Development'],
    category: 'Education',
    status: 'in-progress',
    progress: 65,
    image: '/src/assets/ass-haabul.png',
    liveUrl: 'https://ass-haabul-qur-an.vercel.app/',
    githubUrl: 'https://github.com/DISCIPLINE55/ass-haabul-qur-an',
    startDate: '2024-01-10',
    features: [
      'Quran text display with multiple translations ✅',
      'Audio recitation integration ✅',
      'User progress tracking system ✅',
      'Memorization schedule planning ✅',
      'Islamic calendar integration 🚧',
      'Community discussion forums 🚧',
      'Personalized learning paths 🚧',
      'Offline reading capability 📝',
      'Mobile app version 📝',
      'Advanced search and bookmarking 📝',
      'Teacher-student interaction tools 📝',
      'Certification system for completed sections 📝'
    ],
    challenges: [
      'Implementing accurate Arabic text rendering and typography',
      'Integrating high-quality audio recitations with text synchronization',
      'Creating effective memorization algorithms and tracking systems',
      'Ensuring cultural and religious sensitivity in design and functionality',
      'Optimizing for users with varying levels of Arabic proficiency'
    ],
    technologies: {
      frontend: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      tools: ['Vercel', 'Audio APIs', 'Arabic Typography', 'Progressive Web App']
    }
  },
  {
    id: 'ai-writing-assistant',
    title: 'AI-Powered Writing Assistant',
    description: 'Intelligent writing tool with grammar checking, style suggestions, and AI content generation.',
    fullDescription: 'An advanced writing assistant powered by AI, providing real-time grammar checking, style suggestions, and content generation capabilities. Integrating multiple AI services to create a comprehensive writing experience.',
    tags: ['React', 'OpenAI', 'NLP', 'AI'],
    category: 'AI Tool',
    status: 'in-progress',
    progress: 30,
    image: 'https://media.istockphoto.com/id/1495008087/photo/cute-robot-holding-a-pencil-to-write-a-message-on-paper-with-blue-background.jpg?s=1024x1024&w=is&k=20&c=HjT4haHJMpu0SGX9QyqgUww-qPTBfN8qOiOsyfhpjXo=',
    githubUrl: 'https://github.com/DISCIPLINE55/ai-writing-assistant',
    startDate: '2024-02-15',
    features: [
      'Text editor with rich formatting ✅',
      'Basic grammar checking 🚧',
      'AI content suggestions 🚧',
      'Style and tone analysis 📝',
      'Plagiarism detection 📝',
      'Document collaboration 📝',
      'Export to multiple formats 📝'
    ],
    challenges: [
      'Integrating multiple AI APIs efficiently',
      'Creating responsive text editor',
      'Implementing real-time collaboration'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Draft.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js'],
      tools: ['OpenAI API', 'Grammarly API', 'Socket.io']
    }
  },
  {
    id: 'crypto-tracker',
    title: 'Cryptocurrency Portfolio Tracker',
    description: 'Real-time crypto portfolio management with advanced analytics and alerts.',
    fullDescription: 'A comprehensive cryptocurrency portfolio tracker with real-time price updates, advanced analytics, profit/loss calculations, and price alerts. Features a clean dashboard for monitoring multiple crypto assets.',
    tags: ['React', 'Chart.js', 'Crypto API', 'Real-time'],
    category: 'Finance',
    status: 'in-progress',
    progress: 60,
    image: 'https://media.istockphoto.com/id/2181392576/photo/abstract-cryptocurrency-coin-on-smartphone-screen-crypto-payments-crypto-wallet-usb-security.jpg?s=1024x1024&w=is&k=20&c=9fUH0LUW5Ct8xAMSvTndQvMRlOUUtRQoYOtlkiscGFo=',
    liveUrl: 'https://crypto-tracker-demo.vercel.app/',
    githubUrl: 'https://github.com/DISCIPLINE55/crypto-tracker',
    startDate: '2024-01-10',
    features: [
      'Real-time price tracking ✅',
      'Portfolio management ✅',
      'Interactive charts ✅',
      'Price alerts system 🚧',
      'News integration 🚧',
      'Performance analytics 📝',
      'Tax reporting tools 📝'
    ],
    challenges: [
      'Handling real-time data efficiently',
      'Creating responsive chart components',
      'Implementing accurate P&L calculations'
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      tools: ['CoinGecko API', 'WebSocket', 'LocalStorage']
    }
  }
];

export const allProjects = [...completedProjects, ...inProgressProjects];
