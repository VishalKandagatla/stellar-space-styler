
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, MapPin } from "lucide-react";

const TeamMembers = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Michelle Del Valle",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      location: "New York, USA"
    },
    {
      name: "Marcello Miradoli",
      role: "COO EU",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      location: "Rome, Italy"
    },
    {
      name: "Carolina Cappabianca",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      location: "Buenos Aires, Argentina"
    },
    {
      name: "Florim Shabani",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      location: "Pristina, Kosovo"
    },
    {
      name: "Ethan Moody",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      location: "California, USA"
    },
    {
      name: "Janicka Bassis",
      role: "Head of EU Real Estate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      location: "Amsterdam, Netherlands"
    },
    {
      name: "Besim Ajvazi",
      role: "Geoinformatics, PhD",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      location: "Sarajevo, Bosnia"
    },
    {
      name: "Grant Anderson",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      location: "Austin, USA"
    },
    {
      name: "Tarun Luthra",
      role: "Geophysics, PhD",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      location: "Delhi, India"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white/80 to-gray-50/80">
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-fin-blue font-semibold mb-3">
            <Users className="h-5 w-5" />
            <span>OUR TEAM</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          
          <p className="text-muted-foreground">
            Our experienced and multidisciplinary leadership team drives Finsat's vision and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16 border-4 border-white shadow-md">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-fin-blue font-medium">{member.role}</p>
                      
                      <div className="flex items-center text-gray-600 text-sm mt-3">
                        <MapPin className="h-3.5 w-3.5 mr-1.5" />
                        {member.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default TeamMembers;
