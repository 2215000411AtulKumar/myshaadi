import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lightbulb, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We prioritize the safety and security of our users through rigorous verification processes",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to provide the best matchmaking experience",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where lasting connections are formed",
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every member receives personalized attention and support throughout their journey",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About MySaadi</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to help people find their perfect life partner through
              technology, trust, and personalized service.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                MySaadi was founded with a simple yet powerful vision: to make the journey
                of finding a life partner easier, safer, and more meaningful. We combine
                traditional values with modern technology to create a platform where genuine
                connections flourish.
              </p>
              <p className="text-lg text-muted-foreground text-center">
                Beyond matchmaking, we provide comprehensive wedding services including
                planning, legal assistance, travel management, and pre-matrimonial
                verification to ensure your journey is smooth from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex p-4 rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-lg text-muted-foreground">Happy Couples</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-lg text-muted-foreground">Verified Profiles</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-lg text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
