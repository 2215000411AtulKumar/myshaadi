import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

interface Profile {
  id: string;
  name: string;
  age: number | null;
  religion: string | null;
  location: string | null;
  bio: string | null;
  image_url: string | null;
}

const FindYourMatch = () => {
  const { toast } = useToast();
  const [connecting, setConnecting] = useState<string | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load profiles.",
        variant: "destructive",
      });
    } else {
      setProfiles(data || []);
    }
    setLoading(false);
  };

  const handleConnect = async (profileId: string) => {
    setConnecting(profileId);
    
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to connect with other members.",
        variant: "destructive",
      });
      setConnecting(null);
      return;
    }

    // Simulate connection request (will be replaced with actual database call later)
    setTimeout(() => {
      toast({
        title: "Connection Sent!",
        description: "Your connection request has been sent successfully.",
      });
      setConnecting(null);
    }, 1000);
  };

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
            {loading ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">Loading profiles...</p>
              </div>
            ) : profiles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No profiles available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <Card key={profile.id} className="border-2 hover:border-primary transition-all overflow-hidden">
                  <div className="relative">
                    <img
                      src={profile.image_url || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"}
                      alt={profile.name}
                      className="w-full h-64 object-cover"
                    />
                    {profile.age && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                          {profile.age} years
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                      {profile.location && (
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                          <MapPin className="h-4 w-4" />
                          <span>{profile.location}</span>
                        </div>
                      )}
                      {profile.religion && (
                        <p className="text-sm text-muted-foreground">
                          {profile.religion}
                        </p>
                      )}
                    </div>

                    {profile.bio && (
                      <p className="text-muted-foreground line-clamp-3">
                        {profile.bio}
                      </p>
                    )}

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => handleConnect(profile.id)}
                      disabled={connecting === profile.id}
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      {connecting === profile.id ? "Connecting..." : "Connect"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FindYourMatch;
