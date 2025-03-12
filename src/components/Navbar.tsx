
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Search, Map, BarChart3, Compass, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    { title: "SEARCH", href: "#search", icon: Search },
    { title: "PROPERTY DETAILS", href: "#property-details", icon: Map },
    { title: "WATCHLIST", href: "#watchlist", icon: Compass },
    { title: "DASHBOARD", href: "#dashboard", icon: BarChart3 },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-3"
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

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href} 
                className="text-sm font-medium tracking-wider link-underline flex items-center gap-2"
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              LOGIN
            </Button>
            <Button size="sm">
              SIGN UP
            </Button>
          </div>

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
                className="flex items-center gap-3 py-2 text-foreground tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="h-5 w-5 text-primary" />
                {link.title}
              </a>
            ))}
            <div className="pt-4 border-t border-border grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full" size="sm">
                LOGIN
              </Button>
              <Button className="w-full" size="sm">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
