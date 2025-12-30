import { cvData } from "@/data/cv-data";

interface ConversationContext {
  previousTopics: string[];
  questionCount: number;
}

const context: ConversationContext = {
  previousTopics: [],
  questionCount: 0,
};

// Keyword matching for intent detection
const matchKeywords = (text: string, keywords: string[]): boolean => {
  const lowerText = text.toLowerCase();
  return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
};

// Smart response generator
export const generateMockResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  context.questionCount++;

  // Personal Info / About Me
  if (matchKeywords(message, ["who", "about", "introduce", "yourself", "tell me about dennis", "tell me about you"])) {
    return `👋 Hi! I'm **${cvData.personalInfo.name}**, a **${cvData.personalInfo.title}** based in ${cvData.personalInfo.location}.\n\n${cvData.summary}\n\n🎯 I'm passionate about building scalable web applications and solving complex problems with clean, maintainable code. Currently working at SunCulture, focusing on agricultural technology solutions.`;
  }

  // Experience
  if (matchKeywords(message, ["experience", "work", "job", "career", "worked", "companies", "employer"])) {
    return `💼 **Work Experience**\n\nI have **3+ years** of professional software engineering experience across multiple domains.\n\n${cvData.experience.map((exp, index) => 
      `**${index + 1}. ${exp.position}** 📍\n**${exp.company}** | ${exp.duration}\n📍 ${exp.location}\n\n**Key Responsibilities & Achievements:**\n${exp.responsibilities.map(r => `• ${r}`).join('\n')}\n\n**Technologies:** ${exp.technologies.join(" • ")}`
    ).join('\n\n---\n\n')}\n\n💡 I've worked across **healthcare technology**, **agricultural technology**, and **web development** domains, building scalable solutions that serve thousands of users.\n\n📄 **Want to know more?**\n• [Download my CV](${cvData.personalInfo.resume})\n• [LinkedIn](${cvData.personalInfo.linkedin})\n• [GitHub](${cvData.personalInfo.github})`;
  }

  // Specific company questions
  if (matchKeywords(message, ["sunculture", "current role", "current job", "now"])) {
    const current = cvData.experience[0];
    return `🌱 **Currently at ${current.company}**\n\n**Role:** ${current.position}\n**Duration:** ${current.duration}\n**Location:** ${current.location}\n\n**What I do:**\n${current.responsibilities.map(r => `• ${r}`).join('\n')}\n\n**Tech Stack:** ${current.technologies.join(", ")}`;
  }

  if (matchKeywords(message, ["savannah", "elima", "healthcare", "erp"])) {
    const savannah = cvData.experience.find(e => e.company.includes("Savannah"));
    if (savannah) {
      return `🏥 **Savannah Informatics Experience**\n\n**Role:** ${savannah.position}\n**Duration:** ${savannah.duration}\n\nI worked on **eLIMAERP**, a comprehensive ERP system for healthcare facilities. This was an exciting challenge!\n\n**Key Achievements:**\n${savannah.responsibilities.map(r => `• ${r}`).join('\n')}\n\n**Technologies:** ${savannah.technologies.join(", ")}`;
    }
  }

  // Skills
  if (matchKeywords(message, ["skills", "technologies", "tech stack", "programming", "languages", "what can you", "know"])) {
    return `🛠️ **Technical Skills**\n\n**Languages:**\n${cvData.skills.languages.join(" • ")}\n\n**Backend Frameworks:**\n${cvData.skills.apiDesign.join(" • ")}\n\n**Frontend Frameworks:**\n${cvData.skills.frontend.join(" • ")}\n\n**Databases:**\n${cvData.skills.databases.join(" • ")}\n\n**Cloud & Tools:**\n${cvData.skills.cloud.join(" • ")} | ${cvData.skills.tools.slice(0, 3).join(" • ")}\n\n💪 I'm particularly strong in Python (Django, FastAPI) and full-stack JavaScript/TypeScript development!`;
  }

  // Specific technology questions
  if (matchKeywords(message, ["python", "django", "fastapi"])) {
    return `🐍 **Python Expertise**\n\nPython is my primary language! I have extensive experience with:\n\n• **Django** - Built multiple large-scale applications including eLIMAERP serving 50+ healthcare facilities\n• **FastAPI** - Created high-performance APIs with 40% faster response times\n• **GraphQL** - Implemented GraphQL web services handling 1000+ concurrent requests\n\n📊 I've used Python for web development, data processing, machine learning, and API development across ${cvData.experience.length} different companies.`;
  }

  if (matchKeywords(message, ["react", "frontend", "javascript", "typescript", "next"])) {
    return `⚛️ **Frontend Development**\n\nI'm experienced in modern frontend technologies:\n\n• **React & Next.js** - Built responsive SPAs and SSR applications\n• **TypeScript** - Write type-safe, maintainable code\n• **Tailwind CSS** - Create beautiful, responsive UIs quickly\n• **Vue.js** - Experience with Vue ecosystem\n\n🎨 I enjoy building intuitive user interfaces that provide great user experiences. This portfolio you're chatting with is built using Next.js and React!`;
  }

  if (matchKeywords(message, ["database", "sql", "postgres", "mongodb", "mysql"])) {
    return `🗄️ **Database Experience**\n\nI work with various databases:\n\n**Relational:**\n• PostgreSQL (primary choice)\n• MySQL\n\n**NoSQL:**\n• MongoDB\n• Redis (caching)\n\n💡 **Key Skills:**\n• Database design and optimization\n• Query optimization (improved performance by 40%)\n• Migrations and schema management\n• Connection pooling and caching strategies`;
  }

  // Projects
  if (matchKeywords(message, ["projects", "built", "portfolio", "work on", "created"])) {
    return `🚀 **Notable Projects**\n\n${cvData.projects.map(proj => 
      `**${proj.name}**\n${proj.description}\n\n**Tech:** ${proj.technologies.join(", ")}\n\n**Highlights:**\n${proj.highlights.map(h => `✨ ${h}`).join('\n')}`
    ).join('\n\n---\n\n')}\n\nThese projects have made real impact, serving thousands of users daily! 💪`;
  }

  // Specific project questions
  if (matchKeywords(message, ["elima", "erp", "healthcare"])) {
    const elimaProject = cvData.projects.find(p => p.name.includes("eLIMA"));
    if (elimaProject) {
      return `🏥 **eLIMAERP Project**\n\n${elimaProject.description}\n\n**Impact:**\n${elimaProject.highlights.map(h => `✨ ${h}`).join('\n')}\n\n**Technologies:** ${elimaProject.technologies.join(", ")}\n\nThis project transformed how healthcare facilities in Kenya manage their operations. It's been incredibly rewarding to see the real-world impact!`;
    }
  }

  if (matchKeywords(message, ["graphql", "api"])) {
    const graphqlProject = cvData.projects.find(p => p.name.includes("GraphQL"));
    if (graphqlProject) {
      return `⚡ **GraphQL Web Service**\n\n${graphqlProject.description}\n\n**Key Achievements:**\n${graphqlProject.highlights.map(h => `🎯 ${h}`).join('\n')}\n\n**Tech Stack:** ${graphqlProject.technologies.join(", ")}\n\nGraphQL was a game-changer for our API performance and developer experience!`;
    }
  }

  if (matchKeywords(message, ["sema", "african language", "indigenous language", "language barrier", "nlp"])) {
    const semaProject = cvData.projects.find(p => p.name.includes("SEMA"));
    if (semaProject) {
      return `🌍 **SEMA Platform**\n\n${semaProject.description}\n\n**Key Features:**\n${semaProject.highlights.map(h => `✨ ${h}`).join('\n')}\n\n**Tech Stack:** ${semaProject.technologies.join(", ")}\n\n${semaProject.link ? `🔗 [Visit SEMA Platform](${semaProject.link})` : ''}\n\nThis project is particularly meaningful as it addresses language accessibility across Africa, making AI technology available to millions of people in their native languages!`;
    }
  }

  if (matchKeywords(message, ["machine learning", "ml", "ai", "forecasting", "prediction"])) {
    const mlProject = cvData.projects.find(p => p.name.includes("Inventory"));
    if (mlProject) {
      return `🤖 **ML-Powered Inventory Forecasting**\n\n${mlProject.description}\n\n**Results:**\n${mlProject.highlights.map(h => `📈 ${h}`).join('\n')}\n\n**Technologies:** ${mlProject.technologies.join(", ")}\n\nThis was my first major ML project and it delivered substantial cost savings for healthcare facilities!`;
    }
  }

  // Education
  if (matchKeywords(message, ["education", "degree", "university", "studied", "college", "school"])) {
    return `🎓 **Education**\n\n**${cvData.education.degree}**\n${cvData.education.institution}\n📅 ${cvData.education.year}\n\n**Achievements:**\n${cvData.education.achievements.map(a => `🏆 ${a}`).join('\n')}\n\nI gained a strong foundation in computer science fundamentals, algorithms, and software engineering principles.`;
  }

  // Certifications
  if (matchKeywords(message, ["certification", "certified", "certificate", "courses"])) {
    return `📜 **Certifications**\n\n${cvData.certifications.map(cert => `✅ ${cert}`).join('\n')}\n\nI believe in continuous learning and staying updated with the latest technologies!`;
  }

  // Contact / Hire
  if (matchKeywords(message, ["contact", "reach", "email", "hire", "available", "work with", "social", "socials"])) {
    return `📧 **Let's Connect!**\n\n**Email:** ${cvData.personalInfo.email}\n**LinkedIn:** [linkedin.com/in/dennis-atonya](${cvData.personalInfo.linkedin})\n**GitHub:** [github.com/dentonya](${cvData.personalInfo.github})\n**Twitter:** [twitter.com/den_atonya](${cvData.personalInfo.twitter})\n**Instagram:** [instagram.com/atonyadenis](${cvData.personalInfo.instagram})\n**Portfolio:** [View my portfolio](${cvData.personalInfo.portfolio})\n**Resume/CV:** [Download my CV](${cvData.personalInfo.resume})\n\n💼 I'm always open to discussing interesting opportunities, collaborations, or just connecting with fellow developers!`;
  }

  // Location
  if (matchKeywords(message, ["location", "where", "based", "live"])) {
    return `📍 I'm based in **${cvData.personalInfo.location}**. I work both remotely and on-site depending on the project requirements. Open to remote opportunities globally! 🌍`;
  }

  // Interests / Hobbies
  if (matchKeywords(message, ["interests", "hobbies", "passion", "free time", "outside work", "fun"])) {
    return `🎯 **Interests & Passions**\n\n${cvData.interests.map(interest => `• ${interest}`).join('\n')}\n\nI love staying curious and exploring new technologies. When I'm not coding, you'll find me contributing to open source or writing technical articles!`;
  }

  // Strengths
  if (matchKeywords(message, ["strength", "good at", "best", "expertise", "specialize"])) {
    return `💪 **My Strengths**\n\n1. **Backend Development** - Expert in Python (Django, FastAPI), building scalable APIs and microservices\n\n2. **Full-Stack Capabilities** - Comfortable across the entire stack from database to frontend\n\n3. **Problem Solving** - Love tackling complex challenges and optimizing performance\n\n4. **Quick Learner** - Adapt quickly to new technologies and frameworks\n\n5. **Team Collaboration** - Experience mentoring juniors and working in agile teams\n\n🎯 I particularly excel at building robust backend systems and creating efficient, maintainable code!`;
  }

  // Why hire / What makes special
  if (matchKeywords(message, ["why", "unique", "different", "special", "stand out"])) {
    return `✨ **What Sets Me Apart**\n\n• **Impact-Driven:** My projects serve thousands of users daily and deliver measurable results (40% performance improvements, 60% time savings)\n\n• **Full-Stack Versatility:** Comfortable building everything from ML models to responsive UIs\n\n• **Production Experience:** 3+ years shipping real products to production at scale\n\n• **Continuous Learner:** Always exploring new technologies and best practices\n\n• **Business Mindset:** I focus on building solutions that solve real problems and deliver value\n\n💡 I don't just write code - I build solutions that make a difference!`;
  }

  // Teamwork / Collaboration
  if (matchKeywords(message, ["team", "collaborate", "work with others", "agile", "scrum"])) {
    return `🤝 **Teamwork & Collaboration**\n\nI thrive in collaborative environments:\n\n• **Mentoring:** Help junior developers grow their skills\n• **Code Reviews:** Conduct thorough, constructive code reviews\n• **Agile/Scrum:** Experienced in sprint planning, standups, and retrospectives\n• **Communication:** Clear technical communication with both technical and non-technical stakeholders\n\n💬 I believe the best software is built by great teams working together!`;
  }

  // Salary / Compensation (professional response)
  if (matchKeywords(message, ["salary", "compensation", "pay", "rate", "cost"])) {
    return `💼 **Compensation Discussion**\n\nI'd be happy to discuss compensation based on:\n• The specific role and responsibilities\n• Project scope and duration\n• Market rates for the position\n\nLet's connect to discuss the opportunity in detail! Feel free to reach me at ${cvData.personalInfo.email}`;
  }

  // Remote work
  if (matchKeywords(message, ["remote", "work from home", "distributed"])) {
    return `🏡 **Remote Work**\n\nYes! I'm experienced with remote work and have the setup and discipline for it:\n\n• Strong communication skills for distributed teams\n• Self-motivated and deadline-driven\n• Comfortable with async collaboration tools\n• Flexible across different time zones\n\n🌍 Open to both remote and hybrid arrangements!`;
  }

  // Generic questions
  if (matchKeywords(message, ["how", "what", "when", "why"])) {
    return `🤔 Great question! Let me help you learn more about Dennis.\n\nYou can ask me about:\n• 💼 His work experience and companies\n• 🛠️ Technical skills and expertise\n• 🚀 Projects he's built\n• 🎓 Education and certifications\n• 📧 How to get in touch\n• 🎯 His interests and passions\n\nWhat would you like to know specifically?`;
  }

  // Thanks / Positive feedback
  if (matchKeywords(message, ["thank", "thanks", "appreciate", "helpful", "great", "awesome", "cool"])) {
    return `😊 You're welcome! Feel free to ask anything else about Dennis's experience, projects, or skills. I'm here to help!\n\n💡 **Quick suggestions:**\n• Ask about specific technologies (Python, React, Django, etc.)\n• Learn about his projects and their impact\n• Find out how to connect with him`;
  }

  // Greeting
  if (matchKeywords(message, ["hi", "hello", "hey", "greetings"])) {
    return `👋 Hello! I'm Dennis's AI assistant. I can tell you all about his experience, skills, and projects.\n\nWhat would you like to know?`;
  }

  // Default fallback with context awareness
  const fallbackResponses = [
    `I'd love to help! Could you ask about Dennis's:\n• 💼 Work experience\n• 🛠️ Technical skills\n• 🚀 Projects\n• 🎓 Education\n• 📧 Contact information`,
    `That's an interesting question! While I focus on Dennis's professional background, I can tell you about his:\n• Experience at SunCulture, Savannah Informatics, and other companies\n• Expertise in Python, Django, React, and more\n• Notable projects like eLIMAERP\n\nWhat would you like to explore?`,
    `Let me help you learn about Dennis! Try asking:\n• "What experience does Dennis have?"\n• "What are his strongest skills?"\n• "What projects has he built?"\n• "How can I contact him?"`,
  ];

  return fallbackResponses[context.questionCount % fallbackResponses.length];
};
