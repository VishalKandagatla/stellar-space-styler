
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "WHAT WE DO", href: "#what-we-do" },
    { title: "PRODUCT", href: "#product" },
    { title: "MISSION", href: "#mission" },
    { title: "VALUES", href: "#values" },
    { title: "CONTACT US", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/bd5e0726-07ab-4231-b98c-4300d4076cfb.png" 
              alt="FinSat Logo" 
              className="h-8" 
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href} 
                className="text-sm font-medium tracking-wider link-underline"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-border animate-slide-down">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block py-2 text-foreground tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
