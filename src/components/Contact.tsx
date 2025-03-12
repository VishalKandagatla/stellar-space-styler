
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    newsletter: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      newsletter: ""
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.newsletter) {
      toast({
        title: "Please enter your email",
        description: "Email is required to subscribe to our newsletter",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setFormData(prev => ({ ...prev, newsletter: "" }));
  };

  return (
    <section id="contact" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">CONTACT US</h2>
          </div>
          <h3 className="text-xl font-semibold">ANY QUESTIONS</h3>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              SEND MESSAGE
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center mb-4">Subscribe now to get company news.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                name="newsletter"
                value={formData.newsletter}
                onChange={handleChange}
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-primary text-white font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
