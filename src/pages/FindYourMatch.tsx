import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MapPin } from "lucide-react";

const FindYourMatch = () => {
  // Mock profile data - in production, this would come from the database
  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      religion: "Hindu",
      location: "Mumbai, India",
      bio: "Software engineer with a passion for travel and photography. Looking for someone who shares similar interests.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Ananya Reddy",
      age: 26,
      religion: "Hindu",
      location: "Bangalore, India",
      bio: "Doctor by profession, artist at heart. Love painting and classical music.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Neha Patel",
      age: 29,
      religion: "Hindu",
      location: "Delhi, India",
      bio: "Business analyst who loves cooking and trying new cuisines. Foodie looking for a food partner!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Riya Gupta",
      age: 27,
      religion: "Hindu",
      location: "Pune, India",
      bio: "Marketing professional with a creative mind. Enjoy yoga, books, and meaningful conversations.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Kavya Iyer",
      age: 25,
      religion: "Hindu",
      location: "Chennai, India",
      bio: "Teacher who believes in making a difference. Love classical dance and children.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Isha Mehta",
      age: 30,
      religion: "Hindu",
      location: "Ahmedabad, India",
      bio: "Fashion designer with an eye for detail. Looking for someone who appreciates art and culture.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Match</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse through verified profiles and find your perfect life partner
            </p>
          </div>
        </section>

        {/* Profiles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <Card key={profile.id} className="border-2 hover:border-primary transition-all overflow-hidden">
                  <div className="relative">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                        {profile.age} years
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <MapPin className="h-4 w-4" />
                        <span>{profile.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {profile.religion}
                      </p>
                    </div>

                    <p className="text-muted-foreground line-clamp-3">
                      {profile.bio}
                    </p>

                    <Button className="w-full" size="lg">
                      <Heart className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FindYourMatch;
