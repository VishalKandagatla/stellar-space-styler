
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, Menu, X, Sun } from "lucide-react";

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
            <Sun className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fin-blue">
              Solar<span className="font-light">Sat</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium link-underline">
              Property Search
            </Link>
            <Link to="/" className="text-sm font-medium link-underline">
              Solar Analysis
            </Link>
            <Link to="/" className="text-sm font-medium link-underline">
              Portfolio
            </Link>
            <Link to="/" className="text-sm font-medium link-underline">
              Resources
            </Link>
            <Link to="/" className="text-sm font-medium link-underline">
              Pricing
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="search"
                placeholder="Search properties..."
                className="h-9 w-[220px] rounded-full bg-secondary pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>
            <button className="h-9 px-4 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors">
              Get Started
            </button>
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
            <Link
              to="/"
              className="block py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Property Search
            </Link>
            <Link
              to="/"
              className="block py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solar Analysis
            </Link>
            <Link
              to="/"
              className="block py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/"
              className="block py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/"
              className="block py-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="search"
                  placeholder="Search properties..."
                  className="h-10 w-full rounded-lg bg-secondary pl-9 pr-4 text-sm"
                />
              </div>
              <button className="h-10 rounded-lg bg-primary text-white text-sm font-medium shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
