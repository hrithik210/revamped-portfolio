import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hrithik's Portfolio",
  description: "Personal portfolio of Hrithik Nayak - Software Engineer specializing in AI development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative overflow-x-hidden`}
      >
        {/* Premium floating background orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
          <div className="floating-orb absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-xl"></div>
          <div className="floating-orb absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-2xl"></div>
          <div className="floating-orb absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
