// import useAuthRedirect from "@/hooks/authVerify";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import Navigation from "@/components/Navigation";
// import Hero3D from "@/components/Hero3D";
// import Footer from "@/components/Footer";
// import Button from "@/components/ui/Button";
// import { ArrowRight } from "lucide-react";
// import FeatureCard from "@/components/FeatureCard";
// import features from "@/data/features";

// export default function Home() {
//   useAuthRedirect();

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const features = [
//     {
//       icon: FolderKanban,
//       title: "Project Management",
//       description:
//         "Organize and track your projects with powerful tools and intuitive workflows.",
//       color: "from-blue-500 to-purple-600",
//     },
//     {
//       icon: Users,
//       title: "Team Management",
//       description:
//         "Collaborate seamlessly with your team members and manage permissions effortlessly.",
//       color: "from-green-500 to-teal-600",
//     },
//     {
//       icon: Database,
//       title: "Database Management",
//       description:
//         "Store, organize, and query your data with our advanced database tools.",
//       color: "from-orange-500 to-red-600",
//     },
//     {
//       icon: Brain,
//       title: "AI Tools",
//       description:
//         "Leverage artificial intelligence to automate tasks and gain insights.",
//       color: "from-purple-500 to-pink-600",
//     },
//     {
//       icon: MessageSquare,
//       title: "Team Chat",
//       description:
//         "Stay connected with real-time messaging and collaboration features.",
//       color: "from-cyan-500 to-blue-600",
//     },
//     {
//       icon: Sparkles,
//       title: "Analytics",
//       description:
//         "Get detailed insights and analytics to make data-driven decisions.",
//       color: "from-indigo-500 to-purple-600",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };

//   const heroVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };

//   const statsVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Animated background */}
//       <motion.div
//         className="fixed inset-0 opacity-30"
//         style={{
//           background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
//         }}
//         animate={{
//           background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
//         }}
//         transition={{ type: "tween", ease: "linear", duration: 0.2 }}
//       />

//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

//         <motion.div
//           className="relative z-10 text-center max-w-6xl mx-auto"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div className="mb-8" variants={heroVariants}>
//             <Hero3D />
//           </motion.div>

//           <motion.h1
//             className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
//             variants={itemVariants}
//           >
//             DataHub
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
//             variants={itemVariants}
//           >
//             The ultimate platform for project management, team collaboration,
//             and data intelligence. Streamline your workflow with AI-powered
//             tools.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             variants={itemVariants}
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
//               >
//                 Watch Demo
//               </Button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 relative">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Everything you need to succeed
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Powerful features designed to help teams collaborate, manage
//               projects, and make data-driven decisions.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05, y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <FeatureCard feature={feature} index={index} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.div
//               className="p-8"
//               variants={statsVariants}
//               whileHover={{ scale: 1.1 }}
//             >
//               <motion.div
//                 className="text-4xl font-bold text-blue-400 mb-2"
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.2,
//                   ease: [0.6, -0.05, 0.01, 0.99],
//                 }}
//                 viewport={{ once: true }}
//               >
//                 10K+
//               </motion.div>
//               <div className="text-gray-400">Active Users</div>
//             </motion.div>
//             <motion.div
//               className="p-8"
//               variants={statsVariants}
//               whileHover={{ scale: 1.1 }}
//             >
//               <motion.div
//                 className="text-4xl font-bold text-purple-400 mb-2"
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.4,
//                   ease: [0.6, -0.05, 0.01, 0.99],
//                 }}
//                 viewport={{ once: true }}
//               >
//                 500+
//               </motion.div>
//               <div className="text-gray-400">Companies</div>
//             </motion.div>
//             <motion.div
//               className="p-8"
//               variants={statsVariants}
//               whileHover={{ scale: 1.1 }}
//             >
//               <motion.div
//                 className="text-4xl font-bold text-pink-400 mb-2"
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.6,
//                   ease: [0.6, -0.05, 0.01, 0.99],
//                 }}
//                 viewport={{ once: true }}
//               >
//                 99.9%
//               </motion.div>
//               <div className="text-gray-400">Uptime</div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }