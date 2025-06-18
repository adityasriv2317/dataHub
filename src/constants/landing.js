import {
  FolderKanban,
  Users,
  Database,
  Brain,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Organize and track your projects with powerful tools and intuitive workflows.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Collaborate seamlessly with your team members and manage permissions effortlessly.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Store, organize, and query your data with our advanced database tools.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Brain,
    title: "AI Tools",
    description:
      "Leverage artificial intelligence to automate tasks and gain insights.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: MessageSquare,
    title: "Team Chat",
    description:
      "Stay connected with real-time messaging and collaboration features.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Analytics",
    description:
      "Get detailed insights and analytics to make data-driven decisions.",
    color: "from-indigo-500 to-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};


export const landingPageData = {
  features,
  containerVariants,
  itemVariants,
  heroVariants,
  statsVariants,
};
