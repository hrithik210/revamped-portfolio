"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  thumbnail: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  github, 
  demo, 
  thumbnail, 
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ 
        y: -1,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 hover:bg-card/60 transition-all duration-500 overflow-hidden min-h-[360px] p-0 rounded-none">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        </div>
        
        <CardHeader className="pb-2 pt-3 px-3">
          <CardTitle className="text-lg text-foreground mb-1">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3 px-3 pb-3">
          <div className="flex flex-wrap gap-1">
            {tech.slice(0, 3).map((techItem) => (
              <span
                key={techItem}
                className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent-foreground font-mono"
              >
                {techItem}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground font-mono">
                +{tech.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1 text-xs">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="w-3 h-3 mr-1" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild className="flex-1 text-xs">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="w-3 h-3 mr-1" />
                Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
