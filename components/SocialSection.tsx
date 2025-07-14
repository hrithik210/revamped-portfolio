"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hrithiknayak",
    icon: GitHubLogoIcon,
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hrithiknayak",
    icon: LinkedInLogoIcon,
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hrithiknayak",
    icon: TwitterLogoIcon,
    color: "hover:text-blue-300",
  },
  {
    name: "Email",
    href: "mailto:hrithik@example.com",
    icon: EnvelopeClosedIcon,
    color: "hover:text-green-400",
  },
];

export default function SocialSection() {
  return (
    <section className="py-6 px-6 border-b border-border/20">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3 
            className="text-lg font-semibold text-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's Connect
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground text-sm mb-4 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Follow my journey and connect with me on social platforms
          </motion.p>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className={`text-muted-foreground transition-colors duration-300 ${social.color}`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${social.name}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
