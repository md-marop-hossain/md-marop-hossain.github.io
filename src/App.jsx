import { useEffect, useState } from "react";

function App() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  const roles = [
    "AI Engineer @NidusLab-USA",
    "LLMs & RAG Systems Specialist",
    "Computer Vision & ML Engineer",
    "LangChain & LangGraph Developer",
    "Agentic AI & FastAPI Expert",
  ];

  const toggleProject = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Scroll tracking for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "projects",
        "skills",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title:
        "Next-Generation Multi-Model Personal AI Agent Chatbot Platform with Real-Time Web Search",
      description: [
        "Combines advanced language models from OpenAI and Groq with real-time web search, enabling dynamic, up-to-date, and intelligent conversational experiences.",
        "Developed using FastAPI (backend), LangGraph and LangChain (agent logic and tool integration), Streamlit (frontend), and Uvicorn (hosting), making the platform robust, extensible, and production-ready.",
      ],
      tech: [
        "FastAPI",
        "LangGraph",
        "LangChain",
        "Streamlit",
        "Uvicorn",
        "OpenAI",
        "Groq",
      ],
      link: "#",
    },
    {
      title:
        "Hybrid Log Classification System with Deepseek-R1 LLM, BERT, NLP and Regex",
      description: [
        "Developed a hybrid AI system for automated log message classification using Regex pattern matching, BERT embeddings with logistic regression, and Deepseek R1 Large Language Models (LLM), with DBSCAN clustering for regex discovery to automatically categorize log messages from enterprise systems, ensuring high accuracy and adaptability for both common and rare log types.",
        "Designed a scalable pipeline that combines rule-based, machine learning, and GenAI methods-helping organizations detect errors, security threats, and system events faster, reduce manual log review, and improve IT operations in real-world industry environments.",
      ],
      tech: ["Deepseek-R1", "BERT", "NLP", "Regex", "DBSCAN", "Python"],
      link: "#",
    },
    {
      title: "GPT-Powered Email Assistant",
      description: [
        "Built an AI-driven email assistant using Python and OpenAI GPT model (GPT-4.1 and 3.5) to automate email scanning, smart prioritization, and automatic categorization of business and sponsorship messages, compatible with any email provider.",
        "Enabled AI-generated professional reply suggestions and user review workflows, supporting both OpenAI and local LLMs for privacy, resulting in significant time savings and improved inbox organization.",
      ],
      tech: ["Python", "GPT-4", "GPT-3.5", "OpenAI API", "NLP"],
      link: "#",
    },
    {
      title: "EdTech LLM Q&A Suite: LangChain + Gemini + Streamlit",
      description: [
        "Developed an AI-powered Q&A platform using LangChain, Google Gemini (PaLM), and Streamlit, delivering instant, context-aware answers for educational and online platforms through a user-friendly interface.",
        "Integrated a centralized CSV knowledge base for efficient information retrieval, streamlining support and knowledge management to reduce repetitive queries and enhance scalability.",
      ],
      tech: ["LangChain", "Google Gemini", "Streamlit", "PaLM", "Python"],
      link: "#",
    },
    {
      title:
        "Enhancing Ocular Disease Diagnosis, Blood Vessel Segmentation, and Vessel Diameter Estimation Using an Advanced Deep Learning Approach",
      description: [
        "Developed retinal vessel segmentation and diameter estimation algorithms for diagnosing ischemia, macular degeneration, and cardiovascular diseases, enabling early, cost-effective detection with potential for mobile or web integration.",
        "Designed an advanced system using pre-trained models (EfficientNetV2S, ResNet50, DenseNet121) to classify ocular diseases (cataracts, glaucoma, diabetic retinopathy) with high accuracy, improving diagnostic efficiency.",
      ],
      tech: [
        "EfficientNetV2S",
        "ResNet50",
        "DenseNet121",
        "Deep Learning",
        "Computer Vision",
      ],
      link: "#",
    },
    {
      title:
        "Segmentation of Blood Vessels, Optic Disc Localization, Exudates Detection for Diabetic Retinopathy, and Glaucoma Diagnosis From Fundus Images",
      description: [
        "Developed an automated diagnostic system using image processing and machine learning to detect diabetic retinopathy and glaucoma, achieving 98.77% accuracy in optic disc localization and 75.73% accuracy in retinal feature classification.",
        "Engineered blood vessel segmentation algorithms with improved accuracy and noise reduction using morphological operations, Otsu thresholding, and deep learning techniques.",
      ],
      tech: [
        "OpenCV",
        "Machine Learning",
        "Image Processing",
        "Python",
        "Deep Learning",
      ],
      link: "#",
    },
    {
      title:
        "Predictive Modeling and Analysis of Software Engineers Salary Using Machine Learning",
      description: [
        "Built a ML framework using regression models (Decision Trees, Random Forest, Linear Regression, XGBoost) to predict software engineer salaries with 76% accuracy, leveraging 60,000+ entries from the 2023 Stack Overflow Developer Survey.",
        "Deployed a user-friendly web application for real-time salary predictions, supporting job seekers and recruiters in salary negotiations and career planning.",
      ],
      tech: [
        "XGBoost",
        "Random Forest",
        "Linear Regression",
        "Python",
        "Scikit-learn",
        "Streamlit",
      ],
      link: "#",
    },
  ];

  const skills = {
    "Programming Languages & Tools": [
      { name: "Python", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "C/C++", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "Java", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "JavaScript",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "Git", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "SQL (advanced)",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "MySQL", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "MongoDB",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "Bash", color: "bg-primary/20 border-primary/50 text-primary" },
    ],
    "Machine Learning & AI": [
      {
        name: "PyTorch",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "TensorFlow",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "Keras", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "Scikit-learn",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "OpenCV", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "NLTK", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "HuggingFace",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "Fine-tuning",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "Prompt Engineering",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "Generative AI",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "RAG", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "FAISS", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "Chroma", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "NLP", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "Statistical Analysis",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "Data Cleaning",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
    ],
    "Large Language Models (LLMs)": [
      { name: "GPT", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "BERT", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "Claude", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "LLaMA", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "DeepSeek",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "LangChain",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "LangGraph",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
    ],
    "Data Science & Visualization": [
      { name: "Pandas", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "NumPy", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "SciPy", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "Matplotlib",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "Seaborn",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
    ],
    "Web & Application Development": [
      {
        name: "FastAPI",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      {
        name: "React.js",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
      { name: "Django", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "PHP", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "Streamlit",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
    ],
    "Cloud & DevOps": [
      { name: "AWS", color: "bg-primary/20 border-primary/50 text-primary" },
      { name: "Docker", color: "bg-primary/20 border-primary/50 text-primary" },
      {
        name: "GitHub Actions",
        color: "bg-primary/20 border-primary/50 text-primary",
      },
    ],
  };

  const education = [
    {
      degree: "Bachelor of Science (BSc)",
      department: "ECE",
      major: "Computer Science and Engineering",
      institution: "North South University",
      location: "Bashundhara R/A, Dhaka, Bangladesh",
      duration: "February 2020 – July 2024",
      focus:
        "Strong foundation in deep learning, project management, and computer vision",
    },
  ];

  const experience = [
    {
      role: "AI Software Engineer (Intern)",
      company: "NidusLab-USA",
      employmentType: "Full-time",
      period: "Sep 2025 - Present",
      duration: "3 mos",
      location: "Dhaka, Bangladesh",
      locationType: "On-site",
      description:
        "Working on NidusJob, an AI-powered job portal designed to revolutionize recruitment through intelligent automation and personalized user experiences.",
      achievements: [
        "Developed core microservices architecture for the NidusJob platform, improving system scalability and enabling seamless integration of modular components",
        "Designed and implemented an AI-driven recommendation engine featuring automatic candidate matching and bulk hiring automation, significantly increasing recruitment efficiency",
        "Engineered User-Based Collaborative Filtering (UBCF) models to deliver personalized job recommendations, enhancing user engagement and match quality",
        "Built AI-powered job description generators and semantic search engines using NLP and information retrieval techniques, streamlining content creation workflows",
        "Created automated interview question generators and cover letter/resume builders leveraging LLMs, reducing application preparation time",
        "Integrated voice assistant and agentic AI chatbot using LiveKit and OpenAI Realtime API, providing real-time user support and enhancing platform interactivity",
      ],
      techStack: [
        "Python",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "LangChain",
        "LangGraph",
        "RAG",
        "LLMs",
        "MLOps",
        "OpenAI API",
        "Groq",
        "Docker",
        "Sentence Transformers",
        "LiveKit",
      ],
    },
  ];

  const certifications = [
    {
      title: "Fine-Tuning for LLMs: from Beginner to Advanced",
      issuer: "LinkedIn",
      date: "May 2025",
      certificateLink: "#",
      description: [
        "Gained practical expertise in large language models (LLMs) such as FLAN-T5, including their architecture, evolution, and significance in modern AI, with hands-on training in prompt engineering, transfer learning, and PEFT fine-tuning using LoRA.",
        "Applied advanced LLM techniques to build a project for sentiment analysis, summarization, and question answering, leveraging live demos and real-world challenges to solidify skills.",
      ],
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "April 2025",
      certificateLink: "#",
      description: [
        "Developed foundational skills in Generative AI, Responsible AI, Artificial Intelligence for Business, Microsoft Copilot, and Prompt Engineering through a comprehensive learning path created by Microsoft and LinkedIn.",
        "Gained practical experience in applying AI tools such as Copilot for workflow automation, explored ethical considerations in AI, and learned strategies for integrating generative AI into business and productivity contexts.",
      ],
    },
    {
      title: "AI Engineering Essentials: Navigating the Tech Revolution",
      issuer: "LinkedIn",
      date: "March 2025",
      certificateLink: "#",
      description: [
        "Acquired foundational knowledge and practical understanding of how software development integrates with AI technologies to drive innovation in the tech industry.",
      ],
    },
    {
      title: "Machine Learning",
      issuer: "SkillUp by Simplilearn",
      date: "August 6, 2023",
      certificateLink: "#",
      description: [
        "Completed a comprehensive course covering core machine learning concepts, including supervised, unsupervised, and reinforcement learning algorithms such as linear regression, decision trees, random forests, and K-means clustering.",
        "Gained practical knowledge of machine learning applications and techniques through self-paced video lessons.",
      ],
    },
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero (Batch 4)",
      date: "January 2021 – August 2021",
      certificateLink: "#",
      description: [
        "Successfully completed with 96% marks in assessments and projects. Gained expertise in modern web development technologies, including React.js, Node.js, Express.js, and MongoDB, through practical projects and evaluations.",
        "Gained proficiency in CSS3, HTML5, TypeScript, Tailwind, Firebase, Bootstrap, Git, and integrating Stripe gateways.",
      ],
    },
    {
      title: "Python Data Structures",
      issuer: "Coursera (University of Michigan)",
      date: "August 12, 2020",
      certificateLink: "#",
      description: [
        "Gained hands-on experience in data modeling, file operations, and algorithmic problem-solving using Python, with a focus on efficient implementation and data manipulation techniques.",
        "Applied key/value storage strategies and built multi-step programming solutions for real-world scenarios through interactive, project-based learning.",
      ],
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const navItems = [
    { id: "home", label: "Home", color: "primary" },
    { id: "about", label: "About", color: "primary" },
    { id: "education", label: "Education", color: "primary" },
    { id: "experience", label: "Experience", color: "primary" },
    { id: "projects", label: "Projects", color: "primary" },
    { id: "skills", label: "Skills", color: "primary" },
    { id: "certifications", label: "Certifications", color: "primary" },
    { id: "contact", label: "Contact", color: "primary" },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none"></div>

      <div className="bg-black relative z-10">
        {/* Fixed Navbar */}
        <nav
          className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
            isScrolled
              ? "glass-morphism-strong border-white/10 shadow-lg shadow-primary/5"
              : "bg-black/50 border-white/5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                  AI Engineer
                </span>
              </div>

              <div className="hidden md:flex space-x-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const colorClasses = {
                    primary: {
                      active: "text-primary bg-primary/10",
                      hover: "hover:text-primary hover:bg-primary/5",
                      glow: "from-primary/0 via-primary/10 to-primary/0",
                      indicator: "via-primary",
                    },
                    secondary: {
                      active: "text-primary bg-primary/10",
                      hover: "hover:text-primary hover:bg-primary/5",
                      glow: "from-primary/0 via-primary/10 to-primary/0",
                      indicator: "via-primary",
                    },
                    "accent-purple": {
                      active: "text-primary bg-primary/10",
                      hover: "hover:text-primary hover:bg-primary/5",
                      glow: "from-primary/0 via-primary/10 to-primary/0",
                      indicator: "via-primary",
                    },
                    "accent-pink": {
                      active: "text-primary bg-primary/10",
                      hover: "hover:text-primary hover:bg-primary/5",
                      glow: "from-primary/0 via-primary/10 to-primary/0",
                      indicator: "via-primary",
                    },
                    "accent-blue": {
                      active: "text-primary bg-primary/10",
                      hover: "hover:text-primary hover:bg-primary/5",
                      glow: "from-primary/0 via-primary/10 to-primary/0",
                      indicator: "via-primary",
                    },
                  };

                  const colors = colorClasses[item.color];

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg overflow-hidden group ${
                        isActive
                          ? colors.active
                          : `text-gray-300 hover:text-white ${colors.hover}`
                      }`}
                    >
                      {/* Hover background sweep effect */}
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${colors.glow} translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out`}
                      ></span>

                      {/* Active indicator line */}
                      {isActive && (
                        <span
                          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${colors.indicator} to-transparent animate-pulse-slow`}
                        ></span>
                      )}

                      {/* Text */}
                      <span className="relative z-10 flex items-center gap-1">
                        {item.label}
                        {isActive && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                        )}
                      </span>

                      {/* Hover ripple effect */}
                      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 active:scale-95 transform transition-transform"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-white/10 py-4 space-y-2 animate-fadeIn">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-primary/10 text-primary border-l-4 border-primary"
                          : "text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center section-gradient"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="glass-morphism-strong p-2 rounded-full animate-glow">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse-slow"></div>
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-primary via-cyan-400 to-blue-500 p-[2px] relative z-10"
                    style={{
                      borderImage:
                        "linear-gradient(135deg, #00D9FF, #22D3EE, #0EA5E9) 1",
                    }}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Hi, I'm <span className="gradient-text">Md Marop Hossain</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 h-14 sm:h-16 flex items-center justify-center px-4">
              <span className="typing-cursor font-mono bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                {typedText}
              </span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              As an AI Engineer (Intern) at NidusLab-USA, I contribute to the
              development of advanced AI systems, focusing on building scalable
              microservices, AI-powered recommendation engines, and NLP-driven
              tools for job portals. Passionate about leveraging AI to drive
              impactful solutions that optimize user experiences and streamline
              complex workflows.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 text-black rounded-xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-1 animate-gradient bg-[length:200%_auto]"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-transparent border-2 border-transparent bg-clip-padding rounded-xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:text-black hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
                style={{
                  borderImage:
                    "linear-gradient(135deg, #00D9FF, #0EA5E9, #06B6D4) 1",
                }}
              >
                <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
              Building the future with AI, one solution at a time
            </p>

            <div className="glass-morphism rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-lg border border-primary/30 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 gradient-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold mb-1 text-gradient">
                      AI Engineer | Problem Solver | Innovator
                    </h3>
                    <div className="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                  With a B.Sc. in Computer Science and Engineering from North
                  South University, I bring a solid academic foundation and
                  expertise in deep learning, project management, and computer
                  vision.
                </p>

                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  As an AI Engineer (Intern) at NidusLab-USA, I contribute to
                  developing advanced AI systems, focusing on building scalable
                  microservices, AI-powered recommendation engines, and
                  NLP-driven tools for job portals.
                </p>

                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  Collaborating with the team, we enhance job-seeking processes
                  through personalized job matching, automated document
                  generation, and voice-enabled AI chatbots. I aim to support
                  innovative projects that optimize user experiences and
                  streamline complex workflows.
                </p>

                {/* Key focus areas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
                  <div className="text-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center border border-primary/30 group-hover/item:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 7H7v6h6V7z" />
                        <path
                          fillRule="evenodd"
                          d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-300">
                      AI Systems
                    </p>
                  </div>
                  <div className="text-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center border border-primary/30 group-hover/item:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-300">
                      Microservices
                    </p>
                  </div>
                  <div className="text-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center border border-primary/30 group-hover/item:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-300">
                      Deep Learning
                    </p>
                  </div>
                  <div className="text-center group/item">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/20 flex items-center justify-center border border-primary/30 group-hover/item:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-300">
                      Computer Vision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
              Academic foundation in Computer Science & Engineering
            </p>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-morphism rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex gap-4">
                        {/* University Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 flex items-center justify-center">
                            <svg
                              className="w-8 h-8 gradient-icon"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                        </div>

                        {/* Degree Info */}
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-sm sm:text-base text-gradient font-semibold mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10 whitespace-nowrap text-[10px] sm:text-xs">
                          {edu.duration}
                        </span>
                      </div>
                    </div>

                    {/* Academic Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pt-4 border-t border-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 mb-1">
                            Department
                          </p>
                          <p className="text-sm text-gray-300">
                            {edu.department}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 mb-1">
                            Major
                          </p>
                          <p className="text-sm text-gray-300">{edu.major}</p>
                        </div>
                      </div>
                    </div>

                    {/* Focus/Expertise */}
                    <div className="pt-4 border-t border-white/5">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-gray-400 mb-1">
                            Areas of Expertise
                          </p>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {edu.focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-center text-gray-400 mb-10 text-base">
              Building AI solutions that make a difference
            </p>

            <div className="space-y-4 sm:space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="glass-morphism rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-4 sm:p-6">
                    {/* Compact Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm sm:text-base text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs text-gray-400">
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] sm:text-xs">
                          {exp.employmentType}
                        </span>
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] sm:text-xs">
                          {exp.period}
                        </span>
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] sm:text-xs">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Compact Description */}
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Compact Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-gradient-to-b from-primary to-primary rounded-full"></span>
                        Key Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements
                          .slice(0, 4)
                          .map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed"
                            >
                              <span className="text-primary mt-0.5 text-sm">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        {exp.achievements.length > 4 && (
                          <details className="mt-2">
                            <summary className="text-xs text-primary cursor-pointer hover:text-primary transition-colors">
                              Show {exp.achievements.length - 4} more...
                            </summary>
                            <ul className="space-y-1.5 mt-2">
                              {exp.achievements
                                .slice(4)
                                .map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed"
                                  >
                                    <span className="text-primary mt-0.5 text-sm">
                                      •
                                    </span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                            </ul>
                          </details>
                        )}
                      </ul>
                    </div>

                    {/* Compact Tech Stack */}
                    {exp.techStack && (
                      <div className="pt-4 border-t border-white/5">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-gray-400 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
              Notable AI and ML projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, index) => {
                const colors = [
                  "from-primary to-primary",
                  "from-primary to-primary",
                  "from-primary to-primary",
                  "from-primary to-primary",
                  "from-primary to-primary",
                  "from-primary to-primary",
                ];
                return (
                  <div
                    key={index}
                    className="glass-morphism rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 border border-white/10"
                  >
                    <div
                      className={`h-1 bg-gradient-to-r ${
                        colors[index % colors.length]
                      }`}
                    ></div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      <ul className="text-gray-400 mb-4 leading-relaxed text-sm space-y-2">
                        {Array.isArray(project.description) ? (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-primary mt-1 flex-shrink-0">
                                •
                              </span>
                              <span>{project.description[0]}</span>
                            </li>
                            {expandedProjects[index] &&
                              project.description.slice(1).map((point, idx) => (
                                <li
                                  key={idx + 1}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            {project.description.length > 1 && (
                              <button
                                onClick={() => toggleProject(index)}
                                className="text-primary hover:text-cyan-400 text-sm font-semibold flex items-center gap-1 transition-colors duration-300 mt-2"
                              >
                                {expandedProjects[index] ? (
                                  <>
                                    Show less
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 15l7-7 7 7"
                                      />
                                    </svg>
                                  </>
                                ) : (
                                  <>
                                    Show more...
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                      />
                                    </svg>
                                  </>
                                )}
                              </button>
                            )}
                          </>
                        ) : (
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{project.description}</span>
                          </li>
                        )}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-gray-400 hover:border-primary/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-gradient hover:gap-3 transition-all duration-300"
                        >
                          View Project
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
              Expertise across AI, ML, and software development
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(skills).map(([category, skillList], index) => {
                const categoryColors = [
                  "border-l-primary",
                  "border-l-secondary",
                  "border-l-accent-purple",
                  "border-l-accent-pink",
                  "border-l-accent-blue",
                  "border-l-primary",
                ];
                return (
                  <div
                    key={index}
                    className={`glass-morphism p-4 sm:p-6 rounded-lg border-l-4 ${
                      categoryColors[index % categoryColors.length]
                    } border border-white/10 hover:border-primary/30 transition-all duration-300`}
                  >
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs ${skill.color} border font-medium rounded`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        <section
          id="certifications"
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
              <span className="gradient-text">
                Certifications & Achievements
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-6 sm:mb-8 text-xs sm:text-sm px-4">
              Continuous learning and professional development
            </p>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-morphism p-4 sm:p-5 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold mb-1.5">
                        <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {cert.title}
                        </span>
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          {cert.issuer}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3.5 h-3.5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    <a
                      href={cert.certificateLink}
                      className="group relative flex items-center gap-1.5 px-4 py-2 bg-transparent border border-primary rounded-lg font-semibold text-xs overflow-hidden transition-all duration-300 hover:text-black hover:shadow-lg hover:shadow-primary/30 shrink-0"
                    >
                      <svg
                        className="w-3.5 h-3.5 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="relative z-10">View</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                  </div>

                  <div className="space-y-2">
                    {cert.description.map((point, idx) => (
                      <div key={idx} className="flex gap-2">
                        <div className="shrink-0 mt-1.5">
                          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-400"></div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
              <span className="gradient-text">Let's Connect</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-10 leading-relaxed px-4">
              Interested in collaborating on innovative AI projects? Let's
              discuss how we can build impactful AI solutions together.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="mailto:marophossain@example.com"
                className="group relative flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 text-black rounded-xl font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-1 animate-gradient bg-[length:200%_auto]"
              >
                <svg
                  className="w-5 h-5 sm:w-5 sm:h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="relative z-10">Email Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-primary rounded-xl font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-black hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 sm:w-5 sm:h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-primary rounded-xl font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-black hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 sm:w-5 sm:h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  GitHub
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-2xl font-bold">
                  <span className="gradient-text">Md Marop Hossain</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AI Engineer & Machine Learning Specialist
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Building intelligent solutions with cutting-edge AI
                  technologies
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                  Quick Links
                </h4>
                <div className="flex flex-col space-y-3">
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    About Me
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    View Projects
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    Skills
                  </a>
                  <a
                    href="#certifications"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    Certifications
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right space-y-4">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">
                  Connect With Me
                </h4>
                <div className="flex justify-center md:justify-end gap-4">
                  <a
                    href="mailto:marophossain@example.com"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    title="Email Me"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    title="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    title="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-6">
                  Let's collaborate on something amazing!
                </p>
              </div>
            </div>

            {/* Divider with gradient */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[2px] w-64"></div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Md Marop Hossain. All rights
                reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Crafted with</span>
                <svg
                  className="w-4 h-4 text-primary animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-500">and</span>
                <span className="gradient-text font-semibold">
                  React + Vite
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
