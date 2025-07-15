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
  title: "Full Stack Developer x AI Agents",
  email: "hrithikkumar79@outlook.com",
  resumeUrl: "https://drive.google.com/file/d/1D_BbUzEN_ODn3o0uQqvV8V99EuZVtMTS/view?usp=sharing",
  resumeFilename: "Hrithik_Nayak_Resume.pdf"
};

// Social links data
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/hrithik210",
    icon: GitHubLogoIcon,
    color: "hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ramanand-nayak-b2a622259/",
    icon: LinkedInLogoIcon,
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    href: "https://x.com/Hrithik_018",
    icon: TwitterLogoIcon,
    color: "hover:text-blue-300"
  },
  {
    name: "Email",
    href: "mailto:hrithikkumar79@outlook.com",
    icon: EnvelopeClosedIcon,
    color: "hover:text-green-400"
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1D_BbUzEN_ODn3o0uQqvV8V99EuZVtMTS/view?usp=sharing",
    icon: FileTextIcon,
    download: "https://drive.google.com/file/d/1D_BbUzEN_ODn3o0uQqvV8V99EuZVtMTS/view?usp=sharing"
  }
];

// Portfolio data
export const skills: string[] = [
    'Golang','JavaScript', 'TypeScript','Python', 'React','Next.js', 'Tailwind', 
    'Node.js', 'Express.js', 'MongoDB','Langchain',  'PostgreSQL', 'Prisma', 'Docker',
    'MySQL', 'Git', 'GitHub' , 'HTML', 'CSS',
    'AWS','REDIS', 'Cloudflare workers'
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Yatra Online Ltd.",
    duration: "feb 2025 - present",
    description: `
      Built a hotel ranking system with ETL, geolocation (PostGIS), and a Flask API serving processed business logic.||
      Built a Hotel's Discount System, cutting API response time by 10x using Flask and MongoDB.||
      Developed a customer facing chatbot using Dialogflow, FastAPI, Redis (caching), and MySQL.
    `
  }
];

export const projects: Project[] = [
  {
    title: "Airnote",
    description: "A real-time messaging app",
    tech: ["Next.js", "TypeScript", "React", "Pusher", "PostgreSQL","Tailwind", "Prisma"],
    github: "https://github.com/hrithik210/messenger",
    demo: "https://airnote-ebon.vercel.app/",
    thumbnail: "/airnote.png"
  },
  {
    title: "Token Launchpad",
    description: "Platform for launching crypto tokens",
    tech: ["Next.js","Typescript", "React","Solana","Tailwind", "Web3.js", ],
    github: "https://github.com/hrithik210/token-launchpad",
    demo: "token-launchpad-nine.vercel.app",
    thumbnail: "/token-launchpad.png"
  },
  {
    title: "Luvana",
    description: "A Web3 dApp that allows users to mint personalized NFTs representing relationships, with on-chain metadata and dynamic SVG generation.",
    tech: ["Next.js", "React", "Tailwind", "Ethers.js", "Solidity","Web3"],
    github: "https://github.com/hrithik210/Luvana",
    demo: "https://luvana.vercel.app",
    thumbnail: "/luvana.png"
  },
  {
    title: "Medium-Blog Platform",
    description: "Platform for publishing and reading blogs",
    tech: ["React", "TypeScript","Tailwind", "Node.js", "PostgreSQL", "Express", "Prisma"],
    github: "https://github.com/hrithik210/medium-blog",
    demo: "https://medium-blog-blush-sigma.vercel.app/",
    thumbnail: "/medium.png"
  },
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
