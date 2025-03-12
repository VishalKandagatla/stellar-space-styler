
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fin-blue">
                Finsat<span className="font-light">.space</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              FinSat is the profitable way to develop land and properties sustainably, to make smart Real Estate decisions and mitigate risk, increasing the value of land and property investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Main Office</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  New York, New York
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@finsat.space" className="hover:text-primary transition-colors">
                    info@finsat.space
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-we-do" className="text-muted-foreground hover:text-primary transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#product" className="text-muted-foreground hover:text-primary transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#mission" className="text-muted-foreground hover:text-primary transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#values" className="text-muted-foreground hover:text-primary transition-colors">
                  Values
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 FINSAT INC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
