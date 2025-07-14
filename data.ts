import { 
  GitHubLogoIcon, 
  LinkedInLogoIcon, 
  TwitterLogoIcon, 
  EnvelopeClosedIcon, 
  FileTextIcon 
} from "@radix-ui/react-icons";

// Portfolio data types
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  thumbnail: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: any; // React component type
  color?: string;
  download?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  resumeUrl: string;
  resumeFilename: string;
}

// Personal information
export const personalInfo: PersonalInfo = {
  name: "Hrithik Nayak",
  title: "Software Engineer / AI Builder",
  email: "hrithik@example.com",
  resumeUrl: "/resume.pdf",
  resumeFilename: "Hrithik_Nayak_Resume.pdf"
};

// Social links data
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/hrithiknayak",
    icon: GitHubLogoIcon,
    color: "hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hrithiknayak",
    icon: LinkedInLogoIcon,
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hrithiknayak",
    icon: TwitterLogoIcon,
    color: "hover:text-blue-300"
  },
  {
    name: "Email",
    href: "mailto:hrithik@example.com",
    icon: EnvelopeClosedIcon,
    color: "hover:text-green-400"
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileTextIcon,
    download: "Hrithik_Nayak_Resume.pdf"
  }
];

// Portfolio data
export const skills: string[] = [
  "React",
  "Next.js", 
  "TypeScript",
  "Go",
  "Python",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "LangChain",
  "Dialogflow",
  "Docker",
  "AWS"
];

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "2023 - Present",
    description: "Led development of AI-powered chat platform serving 10k+ users daily"
  }
];

export const projects: Project[] = [
  {
    title: "AI Chat Platform",
    description: "Real-time chat with AI models using WebSocket and LangChain",
    tech: ["Next.js", "TypeScript", "LangChain", "WebSocket", "PostgreSQL"],
    github: "https://github.com/hrithiknayak",
    demo: "https://demo.example.com",
    thumbnail: "/project1.jpg"
  },
  {
    title: "E-commerce Dashboard",
    description: "Analytics dashboard with real-time metrics and inventory management",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Stripe"],
    github: "https://github.com/hrithiknayak",
    demo: "https://demo.example.com",
    thumbnail: "/project2.jpg"
  },
  {
    title: "Voice Assistant Bot",
    description: "Dialogflow-powered voice assistant with custom integrations",
    tech: ["Python", "Dialogflow", "Google Cloud", "FastAPI", "React"],
    github: "https://github.com/hrithiknayak",
    demo: "https://demo.example.com",
    thumbnail: "/project3.jpg"
  },
  {
    title: "Blockchain Tracker",
    description: "Real-time cryptocurrency portfolio tracker with price alerts",
    tech: ["Go", "React", "WebSocket", "Redis", "PostgreSQL"],
    github: "https://github.com/hrithiknayak",
    demo: "https://demo.example.com",
    thumbnail: "/project4.jpg"
  }
];

// Default export for convenience
const data = {
  personalInfo,
  socialLinks,
  skills,
  experience,
  projects
};

export default data;
