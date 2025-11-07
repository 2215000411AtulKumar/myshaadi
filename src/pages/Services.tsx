import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Marriage Planner",
      services: [
        "Complete wedding planning and coordination",
        "Venue selection and booking",
        "Catering and menu planning",
        "Photography and videography arrangements",
        "Decoration and theme design",
        "Entertainment coordination",
        "Guest management",
        "Timeline and schedule management",
      ],
    },
    {
      title: "Legal Services",
      services: [
        "Marriage registration assistance",
        "Pre-nuptial agreement drafting",
        "Marriage certificate processing",
        "Legal documentation review",
        "Property settlement advice",
        "Immigration paperwork for spouse visa",
        "Legal consultation for interfaith marriages",
        "Court marriage arrangements",
      ],
    },
    {
      title: "Travel Management",
      services: [
        "Honeymoon destination planning",
        "Flight and hotel bookings",
        "Customized travel itineraries",
        "Visa assistance",
        "Travel insurance",
        "Romantic getaway packages",
        "Adventure honeymoon planning",
        "International and domestic tours",
      ],
    },
    {
      title: "Specialized Services",
      services: [
        "Pre-matrimonial investigation and background verification",
        "Professional matchmaking consultation",
        "Astrology and compatibility analysis",
        "Family counseling services",
        "Wedding attire consultation",
        "Jewelry and accessories sourcing",
        "Beauty and grooming packages",
        "Post-wedding support and counseling",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for every step of your matrimonial journey
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you plan the perfect beginning to your life together
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
