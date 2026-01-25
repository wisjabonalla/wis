import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Fullscreen, Globe, Link2, Palette, Target, X } from "lucide-react";
import { SiYoutube } from "react-icons/si";

const categories = [
  { name: "all", icon: Target },
  { name: "websites", icon: Globe },
  { name: "graphics", icon: Palette },
  { name: "thumbnails", icon: SiYoutube },
];


const projects = [
    {
        title: "SAINT Security Agency",
        description: "A security-services provider offering modern protection for people and property. I helped develop their platform in PHP, ensuring a clean, responsive layout that clearly presents their services and security approach.",
        image: "/projects/saint.jpg",
        tags: ["HTML", "CSS", "PHP", "TailwindCSS", "MySQL"],
        link: "https://saint.com.ph/",
        github: "#",
        category: "websites",
    },
    {
        title: "Macrologic Website",
        description: "Maintained Macrologic’s already built website, extended its functionality with new features and pages, and optimized the site for SEO by improving page structure, metadata, and loading performance, improved usability and search engine presence.",
        image: "/projects/macrologic.jpg",
        tags: ["WordPress", "Elementor", "UI/UX", "SEO"],
        link: "https://www.macrologic.com.ph/",
        github: "#",
        category: "websites",
    },
    {
        title: "AirSol (Aircon Solutions)",
        description: "AirSol is our capstone project, an Automated Air-Conditioning Service Management System where I developed the front-end and contributed to the UI/UX design for optimized service scheduling and management.",
        image: "/projects/airsol.jpg",
        tags: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
        link: "https://www.airsol.tech/",
        github: "#",
        category: "websites",
    },
    {
        title: "Into The Future",
        description: "This poster combines a classical bust wearing a VR headset with gritty, dark textures and neon accents. It uses bold, fractured typography to give the Brutalist style a dystopian, futuristic feel.",
        image: "/projects/future.jpg",
        tags: ["Photoshop", "Graphics Design", "Poster"],
        link: "#",
        github: "#",
        category: "graphics",
    },
    {
        title: "Fellowship",
        description: "A high-contrast, heavily stylized poster using a purple and black palette for a fantasy theme (Lord of the Rings). It features distressed text and grainy imagery, giving the lore a powerful, brooding, and graphic edge.",
        image: "/projects/fellowship.jpg",
        tags: ["Photoshop", "Graphics Design", "Poster"],
        link: "#",
        github: "#",
        category: "graphics",
    },
    {
        title: "Boston",
        description: "A grayscale, stark architectural poster centered on the Brutalist Boston City Hall, featuring massive, imposing typography to match the concrete structure's scale and geometry.",
        image: "/projects/boston.jpg",
        tags: ["Photoshop", "Graphics Design", "Poster"],
        link: "#",
        github: "#",
        category: "graphics",
    },
    {
        title: "Cyberpunk",
        description: 'This piece features the word CYBERPUNK in massive, deconstructed, outlined typography. The text is layered with glowing, offset outlines and is surrounded by abstract geometric elements, creating a sense of digital energy, chaos, and a dark, futuristic aesthetic.',
        image: "/projects/cyberpunk.png",
        tags: ["Photoshop", "Graphics Design", "Typography"],
        link: "#",
        github: "#",
        category: "graphics",
    },
    {
        title: "Dubai",
        description: "This ad uses massive, bold, white typography for DUBAI, which is positioned as a mask or transparent window over the scene. The smaller, handwritten script Alma Tower adds a layer of elegant detail, playing against the bold block letters to highlight both the city's scale and a specific architectural feature.",
        image: "/projects/dubai.png",
        tags: ["Photoshop", "Graphics Design", "Typography"],
        link: "#",
        github: "#",
        category: "graphics",
    },
    {
        title: "Zhanjiaje",
        description: "The design employs stark, solid white typography for ZHANJIAJIE, setting it prominently in the middle of a stunning, misty landscape photograph. The clean, heavy geometry of the text provides a strong, graphic counterpoint to the soft, atmospheric, and organic feel of the natural environment.",
        image: "/projects/zhanjiaje.jpg",
        tags: ["Photoshop", "Graphics Design", "Typography"],
        link: "#",
        github: "#",
        category: "graphics",
    },
    {
        title: "Leon S. Kennedy",
        description: "A gritty, split-face thumbnail of Leon S. Kennedy, using a torn-paper effect to contrast two different versions of the iconic character. It displays a direct quote from an official Resident Evil social media tribute to the character's legacy.",
        image: "/projects/leon.png",
        tags: ["Photoshop", "Graphics Design", "Thumbnail"],
        link: "#",
        github: "#",
        category: "thumbnails",
    },
    {
        title: "God of War",
        description: 'This striking thumbnail features a dramatic split-portrait of Kratos, juxtaposing his bearded, seasoned Norse era persona on the left against his vengeful, younger Greek form on the right. A burnt vertical tear separates the two versions, effectively highlighting the character’s profound evolution.',
        image: "/projects/kratos.png",
        tags: ["Photoshop", "Graphics Design", "Thumbnail"],
        link: "#",
        github: "#",
        category: "thumbnails",
    },
    {
        title: "The Batman",
        description: 'This gritty thumbnail features Robert Pattinson’s Batman obscured by "torn paper" layers that reveal glimpses of hidden evidence and psychological complexity. The bold, distressed text "THE REAL YOU" dominates the center, perfectly capturing the dark, investigative tone of the film and questioning the hero’s true identity.',
        image: "/projects/batman.png",
        tags: ["Photoshop", "Graphics Design", "Thumbnail"],
        link: "#",
        github: "#",
        category: "thumbnails",
    },
    {
        title: "The Notorious",
        description: 'This thumbnail features Conor McGregor in his iconic pose. The design uses an Irish flag color scheme across the "THE NOTORIOUS" text and Conor himself, while the "MYSTIC MAC" title at the bottom highlights his legendary persona. It creates a patriotic and high-energy aesthetic that celebrates the superstar’s fighting legacy.',
        image: "/projects/conor.png",
        tags: ["Photoshop", "Graphics Design", "Thumbnail"],
        link: "#",
        github: "#",
        category: "thumbnails",
    },
    {
        title: "The Matrix",
        description: 'This powerful boxing thumbnail features an ecstatic Vasyl Lomachenko, known as "THE MATRIX," holding a championship belt over his head in a moment of victory. The image is dramatically framed by the massive white numbers "396-1," which prominently displays his incredible amateur boxing record.',
        image: "/projects/vasyl.png",
        tags: ["Photoshop", "Graphics Design", "Thumbnail"],
        link: "#",
        github: "#",
        category: "thumbnails",
    },
    {
        title: "Stephen Curry",
        description: 'A Stephen Curry thumbnail overlaid with a golden quote. The image captures a moment where Curry points to his ring finger during the 2022 NBA Finals, linking his confidence to a championship ring. This visual triumph is a powerful payoff to the quoted statement, which he famously delivered after they were eliminated in the 2021 Play-In Tournament.',
        image: "/projects/curry.png",
        tags: ["Photoshop", "Graphics Design", "Thumbnail"],
        link: "#",
        github: "#",
        category: "thumbnails",
    },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(p => p.category === activeCategory);

  // Responsive items per view
  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 768) return 2;  // tablet
    return 1; // mobile
  };

const itemsPerView = getItemsPerView();
const maxIndex = Math.max(0, filteredProjects.length - itemsPerView);
const totalSlides = Math.ceil(filteredProjects.length / itemsPerView);

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
        <section id="projects" className="py-28 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl text-primary font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Projects that <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A collection of my latest projects, highlighting clean design, intuitive interfaces, and creative work.
                    </p>
                </div>

                <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
                {categories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setActiveCategory(cat.name);
                        setCurrentIndex(0);
                      }}
                      className={`text-sm px-3 py-2 md:text-base md:px-6 md:py-2 glass rounded-full border transition-all capitalize cursor-pointer 
                        ${activeCategory === cat.name
                            ? "bg-primary text-primary-foreground border-primary"
                            : "text-muted-foreground animated-border border border-transparent hover:border-primary/50 hover:text-primary transition-all duration-300"
                        }`}
                    >
                      <div className="flex items-center gap-1 md:gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{cat.name}</span>
                      </div>
                    </button>
                  )
                })}
              </div>

        {/* Carousel container */}
        <div className="relative">

          {/* Navigation */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass animated-border border border-transparent hover:border-primary/50 disabled:opacity-0 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass animated-border border border-transparent hover:border-primary/50 disabled:opacity-0 transition-all duration-300 cursor-pointer"
          >
            <ArrowRight />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">

        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="group glass rounded-2xl overflow-hidden animated-border border border-transparent hover:border-primary/50 transition-all duration-300 animate-fade-in h-full">

                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 no-save"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onTouchStart={(e) => e.preventDefault()}
                  />

                  {/* Gradient overlay (NON-BLOCKING) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none" />

                  {/* Overlay link */}
                  <div className="absolute inset-0 flex items-end justify-end m-4 transition-opacity duration-300 pointer-events-none">
                    <button
                      onClick={() => {
                        if (project.category === "graphics" || project.category === "thumbnails") {
                          setSelectedProject(project);
                        } else {
                          window.open(project.link, "_blank");
                        }
                      }}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer pointer-events-auto"
                    >
                      {project.category === "graphics" || project.category === "thumbnails" ? (
                        <Fullscreen className="w-5 h-5" />
                      ) : (
                        <Link2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <p className="text-muted-foreground text-sm group-hover:text-white/70 duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        </div>

        {/* Nav Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const slideIndex = index * itemsPerView;
            const isActive = currentIndex === slideIndex;

            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`
                  h-2 rounded-full transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/40 hover:bg-primary/50"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        </div>

        </div>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onContextMenu={(e) => e.preventDefault()}>
              {/* Close on backdrop */}
              <div
                className="absolute inset-0"
                onClick={() => setSelectedProject(null)}
              />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-white text-sm opacity-70 hover:opacity-100 duration-300 cursor-pointer"
                >
                  <X/>
                </button>
              {/* Modal content */}
              <div className="relative max-w-6xl w-full px-6" onContextMenu={(e) => e.preventDefault()}>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl no-save"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onTouchStart={(e) => e.preventDefault()}
                />
              </div>
            </div>
          )}

        </section>
        
    );
};