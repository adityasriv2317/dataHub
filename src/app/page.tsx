"use client";

import useAuthRedirect from "@/hooks/authVerify";
import { motion } from "framer-motion";
import { useState, useEffect, use } from "react";
import FeatureCard from "@/components/FeatureCard";
import Hero3D from "@/components/Hero3D";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Check } from "lucide-react";

import { landingPageData } from "@/constants/landing";

import "@/styles/fonts.css";
import Particles from "@/components/Particles";

export default function Home() {
  useAuthRedirect();

  // Fix the 'ease' property in variants to use a valid easing string
  const {
    features,
    containerVariants,
    heroVariants,
    itemVariants: originalItemVariants,
  } = landingPageData;

  // Patch itemVariants if needed
  const itemVariants = {
    ...originalItemVariants,
    visible: {
      ...originalItemVariants.visible,
      transition: {
        ...originalItemVariants.visible.transition,
        // Use a valid easing string instead of an array
        ease: "easeInOut",
      },
    },
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <motion.div
        className="fixed inset-0 opacity-100"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.4), transparent 80%)`,
        }}
        animate={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.4), transparent 80%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      {/* particles */}
      <Particles />

      {/* Hero Section */}
      <section className="relative min-h-screen select-none flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={{ heroVariants }}>
            <Hero3D />
          </motion.div>

          <motion.h1
            className="text-6xl fira-sans-bold md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={{ itemVariants }}
          >
            DataHub
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 text-xl md:text-2xl bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg text-gray-200 mb-8 max-w-3xl mx-auto"
            variants={{ itemVariants }}
          >
            <span className="flex items-center gap-2">
              Project Management <Check color="#1ae000" />
            </span>
            <span className="flex items-center gap-2">
              Team Collaboration <Check color="#1ae000" />
            </span>
            <span className="flex items-center gap-2">
              Smart Databases <Check color="#1ae000" />
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{ itemVariants }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:to-blue-700 hover:from-purple-700 text-white px-8 py-4 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
