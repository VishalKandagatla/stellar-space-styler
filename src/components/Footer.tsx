
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, MapPin, Mail, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fin-blue">
                FinSat<span className="font-light">.space</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              The profitable way to develop land and properties sustainably, making smart Real Estate decisions and mitigating risk.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
                New York, New York
              </p>
              <p className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@finsat.space">
                  info@finsat.space
                </a>
              </p>
              <p className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="h-5 w-5 text-primary" />
                <a href="https://finsat.space">
                  finsat.space
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {['What We Do', 'Product', 'Mission', 'Values', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FINSAT INC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">Privacy Policy</Button>
            <Button variant="ghost" size="sm">Terms of Service</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
