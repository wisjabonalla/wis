import {
  Smartphone,
  Figma,
} from "lucide-react";

import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiWordpress, 
  SiAdobephotoshop, 
  SiCanva,
  SiVercel,
  SiTailwindcss,
  SiVite,
  SiReact,
  SiAdobepremierepro,
  SiBootstrap,
  SiGithub,
  SiGit,
  SiPhp,
  SiPhotopea
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: SiHtml5, years: "3+ years", level: "Expert", progress: 90 },
      { name: "CSS", icon: SiCss3, years: "3+ years", level: "Expert", progress: 90 },
      { name: "JavaScript", icon: SiJavascript, years: "3+ years", level: "Advanced", progress: 85 },
      { name: "React.js", icon: SiReact, years: "1+ year", level: "Intermediate", progress: 75 },
      { name: "Tailwind CSS", icon: SiTailwindcss, years: "2+ years", level: "Expert", progress: 92 },
      { name: "Bootstrap", icon: SiBootstrap, years: "2+ years", level: "Expert", progress: 92 },
    ],
  },
  {
    title: "Backend, CMS & Tooling",
    skills: [
      { name: "PHP", icon: SiPhp, years: "3+ years", level: "Advanced", progress: 83 },
      { name: "WordPress", icon: SiWordpress, years: "2+ years", level: "Advanced", progress: 87 },
      { name: "Git", icon: SiGit, years: "1+ year", level: "Advanced", progress: 88 },
      { name: "GitHub", icon: SiGithub, years: "1+ year", level: "Advanced", progress: 88 },
      { name: "Vercel", icon: SiVercel, years: "1+ year", level: "Advanced", progress: 80 },
      { name: "Vite", icon: SiVite, years: "1+ year", level: "Intermediate", progress: 75 },
    ],
  },
  {
    title: "Design & Media",
    skills: [
      { name: "Adobe Photoshop", icon: SiAdobephotoshop, years: "10+ years", level: "Expert", progress: 95 },
      { name: "Adobe Premiere Pro", icon: SiAdobepremierepro, years: "5+ years", level: "Advanced", progress: 85 },
      { name: "Canva", icon: SiCanva, years: "5+ years", level: "Expert", progress: 90 },
      { name: "Photopea", icon: SiPhotopea, years: "3+ years", level: "Expert", progress: 95 },
      { name: "Figma", icon: Figma, years: "1+ year", level: "Intermediate", progress: 70 },
      { name: "Responsive Design", icon: Smartphone, years: "3+ years", level: "Expert", progress: 92 },
    ],
  },
];

const levelStyles = {
  Expert: {
    badge: "bg-primary/15 text-primary border-primary/50",
    bar: "bg-primary",
  },
  Advanced: {
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-400/50",
    bar: "bg-emerald-400",
  },
  Intermediate: {
    badge: "bg-highlight/15 text-highlight border-highlight/50",
    bar: "bg-highlight",
  },
};



export const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Skills & Technologies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
            Skills that{" "}
            <span className="font-serif italic font-normal text-white">
              bring ideas to life.
            </span>
          </h2>

          <p className="text-muted-foreground mt-4">
            A blend of web development and visual design, crafted to create
            engaging, functional, and beautiful digital experiences.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="group rounded-2xl glass animated-border border border-transparent hover:border-primary/50 transition-all duration-300 animate-fade-in p-6"
            >
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {group.title}
              </h3>
              <hr className="my-4 glass" />
              <div className="space-y-5 pb-2">
                {group.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    const styles = levelStyles[skill.level];

                    return (
                        <div key={index}>
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg glass-strong text-primary`}>
                                <Icon size={16} />
                            </div>

                            <div className="-space-y-1">
                                <p className="text-sm font-medium text-white">
                                {skill.name}
                                </p>
                                <span className="text-xs text-muted-foreground">
                                {skill.years}
                                </span>
                            </div>
                            </div>

                            <span
                            className={`text-xs px-3 py-1 rounded-full border ${styles.badge}`}
                            >
                            {skill.level}
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                            <div
                            className={`h-full rounded-full transition-all duration-700 ${styles.bar}`}
                            style={{ width: `${skill.progress}%` }}
                            />
                        </div>
                        </div>
                    );
                    })}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
