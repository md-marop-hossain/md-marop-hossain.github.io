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
      {/* AI Neural Network Grid Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating AI nodes */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line
            x1="10%"
            y1="20%"
            x2="90%"
            y2="40%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="10"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="25%"
            y1="70%"
            x2="75%"
            y2="30%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="10"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Professional AI Engineer Animated Backgrounds */}
      
      {/* AI Neural Network Overlay */}
      <div className="ai-neural-overlay"></div>
      
      {/* AI Geometric Background */}
      <div className="ai-geometric-bg"></div>
      
      {/* Neural Network Nodes */}
      <div className="neural-nodes">
        <div className="neural-node"></div>
        <div className="neural-node"></div>
        <div className="neural-node"></div>
        <div className="neural-node"></div>
        <div className="neural-node"></div>
      </div>
      
      {/* Floating Code Particles */}
      <div className="code-particles">
        <div className="code-particle">import tensorflow as tf</div>
        <div className="code-particle">model = Sequential()</div>
        <div className="code-particle">from sklearn.neural_network</div>
        <div className="code-particle">def predict(X): return model.predict(X)</div>
        <div className="code-particle">import numpy as np</div>
        <div className="code-particle">class NeuralNetwork:</div>
        <div className="code-particle">optimizer='adam', loss='mse'</div>
        <div className="code-particle">X_train, y_train = dataset.load()</div>
        <div className="code-particle">from transformers import AutoModel</div>
        <div className="code-particle">pipeline = Pipeline(steps=[])</div>
      </div>
      
      {/* AI Data Streams */}
      <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
        {/* Vertical data streams */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '5.5s' }}></div>
        <div className="absolute top-0 left-5/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.8s' }}></div>
        
        {/* Horizontal data streams */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '6.5s' }}></div>
      </div>
      
      {/* AI Processing Indicators */}
      <div className="fixed top-20 right-8 pointer-events-none z-2">
        <div className="flex flex-col space-y-2 opacity-30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-green-400">AI_ACTIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-xs font-mono text-blue-400">NEURAL_NET</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="text-xs font-mono text-cyan-400">ML_ENGINE</span>
          </div>
        </div>
      </div>

      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 bg-gradient-mesh pointer-events-none"></div>

      <div className="bg-black relative z-10">
        {/* Fixed Navbar */}
        <nav
          className="fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 bg-black/50 border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div
                className="flex items-center group cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <div className="relative group">
                  {/* Neural Network Connection Lines - Hidden on mobile */}
                  <div className="absolute -inset-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 hidden md:block">
                    <svg className="w-full h-full" viewBox="0 0 80 30">
                      <line x1="5" y1="15" x2="75" y2="15" stroke="url(#navGradient)" strokeWidth="1" strokeDasharray="2,2" opacity="0.6">
                        <animate attributeName="stroke-dashoffset" from="0" to="4" dur="2s" repeatCount="indefinite" />
                      </line>
                      <circle cx="10" cy="15" r="1" fill="#00D9FF" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="70" cy="15" r="1" fill="#06B6D4" opacity="0.8">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
                      </circle>
                      <defs>
                        <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D9FF" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
                    {/* AI Hexagonal Logo - Responsive */}
                    <div className="relative">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
                        {/* Hexagonal Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-md sm:rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                        <div className="absolute inset-0.5 sm:inset-1 bg-black rounded-md sm:rounded-lg transform rotate-45"></div>
                        {/* Initials */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-primary font-bold text-xs sm:text-sm tracking-wider font-mono group-hover:scale-110 transition-transform duration-300">MH</span>
                        </div>
                        {/* Pulsing Ring */}
                        <div className="absolute inset-0 border border-primary/30 sm:border-2 rounded-md sm:rounded-lg animate-pulse group-hover:border-primary/60 transition-colors duration-300"></div>
                      </div>
                      {/* Neural Nodes - Hidden on mobile */}
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse hidden sm:block"></div>
                      <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse hidden sm:block"></div>
                    </div>
                    
                    {/* Name and Title - Responsive */}
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <span className="text-sm sm:text-lg md:text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300 tracking-wide truncate">
                          Md Marop Hossain
                        </span>
                        {/* AI Status Indicator - Simplified on mobile */}
                        <div className="flex items-center space-x-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400 font-mono hidden sm:inline">ONLINE</span>
                        </div>
                      </div>
                      {/* AI Engineer Designation - Responsive */}
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-xs sm:text-xs text-primary font-mono tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            AI.ENG
                          </span>
                        </div>
                        {/* Data Flow Indicator - Simplified on mobile */}
                        <div className="flex space-x-0.5 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                          <div className="w-0.5 h-1 sm:h-2 bg-primary/60 animate-pulse" style={{ animationDelay: '0s' }}></div>
                          <div className="w-0.5 h-1.5 sm:h-3 bg-cyan-400/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-0.5 h-1 sm:h-2.5 bg-blue-500/60 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="relative group cursor-pointer">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full">
                  <svg
                    className="w-full h-full animate-spin-slow"
                    style={{ animationDuration: "20s" }}
                    viewBox="0 0 200 200"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="url(#gradient-ring)"
                      strokeWidth="2"
                      strokeDasharray="10,5"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient
                        id="gradient-ring"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00D9FF" />
                        <stop offset="50%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating particles around image */}
                <div
                  className="absolute -top-2 -left-2 w-3 h-3 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "4s" }}
                ></div>
                <div
                  className="absolute -top-4 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
                ></div>
                <div
                  className="absolute top-8 -right-3 w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "5s" }}
                ></div>
                <div
                  className="absolute bottom-8 -left-4 w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "1.5s", animationDuration: "4.2s" }}
                ></div>
                <div
                  className="absolute -bottom-3 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: "2s", animationDuration: "4.8s" }}
                ></div>

                {/* Hexagonal container */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 transition-transform duration-500 group-hover:scale-105">
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow"></div>

                  {/* Hexagonal border effect */}
                  <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-primary via-cyan-400 to-blue-500 animate-gradient bg-[length:200%_auto]">
                    <div className="w-full h-full rounded-full bg-black/80 p-[2px]">
                      {/* Inner glowing border */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-transparent to-blue-500/30 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                          <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent elements */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* AI Badge indicator */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  AI Engineer
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 px-4 tracking-tight relative">
              {/* AI Processing Indicator - Mobile Responsive */}
              <div className="absolute -top-3 sm:-top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-primary opacity-60">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-mono text-xs sm:text-sm">AI_SYSTEM_ONLINE</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Neural Network Visualization */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col space-y-1 opacity-30">
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-transparent rounded-full animate-pulse"></div>
                  <div className="w-6 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
              
              {/* Data Flow Visualization */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col space-y-1 opacity-30">
                  <div className="w-8 h-1 bg-gradient-to-l from-primary to-transparent rounded-full animate-pulse"></div>
                  <div className="w-6 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-10 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
              
              Hi, I'm{" "}
              <span className="gradient-text font-display relative">
                Md Marop Hossain
                {/* AI Recognition Badge */}
                <div className="absolute -top-6 -right-4 text-xs">
                  <div className="bg-primary/20 border border-primary/50 rounded-full px-2 py-1 text-primary font-mono opacity-60 animate-pulse">
                    ID_VERIFIED
                  </div>
                </div>
              </span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 h-14 sm:h-16 flex items-center justify-center px-4 relative">
              {/* AI Processing Bars */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-1 opacity-40">
                <div className="w-16 h-0.5 bg-primary rounded-full animate-pulse"></div>
                <div className="w-12 h-0.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-20 h-0.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-8 h-0.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
              
              {/* Central Typing Text */}
              <span className="typing-cursor font-mono bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold tracking-wide relative">
                {typedText}
                {/* AI Thinking Indicator */}
                <div className="absolute -right-8 top-0 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </span>
              
              {/* AI Processing Bars Right */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-1 opacity-40">
                <div className="w-14 h-0.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-18 h-0.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-10 h-0.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-16 h-0.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed px-4 font-light">
              As an AI Engineer (Intern) at NidusLab-USA, I contribute to the
              development of advanced AI systems, focusing on building scalable
              microservices, AI-powered recommendation engines, and NLP-driven
              tools for job portals. Passionate about leveraging AI to drive
              impactful solutions that optimize user experiences and streamline
              complex workflows.
            </p>

            {/* AI System Status Panel */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="glass-morphism rounded-lg p-4 max-w-lg mx-4 border border-primary/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center mb-2 animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono text-green-400">MODELS</span>
                    <span className="text-xs font-mono text-gray-400">ACTIVE</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono text-primary">NEURAL</span>
                    <span className="text-xs font-mono text-gray-400">READY</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center mb-2 animate-pulse" style={{ animationDelay: '0.4s' }}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono text-blue-400">API</span>
                    <span className="text-xs font-mono text-gray-400">ONLINE</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>AI_ENGINEER_PORTFOLIO_v2.1.0</span>
                  </div>
                </div>
              </div>
            </div>

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
                <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-3">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base px-4">
              Notable AI and ML projects
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
          className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                <span className="gradient-text">Technical Skills</span>
              </h2>
              <p className="text-gray-400 text-sm px-4 mb-4">
                Expertise across AI, ML, and software development
              </p>
              
              {/* Skill count badges */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:border-primary/50 transition-all duration-300">
                      {skillList.length} {category.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {Object.entries(skills).map(([category, skillList], index) => {
                const gradients = [
                  "from-primary/20 to-primary/5",
                  "from-cyan-400/20 to-cyan-400/5",
                  "from-blue-500/20 to-blue-500/5",
                  "from-purple-500/20 to-purple-500/5",
                  "from-pink-500/20 to-pink-500/5",
                  "from-indigo-500/20 to-indigo-500/5",
                ];
                const iconColors = [
                  "text-primary",
                  "text-cyan-400",
                  "text-blue-500",
                  "text-purple-500",
                  "text-pink-500",
                  "text-indigo-500",
                ];
                
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                    
                    {/* Card */}
                    <div className="relative glass-morphism p-4 sm:p-5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                      {/* Header with icon */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <svg className={`w-4 h-4 ${iconColors[index % iconColors.length]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                            {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                            {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                            {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                            {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
                            {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />}
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-bold bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:via-primary group-hover:to-blue-500 transition-all duration-300">
                            {category}
                          </h3>
                          <p className="text-xs text-gray-500">{skillList.length} technologies</p>
                        </div>
                        
                        {/* Expand indicator */}
                        <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>

                      {/* Skills grid */}
                      <div className="flex flex-wrap gap-1.5">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="group/skill relative px-2.5 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-primary/10 hover:border-primary/50 hover:text-white hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                          >
                            {/* Shimmer effect on hover */}
                            <div className="absolute inset-0 rounded-lg overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700"></div>
                            </div>
                            <span className="relative z-10">{skill.name}</span>
                          </span>
                        ))}
                      </div>

                      {/* Bottom accent line */}
                      <div className={`mt-3 h-0.5 bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
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
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">
                  Certifications & Achievements
                </span>
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-primary opacity-80">VERIFIED_CREDENTIALS</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              <p className="text-center text-gray-400 text-sm sm:text-base px-4 max-w-2xl mx-auto">
                Professional certifications and achievements validating expertise in AI, machine learning, and software engineering
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Certificate Card */}
                  <div className="relative glass-morphism-strong rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    
                    {/* Badge Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary to-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Achievement Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-xl flex items-center justify-center border border-primary/30">
                          <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1">
                            <span className="gradient-text">
                              {cert.title}
                            </span>
                          </h3>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-primary font-medium">{cert.issuer}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verification Status */}
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center space-x-1 px-2 py-1 bg-green-400/10 border border-green-400/20 rounded-md">
                        <div className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-green-400 text-xs font-medium">Verified Credential</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-6">
                      {cert.description.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-cyan-400 mt-2 shrink-0"></div>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* View Certificate Button */}
                    <a
                      href={cert.certificateLink}
                      className="group/btn relative flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/30 rounded-xl font-semibold text-sm text-primary overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <svg
                        className="w-4 h-4 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300"
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
                      <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">View Certificate</span>
                      <svg
                        className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 left-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute -bottom-1 right-1/4 w-3 h-3 bg-cyan-400/30 rounded-full blur-sm animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl flex items-center justify-center border border-primary/30">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold gradient-text">{certifications.length}+</h4>
                <p className="text-sm text-gray-400">Certifications</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center border border-green-400/30">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-green-400">100%</h4>
                <p className="text-sm text-gray-400">Verified</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl flex items-center justify-center border border-blue-400/30">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-blue-400">AI/ML</h4>
                <p className="text-sm text-gray-400">Focus Area</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-purple-400">2024</h4>
                <p className="text-sm text-gray-400">Latest</p>
              </div>
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
                <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
