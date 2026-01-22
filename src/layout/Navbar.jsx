import { Button } from "@/components/Button";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 px-4 transition-all z-50">
      <nav
        className={`container mx-auto mt-4 px-6 py-2 flex rounded-full items-center justify-between duration-500 ${
          isScrolled ? "glass max-w-3xl" : "bg-transparent"
        }`}
      >
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary transition-all">
          <span className="flex">
            <ChevronLeft className="text-primary" />
            WIS
            <ChevronRight className="text-primary" />
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-200
                ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button as="a" href="#contact" size="sm">
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass rounded-2xl mt-3 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg transition-all py-2
                  ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {link.label}
              </a>
            ))}

            <Button
              as="a"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
