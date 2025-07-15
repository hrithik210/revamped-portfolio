"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "../data";

export default function ExperienceSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Premium Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 premium-name cursor-default">
              Professional Experience
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Building innovative solutions and leading teams in the modern tech landscape
          </p>
        </motion.div>

        {/* Premium Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 * index,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-white to-gray-300 rounded-full border-4 border-gray-800 shadow-lg hidden md:block"></div>
                
                {/* Experience Card */}
                <div className="md:ml-20">
                  <Card className="premium-card group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white/95 transition-colors">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-gray-300 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          {exp.duration}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="space-y-3">
                        {exp.description.split('||').map((point, index) => (
                          <div key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed text-base md:text-lg">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                            <p className="flex-1">{point.trim()}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Premium bottom accent */}
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
