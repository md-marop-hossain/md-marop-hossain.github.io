import { useEffect, useRef, useState } from "react";
import profileImage from "../Gemini_Generated_Image_1i77sd1i77sd1i77.png";

/* ---------------- Data ---------------- */

const roles = [
  "AI Software Engineer @ NidusLab",
  "Production LLM Systems",
  "RAG & Agentic Workflows",
  "Microservices · FastAPI · Django",
  "Computer Vision & Applied ML",
];

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "10+", label: "AI Services Shipped" },
  { value: "6+", label: "Recommendation Engines" },
  { value: "<20ms", label: "Hybrid Search Latency" },
  { value: "98.77%", label: "Optic-Disc Accuracy" },
];

const experience = [
  {
    role: "AI Software Engineer",
    company: "NidusLab",
    link: "https://niduslab.com",
    period: "Dec 2025 — Present",
    location: "Gulshan, Dhaka · On-site",
    type: "Full-time",
    projects: [
      {
        name: "NidusJob — AI Job Portal",
        url: "https://nidusjob.com",
        bullets: [
          "Designed and deployed 6+ AI-powered recommendation engines matching job seekers with the right roles and employers with the right candidates.",
          "Built a hybrid AI search engine focused on semantic search, reaching sub-20ms response times through polarity routing.",
          "Developed a two-tier AI scoring system: 100-point ATS scale paired with resume↔job semantic matching to streamline hiring decisions.",
          "Created 10+ specialized AI services with LLMs & NLP — job description generators, cover-letter & resume builders, interview question generators, and a resume parser.",
          "Designed FastAPI microservices for every NidusJob AI service; led backend implementation of core features and vector infrastructure for scalable performance.",
        ],
      },
      {
        name: "Career College — AI-Powered LMS",
        bullets: [
          "Designing and implementing a microservice-based backend architecture for an AI-powered LMS, including core AI features and services currently under active development.",
        ],
      },
    ],
    stack: [
      "Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Celery",
      "LangChain", "LangGraph", "RAG", "Groq", "OpenAI API",
      "Docker", "LiveKit", "FAISS", "BM25", "Sentence-Transformers",
    ],
  },
  {
    role: "AI Software Engineer (Intern)",
    company: "NidusLab",
    link: "https://niduslab.com",
    period: "Sep 2025 — Nov 2025",
    location: "Gulshan, Dhaka · On-site",
    type: "Internship",
    projects: [
      {
        name: "Research & Backend Foundations",
        bullets: [
          "Researched and built RAG-powered agentic chatbots from the ground up using LangChain, LangGraph & OpenAI APIs — hands-on across agent design, LLM integration, and multi-step interaction workflows.",
          "Contributed to backend API development with FastAPI/Django and PostgreSQL, supporting AI model deployment and data-pipeline management in a microservice-based architecture.",
          "Drafted SRS and technical documentation while exploring ML model development with TensorFlow/PyTorch, building end-to-end SDLC skills.",
        ],
      },
    ],
    stack: [
      "Python", "Django", "FastAPI", "PostgreSQL",
      "LangChain", "LangGraph", "RAG", "OpenAI API",
      "TensorFlow", "PyTorch", "Docker", "LiveKit",
    ],
  },
];

const projects = [
  {
    title: "Hybrid Log Classification System",
    tag: "AI · NLP · LLM",
    blurb:
      "Scalable hybrid pipeline combining Regex + DBSCAN pattern discovery, BERT embeddings with logistic regression, and Deepseek-R1 LLM — enabling rapid error detection, security threat identification, and system event monitoring with high accuracy across common and rare log types.",
    stack: ["Python", "BERT", "Deepseek-R1", "Scikit-learn", "Regex", "DBSCAN", "NLP"],
    link: "https://github.com/md-marop-hossain/Hybrid-Log-Classification-System-with-Deepseek-R1-LLM-BERT-NLP-and-Regex",
    size: "lg",
    accent: "frost",
  },
  {
    title: "Multi-Model Agentic AI Chatbot",
    tag: "Agents · LangGraph",
    blurb:
      "Next-gen agent combining OpenAI + Groq models with real-time web search. FastAPI backend, LangGraph agent logic, Streamlit frontend, Uvicorn hosting — robust, extensible, and production-ready.",
    stack: ["FastAPI", "LangGraph", "LangChain", "Streamlit", "OpenAI", "Groq"],
    link: "#",
    size: "md",
    accent: "violet",
  },
  {
    title: "Ocular Disease Diagnosis & Retinal Analysis",
    tag: "Computer Vision · Deep Learning",
    blurb:
      "Vessel segmentation and diameter estimation for diagnosing ischemia, macular degeneration, and cardiovascular disease. Multi-model disease classification with EfficientNetV2S, ResNet50, and DenseNet121.",
    stack: ["PyTorch", "EfficientNetV2S", "ResNet50", "DenseNet121", "OpenCV"],
    link: "https://github.com/md-marop-hossain/Enhancing-Ocular-Disease-Diagnosis-Blood-Vessel-Segmentation-and-Vessel-Diameter-Estimation-CSE499B",
    size: "md",
    accent: "magenta",
  },
  {
    title: "Retinal Feature Segmentation & Optic Disc Localization",
    tag: "Computer Vision · ML",
    blurb:
      "Automated diagnostic system achieving 98.77% accuracy in optic-disc localization and 75.73% in retinal feature classification. Blood-vessel segmentation via morphological operations, Otsu thresholding, and deep learning.",
    stack: ["Python", "OpenCV", "Deep Learning", "Otsu", "Morphology"],
    link: "https://github.com/md-marop-hossain/Segmentation-of-Blood-Vessels-Optic-Disc-Localization-Exudates-Detection-",
    size: "md",
    accent: "frost",
  },
  {
    title: "Software Engineer Salary Prediction",
    tag: "Machine Learning · Web App",
    blurb:
      "ML framework using Decision Trees, Random Forest, Linear Regression, and XGBoost — 76% accuracy on 60,000+ Stack Overflow Developer Survey entries. Deployed as a web app for real-time salary prediction.",
    stack: ["XGBoost", "Random Forest", "Scikit-learn", "Pandas", "Streamlit"],
    link: "https://github.com/md-marop-hossain/Predictive-Modeling-And-Analysis-Of-Software-Engineers-Salary-Using-Machine-Learning",
    size: "md",
    accent: "violet",
  },
  {
    title: "EdTech LLM Q&A Suite",
    tag: "LangChain · Gemini",
    blurb:
      "AI-powered Q&A platform with LangChain + Google Gemini + Streamlit, delivering instant context-aware answers. Centralized CSV knowledge base to reduce repetitive queries and scale support.",
    stack: ["LangChain", "Gemini", "PaLM", "Streamlit", "Python"],
    link: "#",
    size: "md",
    accent: "magenta",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "C++", "Java", "JavaScript", "Bash"],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch", "TensorFlow", "Scikit-learn",
      "HuggingFace", "OpenCV", "Fine-tuning",
      "Prompt Engineering",
    ],
  },
  {
    title: "GenAI & LLMs",
    items: [
      "LangChain", "LangGraph", "RAG",
      "Agentic AI", "GPT", "Claude", "LLaMA", "BERT", "Groq",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "FastAPI", "Django", "PostgreSQL", "Redis",
      "Celery", "Docker", "AWS", "CI/CD", "Git",
    ],
  },
  {
    title: "Data & Vectors",
    items: [
      "FAISS", "Pinecone", "Chroma",
      "Pandas", "NumPy", "Seaborn", "Matplotlib",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Streamlit", "Tailwind CSS"],
  },
];

const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "North South University",
  location: "Dhaka, Bangladesh",
  period: "Jan 2020 — Jun 2024",
  highlights: [
    "Coursework: Machine Learning, Neural Networks, Pattern Recognition, Computer Vision, Software Engineering, Database Management Systems.",
    "Thesis & Research: Applied research on retinal image analysis using deep learning — blood-vessel segmentation, optic-disc localization, exudate detection, and ocular-disease classification with CNN-based and hybrid AI pipelines.",
    "Competitive Programming: actively solved algorithmic problems on Codeforces, LeetCode, and HackerRank.",
    "Participated in university-level hackathons — team-based design and rapid prototyping under time constraints.",
  ],
};

const certifications = [
  {
    title: "Fine-Tuning for LLMs: from Beginner to Advanced",
    issuer: "LinkedIn",
    date: "May 2025",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Apr 2025",
  },
  {
    title: "AI Engineering Essentials: Navigating the Tech Revolution",
    issuer: "LinkedIn",
    date: "Mar 2025",
  },
  {
    title: "Machine Learning",
    issuer: "SkillUp · Simplilearn",
    date: "Aug 2023",
  },
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero · Batch 4",
    date: "2021",
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera · University of Michigan",
    date: "Aug 2020",
  },
];

/* ---------------- Helpers ---------------- */

const accentClass = {
  frost: {
    border: "hover:border-frost/40",
    glow: "group-hover:shadow-[0_0_60px_-10px_rgba(110,231,255,0.35)]",
    text: "text-frost",
    bg: "from-frost/20 via-frost/5 to-transparent",
  },
  violet: {
    border: "hover:border-violet-glow/40",
    glow: "group-hover:shadow-[0_0_60px_-10px_rgba(167,139,250,0.35)]",
    text: "text-violet-glow",
    bg: "from-violet-glow/20 via-violet-glow/5 to-transparent",
  },
  magenta: {
    border: "hover:border-magenta-glow/40",
    glow: "group-hover:shadow-[0_0_60px_-10px_rgba(244,114,182,0.35)]",
    text: "text-magenta-glow",
    bg: "from-magenta-glow/20 via-magenta-glow/5 to-transparent",
  },
};

/* ---------------- Hooks ---------------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- Components ---------------- */

function GlassCard({ children, className = "", interactive = true, ...props }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!interactive || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`glass ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group relative w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/10 hover:border-frost/40 hover:bg-frost/[0.06] transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="text-gray-400 group-hover:text-frost transition-colors">
        {children}
      </span>
    </a>
  );
}

/* ---------------- App ---------------- */

function App() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useReveal();

  /* Typing loop */
  useEffect(() => {
    const current = roles[roleIndex];
    const delay = isDeleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? current.substring(0, typedText.length - 1)
            : current.substring(0, typedText.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typedText, isDeleting, roleIndex]);

  /* Scroll spy + navbar state */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const ids = navItems.map((n) => n.id);
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Global mouse spotlight for hero */
  const spotlightRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.setProperty("--sx", `${e.clientX}px`);
      spotlightRef.current.style.setProperty("--sy", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen text-gray-200">
      {/* Global spotlight cursor effect */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--sx, 50%) var(--sy, 50%), rgba(110,231,255,0.06), transparent 40%)",
        }}
      />

      {/* Gradient mesh layer */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-mesh opacity-70" />

      {/* Floating blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-frost/10 blur-3xl animate-blob-1" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-violet-glow/10 blur-3xl animate-blob-2" />
        <div className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-magenta-glow/10 blur-3xl animate-blob-3" />
      </div>

      {/* ---------- NAV ---------- */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`glass flex items-center justify-between px-4 sm:px-6 h-14 transition-all duration-500 ${
              isScrolled ? "shadow-glow" : ""
            }`}
          >
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <span className="relative w-9 h-9 grid place-items-center rounded-xl bg-gradient-signature shadow-glow overflow-hidden">
                <span className="absolute inset-[2px] rounded-[10px] bg-ink-900 grid place-items-center">
                  <span className="font-display font-semibold text-sm text-gradient">
                    MH
                  </span>
                </span>
              </span>
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="font-display text-sm font-semibold text-white tracking-tight">
                  Md Marop Hossain
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-frost/80 uppercase">
                  AI · Engineer
                </span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      active
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10 shadow-inset-hl" />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.label}
                      {active && (
                        <span className="w-1 h-1 rounded-full bg-frost animate-pulse" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
              >
                Get in touch
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-white/[0.04] border border-white/10"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="glass mt-3 p-3 animate-fade-in lg:hidden">
              <div className="grid grid-cols-2 gap-1">
                {navItems.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                        active
                          ? "bg-white/[0.06] text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section
        id="home"
        className="relative z-10 min-h-[100svh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="eyebrow mb-5">
              Hello<span className="text-frost/50">·</span>World
            </div>
            <h1 className="font-display font-semibold tracking-tight leading-[1] text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] mb-6">
              <span className="block text-white/90">Md Marop</span>
              <span className="block text-gradient">Hossain.</span>
            </h1>
            <div className="h-8 mb-6 font-mono text-sm sm:text-base">
              <span className="text-gray-500">&gt; </span>
              <span className="typing-cursor text-frost">{typedText}</span>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
              AI Software Engineer shipping production{" "}
              <span className="text-white">LLM applications</span>,{" "}
              <span className="text-white">RAG pipelines</span>, and{" "}
              <span className="text-white">agentic AI systems</span> across ed-tech
              and job-tech. I own features end-to-end — from microservice design
              to LangChain / LangGraph deployment — building AI that solves real
              problems at scale.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary"
              >
                View Work
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <a
                href="mailto:marop.hossain21@gmail.com"
                className="btn-ghost"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Say hello
              </a>
            </div>

            {/* Socials row */}
            <div className="flex items-center gap-3">
              <SocialIcon
                href="https://github.com/md-marop-hossain"
                label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/md-marop-hossain/"
                label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon
                href="mailto:marop.hossain21@gmail.com"
                label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </SocialIcon>
              <div className="ml-1 pl-3 border-l border-white/10 hidden sm:flex items-center gap-2 text-xs font-mono text-gray-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for collaboration
              </div>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              {/* Outer orbit */}
              <div className="absolute inset-[-12%] rounded-full">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full animate-spin-slow"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill="none"
                    stroke="url(#orbit-a)"
                    strokeWidth="0.5"
                    strokeDasharray="1 4"
                  />
                  <circle cx="100" cy="2" r="2" fill="#6ee7ff" />
                  <defs>
                    <linearGradient id="orbit-a" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6ee7ff" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Second orbit reversed */}
              <div className="absolute inset-[-4%] rounded-full">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  style={{
                    animation: "spin 32s linear infinite reverse",
                  }}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="97"
                    fill="none"
                    stroke="url(#orbit-b)"
                    strokeWidth="0.6"
                    strokeDasharray="2 6"
                  />
                  <circle cx="100" cy="3" r="1.8" fill="#f472b6" />
                  <defs>
                    <linearGradient id="orbit-b" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f472b6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Glow aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-signature blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />

              {/* Portrait */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-signature">
                <div className="w-full h-full rounded-full p-[3px] bg-ink-900">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Md Marop Hossain"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                    <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rotate-12" />
                  </div>
                </div>
              </div>

              {/* Floating chips around portrait */}
              <div className="absolute -left-8 top-6 chip animate-float-slow hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-frost" />
                FastAPI
              </div>
              <div className="absolute -right-4 top-1/3 chip animate-float hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-glow" />
                LangGraph
              </div>
              <div className="absolute -left-10 bottom-12 chip animate-float-slow hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta-glow" />
                RAG
              </div>
              <div className="absolute -right-6 bottom-4 chip animate-float hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-frost" />
                PyTorch
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs font-mono">
          <span>scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-frost/60 to-transparent" />
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section className="relative z-10 py-8 border-y border-white/5 bg-white/[0.015] mask-fade-x overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) => (
            <div key={pass} className="flex items-center gap-12 shrink-0 pr-12">
              {[
                "Python", "FastAPI", "Django", "LangChain", "LangGraph",
                "RAG", "OpenAI", "Groq", "PostgreSQL", "Redis", "Docker",
                "FAISS", "Sentence-Transformers", "PyTorch", "TensorFlow",
              ].map((t) => (
                <span
                  key={`${pass}-${t}`}
                  className="font-display text-lg md:text-xl text-gray-500 hover:text-frost transition-colors whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <Section id="about" eyebrow="About" title="Crafting AI that ships.">
        <div className="grid lg:grid-cols-12 gap-8">
          <GlassCard className="lg:col-span-7 p-8 reveal">
            <p className="text-lg text-gray-300 leading-relaxed mb-5">
              I'm an AI Software Engineer based in{" "}
              <span className="text-white">Dhaka, Bangladesh</span>, with real-world
              experience building and shipping LLM applications, RAG pipelines,
              and agentic AI systems in production.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              I've worked across ed-tech and job-tech platforms delivering
              semantic search, recommendation engines, adaptive assessments, and
              real-time AI chatbots. My focus is clean, maintainable code and AI
              that solves real problems at scale — from microservice design to
              LangChain / LangGraph deployment.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Outside of work, I explore applied computer vision, competitive
              programming, and hackathon prototyping.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Dhaka, BD", "On-site", "Open to collaboration"].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Stats grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 reveal">
            {stats.map((s) => (
              <GlassCard
                key={s.label}
                className="p-5 flex flex-col justify-between min-h-[130px]"
              >
                <span className="font-display text-3xl md:text-4xl font-semibold text-gradient">
                  {s.value}
                </span>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-2">
                  {s.label}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- EXPERIENCE ---------- */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Shipping production AI, end-to-end."
      >
        <div className="timeline pl-10 md:pl-16 space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="relative reveal">
              <span className="timeline-dot" />
              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-display text-xl sm:text-2xl text-white font-semibold">
                        {job.role}
                      </h3>
                      <span className="chip">{job.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-ul text-frost font-medium"
                      >
                        {job.company} ↗
                      </a>
                      <span className="text-gray-600">·</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gray-500 shrink-0 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <div className="space-y-5 mt-5">
                  {job.projects.map((proj) => (
                    <div key={proj.name}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1 h-4 rounded-full bg-gradient-signature" />
                        {proj.url ? (
                          <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-ul font-display text-base text-white font-medium"
                          >
                            {proj.name} ↗
                          </a>
                        ) : (
                          <h4 className="font-display text-base text-white font-medium">
                            {proj.name}
                          </h4>
                        )}
                      </div>
                      <ul className="space-y-2.5 pl-3">
                        {proj.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="text-sm text-gray-400 leading-relaxed flex gap-3"
                          >
                            <span className="text-frost/70 mt-1.5 shrink-0">
                              ◆
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- PROJECTS ---------- */}
      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected work."
        subtitle="From hybrid log classifiers to retinal-imaging pipelines — a sample of what I've shipped and researched."
      >
        <div className="grid md:grid-cols-6 gap-5 auto-rows-[minmax(260px,auto)]">
          {projects.map((p, i) => {
            const a = accentClass[p.accent] || accentClass.frost;
            const span =
              p.size === "lg"
                ? "md:col-span-4 md:row-span-1"
                : "md:col-span-2";
            return (
              <a
                key={i}
                href={p.link}
                target={p.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`reveal group relative flex flex-col ${span}`}
              >
                <GlassCard
                  className={`h-full p-6 sm:p-7 flex flex-col transition-all duration-500 ${a.border} ${a.glow}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${a.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]`}
                  />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className={`eyebrow ${a.text}`} style={{ color: undefined }}>
                      <span className={a.text}>{p.tag}</span>
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 grid place-items-center transition-all duration-500 group-hover:border-white/25 group-hover:rotate-45`}
                    >
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17l9.2-9.2M17 17V7H7"
                        />
                      </svg>
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight relative z-10">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1 relative z-10">
                    {p.blurb}
                  </p>

                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono text-gray-400 bg-white/[0.03] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </a>
            );
          })}
        </div>
      </Section>

      {/* ---------- SKILLS ---------- */}
      <Section
        id="skills"
        eyebrow="Skills"
        title="The stack I build with."
        subtitle="From Python microservices to vector DBs and multimodal models — every layer of a modern AI product."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <GlassCard key={group.title} className="p-6 reveal">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 rounded-full bg-gradient-signature" />
                <h3 className="font-display text-lg text-white font-semibold">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ---------- EDUCATION ---------- */}
      <Section id="education" eyebrow="Education" title="Foundations.">
        <div className="timeline pl-10 md:pl-16 reveal">
          <div className="relative">
            <span className="timeline-dot" />
            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-white font-semibold">
                    {education.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400 mt-1">
                    <span className="text-frost font-medium">
                      {education.institution}
                    </span>
                    <span className="text-gray-600">·</span>
                    <span>{education.location}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-gray-500 shrink-0">
                  {education.period}
                </span>
              </div>

              <ul className="space-y-2.5 mt-4">
                {education.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-400 leading-relaxed flex gap-3"
                  >
                    <span className="text-frost/70 mt-1.5 shrink-0">◆</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* ---------- CERTIFICATIONS ---------- */}
      <Section
        id="certifications"
        eyebrow="Certifications"
        title="Continuous learning."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <GlassCard key={i} className="p-5 reveal group">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-gradient-signature-soft border border-white/10 grid place-items-center">
                  <svg
                    className="w-5 h-5 text-frost"
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
                </span>
                <span className="font-mono text-[11px] text-gray-500">
                  {c.date}
                </span>
              </div>
              <h4 className="font-display text-base text-white font-medium leading-tight mb-1.5">
                {c.title}
              </h4>
              <p className="text-xs text-gray-500">{c.issuer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ---------- CONTACT ---------- */}
      <Section id="contact" eyebrow="Contact" title="Let's build something.">
        <div className="grid lg:grid-cols-5 gap-6">
          <GlassCard className="lg:col-span-3 p-8 sm:p-10 reveal">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm open to roles, collaborations, and conversations around
              production AI — RAG, agents, recommender systems, and
              microservice-based backends. Drop me a line and I'll get back to
              you quickly.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="mailto:marop.hossain21@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-frost/30 hover:bg-frost/[0.04] transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-gradient-signature-soft grid place-items-center shrink-0">
                  <svg className="w-5 h-5 text-frost" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</div>
                  <div className="text-white font-medium truncate">marop.hossain21@gmail.com</div>
                </div>
                <svg className="w-5 h-5 text-gray-500 group-hover:text-frost transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="tel:+8801630751852"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-glow/30 hover:bg-violet-glow/[0.04] transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-gradient-signature-soft grid place-items-center shrink-0">
                  <svg className="w-5 h-5 text-violet-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Phone</div>
                  <div className="text-white font-medium">+880 1630-751852</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-10 h-10 rounded-lg bg-gradient-signature-soft grid place-items-center shrink-0">
                  <svg className="w-5 h-5 text-magenta-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Location</div>
                  <div className="text-white font-medium">Bashundhara R/A, Dhaka-1229, Bangladesh</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:marop.hossain21@gmail.com"
                className="btn-primary"
              >
                Send a message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/md-marop-hossain/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/md-marop-hossain"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub
              </a>
            </div>
          </GlassCard>

          {/* Side card */}
          <GlassCard className="lg:col-span-2 p-8 reveal flex flex-col justify-between">
            <div>
              <div className="eyebrow mb-4">Currently</div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">
                Building AI at NidusLab.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Designing microservice-based backends and LLM-powered services
                for NidusJob and the Career College LMS — from recommendation
                engines to real-time agentic chatbots.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs text-gray-500 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span>Time (Dhaka)</span>
                <Clock />
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to collaborate
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Response</span>
                <span className="text-frost">&lt; 24h</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* ---------- FOOTER ---------- */}
      <footer className="relative z-10 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative w-8 h-8 grid place-items-center rounded-lg bg-gradient-signature">
                <span className="absolute inset-[2px] rounded-[7px] bg-ink-900 grid place-items-center">
                  <span className="font-display font-semibold text-xs text-gradient">
                    MH
                  </span>
                </span>
              </span>
              <span className="text-sm text-gray-500">
                © {new Date().getFullYear()} Md Marop Hossain — Designed &
                built with care.
              </span>
            </div>
            <div className="text-xs font-mono text-gray-500">
              React · Tailwind · Pure CSS motion
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const bd = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
      );
      const h = bd.getHours().toString().padStart(2, "0");
      const m = bd.getMinutes().toString().padStart(2, "0");
      setT(`${h}:${m}`);
    };
    update();
    const i = setInterval(update, 30000);
    return () => clearInterval(i);
  }, []);
  return <span className="text-frost">{t} GMT+6</span>;
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 reveal max-w-3xl">
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h2 className="section-title text-white">
            {title.split(" ").map((w, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <span className="text-gradient">{w}</span>
                ) : (
                  w + " "
                )}
              </span>
            ))}
          </h2>
          {subtitle && (
            <p className="text-gray-400 mt-4 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export default App;
