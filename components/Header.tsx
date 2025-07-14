"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hrithiknayak",
    icon: GitHubLogoIcon,
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/hrithiknayak",
    icon: LinkedInLogoIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hrithiknayak", 
    icon: TwitterLogoIcon,
  },
  {
    name: "Email",
    href: "mailto:hrithik@example.com",
    icon: EnvelopeClosedIcon,
  },
];

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-xl font-mono font-semibold text-foreground">
              Hrithik Nayak
            </h1>
            <p className="text-sm text-muted-foreground">
              Software Engineer / AI Builder
            </p>
          </motion.div>

          {/* Social Media Icons */}
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
                    size="sm"
                    asChild
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 h-8 w-8 p-0"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${social.name}`}
                    >
                      <IconComponent className="w-4 h-4" />
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
