"use client";

import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { projects } from "../data";

export default function ProjectsSection() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
            Featured Projects
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-base">
              Scroll through my projects
            </p>
            <motion.div 
              className="hidden md:flex items-center gap-1 text-accent"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-lg text-white ">→</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop: Horizontal scroll */}
        <div className="hidden md:block">
          <div className="horizontal-scroll scroll-snap-x flex gap-6 overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="scroll-snap-center flex-shrink-0 w-72 lg:w-80"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  y: -2, 
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
              >
                <ProjectCard {...project} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="md:hidden space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -2, 
                scale: 1.01,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
