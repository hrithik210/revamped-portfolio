import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-18">
        <ProjectsSection />
        
        {/* Tech Stack and Experience Side by Side */}
        <section className="px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <TechStackSection />
              </div>
              <div>
                <ExperienceSection />
              </div>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </div>
      
      
    </div>
  );
}
