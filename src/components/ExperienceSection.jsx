import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // vitual
 
  { name: "Tailwind CSS",  category: "frontend" },
  {name:"Bharat intern",}
 

  // on-site
  


];

const categories = ["all","virtual", "on-site"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experiences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-3">
                <h3 className="font-bold text-lg"> {skill.name}</h3>
              </div>
             

    
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};