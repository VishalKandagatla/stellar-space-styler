
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, MapPin, Mail, Globe, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/30">
      {/* Background with layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full border-4 border-fin-blue/10 animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border-4 border-fin-purple/10 animate-float-slow [animation-delay:2s]"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/6bb1cd8e-bfbb-4f2b-b101-f719b66a738a.png" 
                alt="FinSat Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              The profitable way to develop land and properties sustainably, making smart Real Estate decisions and mitigating risk.
            </p>
            
            <div className="flex space-x-3">
              <SocialButton icon={Linkedin} />
              <SocialButton icon={Twitter} />
              <SocialButton icon={Instagram} />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-gradient-to-r from-primary to-fin-blue bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-5">
              <ContactItem 
                icon={MapPin} 
                text="New York, New York"
              />
              <ContactItem 
                icon={Mail} 
                text="info@finsat.space"
                link="mailto:info@finsat.space"
              />
              <ContactItem 
                icon={Globe} 
                text="finsat.space"
                link="https://finsat.space"
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-gradient-to-r from-primary to-fin-blue bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-4">
              {['What We Do', 'Product', 'Mission', 'Values', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FINSAT INC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon: Icon }: { icon: React.ElementType }) => (
  <a href="#" className="p-3 rounded-full bg-white shadow-md text-muted-foreground hover:text-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="h-5 w-5" />
  </a>
);

const ContactItem = ({ 
  icon: Icon, 
  text, 
  link 
}: { 
  icon: React.ElementType; 
  text: string; 
  link?: string;
}) => (
  <div className="flex items-start gap-3 group">
    <div className="p-2 bg-white rounded-full shadow-sm mt-1">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      {link ? (
        <a 
          href={link} 
          className="text-muted-foreground hover:text-foreground transition-colors group-hover:translate-x-1 transform transition-transform duration-300 inline-block"
        >
          {text}
        </a>
      ) : (
        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
          {text}
        </p>
      )}
    </div>
  </div>
);

export default Footer;
