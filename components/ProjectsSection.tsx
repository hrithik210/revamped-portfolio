"use client";

import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <section className="py-4 px-6 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/10 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Compact Premium Section Header */}
        <motion.div
          className="mb-12 mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 premium-name cursor-default">
              Featured Projects
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
          </div>
          
        
        
        </motion.div>

        {/* Premium Projects Grid */}
        <div className="space-y-12">
          {/* Desktop: Premium horizontal scroll */}
          <div className="hidden lg:block relative">
            <div className="premium-scroll-container flex gap-6 overflow-x-auto pb-8 px-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0"
                  style={{ width: '380px', height: '420px', perspective: 1000 }}
                  initial={{ opacity: 1, x: 0, rotateY: 0 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    rotateY: -2,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30,
                      duration: 0.3
                    }
                  }}
                >
                  <ProjectCard {...project} index={index} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet: Two column grid */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: Single column */}
          <div className="md:hidden space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
