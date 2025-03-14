
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Search, Map, BarChart3, Users, Settings, Info, Mail } from "lucide-react";
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
    { title: "JOIN OUR TEAM", href: "/join-team", icon: Users },
    { title: "DASHBOARD", href: "#dashboard", icon: BarChart3 },
    { title: "ABOUT", href: "/about", icon: Info },
    { title: "CONTACT", href: "/contact", icon: Mail },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 relative group">
            <div className="absolute -inset-2 rounded-lg bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="/lovable-uploads/bd5e0726-07ab-4231-b98c-4300d4076cfb.png" 
              alt="FinSat Logo" 
              className="h-8 relative" 
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.title}
                to={link.href.startsWith('/') ? link.href : link.href} 
                className="text-sm font-medium tracking-wider link-underline flex items-center gap-2 py-1 px-1"
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-white/30 bg-white/50 backdrop-blur-sm hover:bg-white/70">
              LOGIN
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-fin-blue text-white shadow-sm hover:shadow-md transition-all">
              SIGN UP
            </Button>
          </div>

          <button
            className="md:hidden text-foreground bg-white/70 p-2 rounded-lg backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg border-t border-white/30 animate-slide-down">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.title}
                to={link.href.startsWith('/') ? link.href : link.href}
                className="flex items-center gap-3 py-3 text-foreground tracking-wider animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/10 to-fin-blue/10 flex items-center justify-center">
                  <link.icon className="h-4 w-4 text-primary" />
                </div>
                {link.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/30 grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: `400ms` }}>
              <Button variant="outline" className="w-full" size="sm">
                LOGIN
              </Button>
              <Button className="w-full bg-gradient-to-r from-primary to-fin-blue" size="sm">
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
