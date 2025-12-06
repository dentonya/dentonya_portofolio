export const cvData = {
  personalInfo: {
    name: "Dennis Atonya",
    title: "Software Engineer II",
    location: "Nairobi, Kenya",
    email: "denatonya@gmail.com",
    phone: "+254743460871",
    linkedin: "https://www.linkedin.com/in/dennis-atonya",
    github: "https://github.com/dentonya",
    portfolio: "https://dentonya.github.io/dentonya_portofolio/",
    twitter: "https://twitter.com/den_atonya",
    instagram: "https://www.instagram.com/atonyadenis/",
    resume: "/DENNIS ATONYA CV.pdf"
  },
  
  summary: "Software Engineer with a solid foundation in software development and a proven ability to build scalable, modern applications. Experienced across the stack with a passion for learning and solving real-world problems through technology.",
  
  experience: [
    {
      company: "SunCulture Kenya Limited",
      position: "Software Engineer II",
      duration: "January 2025 - Present",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Develop and maintain scalable microservices using Node.js, TypeScript, Python, and NestJS for high-performance software systems",
        "Built critical services: Authentication Service (OAuth2.0/OpenID), Notification Service (multi-channel messaging via SMS, email, Slack, WhatsApp), Customer Marketplace Platform, and AMT (Accounts Management Tool)",
        "Optimize system performance through AWS RDS, Redis, and Kafka integration with cloud deployments on AWS, Azure, and GCP",
        "Lead Cash Release App development for streamlined expense tracking and approvals for finance operations",
        "Conduct comprehensive code reviews, enforce best practices, and maintain 90%+ test coverage through unit/integration testing",
        "Mentor junior engineers and foster collaborative team culture while contributing to sprint planning and agile practices",
        "Collaborate cross-functionally with QA, DevOps, and Product teams to deliver end-to-end features and system improvements"
      ],
      technologies: ["Node.js", "TypeScript", "Python", "NestJS", "OAuth2.0", "OpenID", "AWS", "Azure", "GCP", "AWS RDS", "Redis", "Kafka"]
    },
    {
      company: "Savannah Informatics Ltd",
      position: "Software Engineer",
      duration: "May 2024 - January 2025",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Developed comprehensive healthcare management systems including SHA Provider Portal and Slade360 Advantage for streamlining patient administration, clinical care, and revenue cycle management in health care centres",
        "Built and maintained RESTful APIs using Django REST Framework, enhancing system performance and scalability by 40%",
        "Implemented robust microservices architecture for handling background tasks and high-concurrency services",
        "Integrated eTIMS for seamless billing and compliance, and USSD workflows for simplified patient enrollment",
        "Utilized PostgreSQL for complex relational database management and optimization",
        "Maintained 95%+ test coverage using Pytest for comprehensive unit and integration testing",
        "Participated in technical documentation and RFC processes via Confluence, ensuring knowledge sharing across teams"
      ],
      technologies: ["Django", "Django REST Framework", "PostgreSQL", "Microservices", "eTIMS", "USSD", "Pytest", "Confluence"]
    },
    {
      company: "Qaribuhub Solutions LTD",
      position: "Software Engineer Contributor",
      duration: "May 2024 - Present (Part Time)",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Build scalable, secure backend services using Django and Django REST Framework for service marketplace platform",
        "Develop responsive frontend components with React, JavaScript, and modern HTML/CSS practices",
        "Implement advanced geolocation and smart search features to enhance user discovery of nearby services",
        "Integrate secure data practices including account verification, password hashing, and real-time notifications",
        "Contribute to platform architecture decisions and deployment strategy using Docker and AWS infrastructure"
      ],
      technologies: ["Django", "Django REST Framework", "React", "JavaScript", "HTML/CSS", "Docker", "AWS", "Geolocation APIs"]
    },
    {
      company: "eProd-Solutions Ltd",
      position: "Software Engineer",
      duration: "June 2022 - April 2024",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Developed and maintained eProd ERP system using Delphi and SQL, serving clients across multiple countries",
        "Built a comprehensive farmer enrollment and validation system using MasterCard Community Pass APIs for digital ID processing",
        "Created Windows services for farmer-produce traceability website and developed language translation tools",
        "Designed and implemented survey generation tool and administration generator for multi-country deployment",
        "Built Proof of Concept desktop application for bank payments utilizing vBank financial APIs for Nigerian clients",
        "Managed complex SQL and MySQL databases supporting enterprise-level ERP operations",
        "Utilized Jira for sprint-based project management and Tortoise SVN for efficient version control and collaboration",
        "Contributed to network management and hardware maintenance while engaging in daily stand-ups and agile practices"
      ],
      technologies: ["Delphi", "SQL", "MySQL", "MasterCard APIs", "vBank APIs", "Jira", "Tortoise SVN"]
    },
    {
      company: "eProd-Solutions Ltd",
      position: "Student Intern",
      duration: "Jan 2022 - April 2022",
      location: "Nairobi, Kenya",
      responsibilities: [
        "Collaborated on the development of the company's Moodle e-learning site",
        "Contributed to successful software documentation on various financial APIs",
        "Worked on minor Delphi projects to improve Delphi and MySQL skills"
      ],
      technologies: ["Delphi", "MySQL", "Moodle", "Jira", "Trello"]
    },
    {
      company: "Section.io",
      position: "Technical Writer (Freelance)",
      duration: "Feb 2021 - April 2022",
      location: "Remote",
      responsibilities: [
        "Authored comprehensive technical articles and tutorials using Markdown for the Section Edge Platform",
        "Built tutorial projects demonstrating Python, Django REST Framework, and React JS best practices",
        "Contributed to open-source Section.io article repository, collaborating with technical experts to meet publication deadlines"
      ],
      technologies: ["Markdown", "Python", "Django REST Framework", "React JS", "Technical Writing"]
    }
  ],
  
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "Node.js", "Delphi", "NestJS"],
    frontend: ["React JS","Next JS", "HTML", "CSS", "Tailwind"],
    apiDesign: ["REST", "GraphQL"],
    databases: ["PostgreSQL", "MySQL", "SQLite"],
    orms: ["Django ORM", "Prisma"],
    testing: ["Pytest", "Unit Tests", "Integration Tests"],
    security: ["OAuth2", "OpenID Connect", "JWT", "HTTPS", "RBAC"],
    versionControl: ["Git", "GitLab", "SVN"],
    devops: ["GitHub Actions", "Docker", "CI/CD", "Monitoring"],
    cloud: ["AWS (RDS, EC2, S3)", "Azure", "GCP"],
    tools: ["Agile", "Jira", "Trello", "Confluence"],
    softSkills: ["Proactive", "Eager to learn", "Effective communicator", "Collaborative team member"]
  },
  
  projects: [
    {
      name: "eLIMA ERP System",
      description: "Built a full-stack ERP for farmer registration, produce collection, and payments using Python (Django REST), React JS, and PostgreSQL. Currently being used for produce collection with 1K+ farmers registered and 15K+ kg of produce processed and paid out.",
      technologies: ["React JS", "Python", "Django REST Framework", "PostgreSQL", "Docker"],
      highlights: [
        "1K+ farmers registered",
        "15K+ kg of produce processed and paid out",
        "Streamlines operations for small-scale farmer organizations"
      ],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      link: "https://erp-frontend-msm3.onrender.com/"
    },
    {
      name: "PetGPS Hub - E-commerce Platform",
      description: "Collaborated on an e-commerce platform for selling pet accessories, including checkout features and integrated M-Pesa payments. Full-featured online store with secure payment processing.",
      technologies: ["React JS", "Node.js", "M-Pesa API", "PostgreSQL"],
      highlights: [
        "Integrated M-Pesa payment gateway",
        "Complete e-commerce checkout flow",
        "Live production platform"
      ],
      image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800",
      link: "https://petgpshub.co.ke/"
    },
    {
      name: "AI-Enhanced IPV Prediction System",
      description: "Worked on the AI-Enhanced Intimate Partner Violence (IPV) Prediction System— a smart platform that uses machine learning and geolocation data to predict IPV risk scores and support faster, more effective responses.",
      technologies: ["Python", "Machine Learning", "Geolocation APIs", "Django", "React"],
      highlights: [
        "ML-powered risk prediction",
        "Geolocation-based analysis",
        "Supports faster emergency responses"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
    {
      name: "eLearning Platform",
      description: "Collaborating on an online learning platform using Node.js for scalable backend development. Building features for course management, student enrollment, and progress tracking.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      highlights: [
        "Scalable backend architecture",
        "Course management system",
        "Student progress tracking"
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800"
    },
    {
      name: "RentEasy - House Hunting App",
      description: "Developing a house-hunting app with React JS and NestJS, focusing on user-friendly listings and property management. Streamlines the rental process for both tenants and landlords.",
      technologies: ["React JS", "NestJS", "TypeScript", "PostgreSQL"],
      highlights: [
        "User-friendly property listings",
        "Advanced search and filtering",
        "Property management dashboard"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
    },
    {
      name: "GraphQL Web Service",
      description: "Created a secure, interactive link management tool using Django, GraphQL (graphene-django), and JWT authentication. Features user authentication, link management, and voting system.",
      technologies: ["Python", "Graphene-Django", "GraphQL", "JWT", "PostgreSQL"],
      highlights: [
        "JWT authentication implementation",
        "Link management and voting system",
        "GraphQL queries and mutations"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
    },
    {
      name: "Web Service - OAuth2 & SMS",
      description: "Created a Python web service with Django REST Framework and PostgreSQL, implementing OAuth2 authentication and integrating Africa's Talking SMS Gateway for secure messaging.",
      technologies: ["Python", "Django REST Framework", "OAuth2", "Africa's Talking API", "PostgreSQL"],
      highlights: [
        "OAuth2 authentication",
        "SMS gateway integration",
        "Secure customer-order workflow"
      ],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800"
    },
    {
      name: "Inventory Forecasting System",
      description: "Designed a predictive analytics tool using XGBoost, integrated into a web app with Django REST and React for inventory management. Analyzes historical sales data to predict future product demand.",
      technologies: ["Python", "XGBoost ML", "Django REST Framework", "React JS", "PostgreSQL"],
      highlights: [
        "Predicts future product demand using XGBoost",
        "Optimizes inventory levels for small businesses",
        "Reduces stock-outs and excess inventory"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
    },
    {
      name: "University Society Management System",
      description: "Contributed to a records management system using Python, Django REST, and React for organized data handling. Streamlined data storage for various ministries and evangelistic teams.",
      technologies: ["React JS", "Python", "Django REST Framework", "SQLite"],
      highlights: [
        "Streamlined data storage for multiple ministries",
        "Eliminated manual record-keeping",
        "Built as volunteer project during university"
      ],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800"
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Technology",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    year: "2018 - 2022",
    achievements: [
      "First Class Honours",
      "Mastered skills encompassing software development (Python, Django), cybersecurity, containerization (Docker, Kubernetes), networking, and machine learning",
      "Complemented by web development, database management, computer graphics, and project management skills"
    ],
    projects: [
      "Inventory Forecasting Management System using Python, Django Rest Framework, React, and a trained XGBoost model for predictive analytics in machine learning",
      "People detection and tracking system using centroid-tracker and object_trackable in Python",
      "Elevator Simulator using Python and Tkinter",
      "Inventory Management System using Django and Docker for containerization"
    ]
  },
  
  certifications: [
    {
      name: "QA TestLab Certification",
      title: "Fundamentals of Software Testing",
      year: "2022",
      skills: [
        "Web, mobile, and game application testing",
        "Using Bug Tracking Systems (Mantis) for bug reporting",
        "TestLink for test case creation"
      ]
    }
  ],
  
  interests: [
    "Open Source Contribution",
    "Machine Learning & AI",
    "Technical Writing",
    "Mentoring Developers",
    "Building SaaS Products"
  ]
};
