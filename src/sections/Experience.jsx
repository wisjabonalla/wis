const experiences = [
    {
        period: "Dec 2025 - Present",
        role: "Graphic Designer / Thumbnail Designer",
        company: "Yellow Oak Media Ltd",
        description: "Designed high-CTR YouTube thumbnails using Photoshop and AI tools, delivering fast, high-volume outputs while following trend-based references.",
        technologies: ["Photoshop", "AI Tools", "YouTube"],
        current: true,
    },
    {
        period: "Mar 2025 - Present",
        role: "Virtual Assistant / Social Media Manager",
        company: "Freelance",
        description: "Managed multiple social media accounts, handled scheduling, asset organization, quality checks, and client coordination.",
        technologies: [ "Social Media Tools", "Google Sheets", "Excel"],
        current: true,
    },
    {
        period: "Apr 2025 - Aug 2025",
        role: "Web Developer Intern",
        company: "Macrologic Diversified Technologies Inc.",
        description: "Maintained WordPress sites, built PHP websites, improved UX, responsiveness, SEO, and supported marketing assets.",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "Tailwind CSS", "Javascript", "SEO", "MySQL"],
        current: false,
    },
    {
        period: "Nov 2024 - Feb 2025",
        role: "Information Technology Intern",
        company: "Innovative Thinker Software Solutions Corp.",
        description: "Performed manual QA testing, documented bugs, conducted UX reviews, and assisted in system prototyping.",
        technologies: ["Manual Testing", "PHP", "HTML", "CSS", "Bootstrap", "Javascript", "MySQL",  "AJAX"],
        current: false,
    },
];

export const Experience = () => {
    return (
    <section id="experience" className="py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking wider uppercase animate-fade-in">
                    Career Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Experience that <span className="font-serif italic font-normal text-white"> speaks visually and digitally.</span>
                </h2>

                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A journey of professional growth in IT, web development, and digital design—building practical solutions, crafting engaging user experiences, and delivering creative digital projects across multiple domains.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
            
            {/* Experience Item */}
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} 
                    className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                    style={{animationDelay: `${(idx + 1) * 150}ms`}}
                    >

                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                        </div>

                        {/* Content */}
                        <div className={`pl-8 md:pl-0 ${
                            idx % 2 === 0 
                            ? "md:pr-16 md:text-right"
                            : "md:col-start-2 md:pl-16"}`}
                        >
                            <div className={`glass animated-border p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-sm text-mute-foreground mt-4">{exp.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end": ""}`}>{exp.technologies.map((tech, techIdx) => (
                                    <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300">{tech}</span>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>
    );
};