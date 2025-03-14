
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
    <section className="py-16 md:py-24">
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
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur border-none shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                
                <div className="p-5 relative mt-[-80px]">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-lg mb-3">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{member.role}</p>
                  
                  <div className="flex items-center text-white/70 text-sm mt-2">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {member.location}
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
