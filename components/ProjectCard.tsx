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
      <Card className="h-full premium-card group transition-all duration-500 overflow-hidden min-h-[360px] p-0 rounded-xl shadow-2xl border border-white/10 hover:border-white/20">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/10 transition-all duration-500" />
          
          {/* Premium hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <CardHeader className="pb-2 pt-3 px-3">
          <CardTitle className="text-lg text-white mb-1 group-hover:text-white/95 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3 px-3 pb-3">
          <div className="flex flex-wrap gap-1">
            {tech.slice(0, 3).map((techItem) => (
              <span
                key={techItem}
                className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/90 font-mono border border-white/10 group-hover:bg-white/15 group-hover:text-white transition-all duration-300"
              >
                {techItem}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 font-mono border border-gray-600/50">
                +{tech.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild className="flex-1 text-xs border-white/20 text-white/90 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="w-3 h-3 mr-1" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild className="flex-1 text-xs bg-white/90 text-black hover:bg-white hover:text-black transition-all duration-300">
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
