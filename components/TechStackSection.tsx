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
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
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
              className="px-3 py-2 text-sm rounded-full bg-card/50 hover:bg-accent/20 transition-colors text-foreground border border-border/50 hover:border-accent/50 font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    );
  }
