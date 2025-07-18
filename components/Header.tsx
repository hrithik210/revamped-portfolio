"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "../data";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Name and Title - Left Side */}
          <motion.div
            className="luxury-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.005 }}
          >
            <div className="relative">
              <h1 className="premium-name text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1 cursor-default">
                {personalInfo.name}
              </h1>
              
              <p 
                className="premium-title text-sm md:text-base tracking-wide cursor-default"
                data-text={personalInfo.title}
              >
                {personalInfo.title}
              </p>
            </div>
          </motion.div>

          {/* Social Media Icons & Resume - Right Side */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    asChild
                    className="text-foreground hover:text-foreground hover:bg-accent/30 transition-all duration-300 h-10 w-10 p-1 rounded-lg relative group"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${social.name}`}
                      title={social.name}
                      {...(social.download && { download: social.download })}
                    >
                      <IconComponent className="w-7 h-7" />
                      
                      {/* Custom Tooltip */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm border border-border/50 text-foreground text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg z-50">
                        {social.name}
                      </div>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
