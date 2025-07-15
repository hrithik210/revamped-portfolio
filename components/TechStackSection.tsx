"use client";

import { motion } from "framer-motion";
import { skills } from "../data";

export default function TechStackSection() {
  return (
    <div className="py-6">
      <motion.div
        className="mb-4 text-center lg:text-left lg:pl-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
          Tech Stack
        </h2>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center lg:justify-start lg:pl-4 gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="px-3 py-2 text-sm rounded-full bg-card/50 text-foreground border border-border/50 font-mono cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400/30 hover:bg-card/70 hover:backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    );
  }
