"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "../data";

export default function ExperienceSection() {
  return (
    <div className="py-6">
      <motion.div
        className="mb-6 text-center lg:text-left lg:pl-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
          Experience
        </h2>
      </motion.div>

      <div className="space-y-4 lg:pl-4">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-lg text-foreground">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-accent font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                      {exp.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
