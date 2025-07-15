"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function ContactSection() {
  return (
    <section className="py-6 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Interested in collaboration? Let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:hrithikkumar79@outlook.com">
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/hrithik210" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
