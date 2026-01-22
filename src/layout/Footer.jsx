import { BiSolidPhone } from "react-icons/bi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiGmail,
  SiLinkedin,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-primary/4 via-primary/2 to-background">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="mx-auto max-w-6xl px-12 pt-8 pb-12">
                {/* Top Row */}
                <div className="flex flex-col justify-between gap-8 md:flex-row">
                {/* Social Icons */}
                <div>
                    <div className="-ml-2">
                        <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary transition-all">
                            <span className="flex">
                                <ChevronLeft className="text-primary w-7 h-7" />
                                WIS
                                <ChevronRight className="text-primary w-7 h-7" />
                            </span>
                        </a>
                    </div>
                    <div>
                        <p className="text-muted-foreground pt-2 pb-4">Designing and building engaging digital products.</p>
                    </div>
                    <div className="flex gap-6">
                        <a
                        href="mailto:wisjabonalla@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition duration-500 hover:text-primary hover:glow-text"
                        >
                        <SiGmail size={30} />
                        </a>

                        <a
                        href="tel:+639196475555"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition duration-500 hover:text-primary hover:glow-text"
                        >
                        <BiSolidPhone size={30} />
                        </a>

                        <a
                        href="https://www.linkedin.com/in/luis-jabonalla-730826392/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition duration-500 hover:text-primary hover:glow-text"
                        >
                        <SiLinkedin size={30} />
                        </a>
                    </div>
                </div>

                {/* Stack Info */}
                <div className="flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                    <span>Built with</span>
                    <SiReact className="text-primary" />
                    <span>React</span>
                    </div>

                    <div className="flex items-center gap-2">
                    <span>Styled with</span>
                    <SiTailwindcss className="text-primary" />
                    <span>TailwindCSS</span>
                    </div>

                    <div className="flex items-center gap-2">
                    <span>Deployed on</span>
                    <SiVercel className="text-primary" />
                    <span>Vercel</span>
                    </div>
                </div>
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Bottom Row */}
                <p className="text-center text-muted-foreground">
                © {new Date().getFullYear()} Luis Jabonalla. All rights reserved.
                </p>
            </div>
    </footer>
  );
};
