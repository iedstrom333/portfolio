"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ivory/90 backdrop-blur-sm border-b border-rose-light"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-6xl mx-auto page-pad h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl text-brown-dark tracking-widest"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          aria-label="Ina Edstrom — back to top"
        >
          IE
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm tracking-widest uppercase transition-colors relative group",
                    activeSection === id
                      ? "text-brown-dark"
                      : "text-brown-muted hover:text-brown-dark"
                  )}
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-rose transition-all duration-300",
                      activeSection === id ? "w-full" : "w-0 group-hover:w-full"
                    )}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/Ina_Edstrom.pdf"
              download
              className="text-sm tracking-widest uppercase border border-rose text-rose px-4 py-1.5 hover:bg-rose hover:text-ivory transition-colors"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brown-dark p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory/95 backdrop-blur-sm border-b border-rose-light">
          <ul className="flex flex-col py-4 px-8 gap-4" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-brown-muted hover:text-brown-dark transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Ina_Edstrom.pdf"
                download
                className="text-sm tracking-widest uppercase text-rose"
                style={{ fontFamily: "var(--font-inter)" }}
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
