import { Code2, Users, SquareArrowOutUpRight, Eye, X, Palette } from "lucide-react";
import { useState } from "react";
import { BiMobile } from "react-icons/bi";

const certifications = [
  {
    title: "IT Specialist - Cybersecurity",
    org: "Certiport",
    date: "June 2025",
    logo: "/cybersecurity.png",
    image: "/cybersecurity_cert.jpg",
    verifyLink: "https://www.credly.com/badges/976d6d36-1d20-4fc4-b66e-b5ad475b9f19",
  },
  {
    title: "PMI Project Management Ready™",
    org: "Certiport",
    date: "March 2025",
    image: "/pmi_cert.jpg",
    logo: "/pmi.png",
    verifyLink: "https://www.credly.com/badges/fd3d7d8f-2ad5-4f6b-aa91-c5aa48112546",
  },
  {
    title: "IT Specialist - HTML & CSS",
    org: "Certiport",
    date: "June 2024",
    image: "/html-css_cert.jpg",
    logo: "/html_css.png",
    verifyLink: "https://www.credly.com/badges/fbbb28b7-4209-406c-9601-e408306adf67",
  },
];


const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building scalable and efficient web applications using frameworks like React and Tailwind CSS.",
  },
  {
    icon: Palette,
    title: "Graphic & UI Design",
    description:
      "Applying graphic design and UX principles to craft visually engaging, intuitive, and on-brand interfaces.",
  },
  {
    icon: BiMobile,
    title: "Responsive Design",
    description:
      "Creating fully responsive websites with smooth animations, optimized assets, and best coding practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients and teams to turn ideas into polished, user-friendly digital experiences.",
  },
];

export const About = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    return (
    <section id="about" className="py-28 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    A designer’s eye,
                    <span className="font-serif italic font-normal text-white"> a developer’s mind.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>I'm a graduate with a <span className="italic text-primary/90"> Bachelor's degree in Information Technology </span> with expertise in web development and graphic design. My background allows me to blend technical understanding with creative execution, creating graphics and user-friendly interfaces that are both functional and visually compelling.</p>
                        <p>I'm a quick learner and someone who adapts easily to new tools, workflows, and challenges. Whether it's learning a new framework or refining a design approach, I enjoy improving my skills and finding better ways to solve problems.</p>
                        <p> I enjoy the process of shaping ideas, choosing visuals, and crafting experiences that feel thoughtful and engaging. Every project is an opportunity to express creativity while building something functional and meaningful.</p>
                    </div>

                    {/* <div className="glass rounded-2xl p-6 glow-border animated-border border border-transparent hover:border-primary/50 transition-all duration-500 animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt sequi, molestiae beatae illum tempore corrupti cum fuga, quia facilis id tenetur. Totam sed est et tempore sapiente ab exercitationem?</p>
                    </div> */}
                </div>

                {/* Right Column - Highlights + Certifications */}
                <div className="grid sm:grid-cols-2 gap-6">
                {/* Highlights */}
                {highlights.map((item, idx) => (
                    <div
                    key={idx}
                    className="glass p-6 rounded-2xl animated-border border border-transparent hover:border-primary/50 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 duration-500">
                        <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
                </div>

            </div>

            {/* Certifications Section */}
            <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {certifications.map((cert, idx) => (
                <div
                    key={idx}
                    className="glass flex flex-1 items-center p-6 rounded-2xl animated-border border border-transparent hover:border-primary/50 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                    {/* Logo */}
                    <img
                    src={cert.logo}
                    alt={`${cert.title} logo`}
                    className="w-20 h-20 object-contain rounded-lg"
                    />

                    {/* Info + Buttons */}
                    <div className="ml-4 flex flex-col flex-1 justify-between">
                    {/* Top Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">
                        {cert.org} • {cert.date}
                        </p>
                    </div>

                    {/* Buttons at the bottom */}
                    <div className="flex justify-end gap-3 mt-2">
                        <button
                        onClick={() => setSelectedCert(cert)}
                        className="text-center cursor-pointer flex gap-1 items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                        >
                        <Eye className="w-4 h-4"/> View
                        </button>

                        <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center flex gap-1 items-center px-4 py-2 text-primary rounded-lg bg-primary/10 hover:bg-primary/20 duration-500 text-sm font-medium"
                        >
                        <SquareArrowOutUpRight className="w-4 h-4"/> Verify
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        

        {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onContextMenu={(e) => e.preventDefault()}>
            {/* Close on backdrop */}
            <div
                className="absolute inset-0"
                onClick={() => setSelectedCert(null)}
            />
                <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-white text-sm opacity-70 hover:opacity-100 duration-300 cursor-pointer"
                >
                <X/>
                </button>
            {/* Modal content */}
            <div className="relative max-w-6xl w-full px-6" onContextMenu={(e) => e.preventDefault()}>
                

                <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                />
            </div>
            </div>
        )}
    </section>
    );
};
