import { Sparkles, MessageSquare, ShieldCheck, Scale, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroCarousel from "@/components/home/HeroCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: Sparkles,
      title: "AI Match Suggestions",
      description: "Smart algorithms to find your perfect match based on compatibility",
    },
    {
      icon: MessageSquare,
      title: "Premium Messaging",
      description: "Connect with potential matches through secure messaging",
    },
    {
      icon: ShieldCheck,
      title: "Verified Profiles",
      description: "All profiles are verified for authenticity and safety",
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Expert legal assistance for marriage documentation",
    },
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      text: "MySaadi helped us find each other. We couldn't be happier!",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop",
    },
    {
      name: "Ananya & Vikram",
      text: "The verification process gave us confidence. Highly recommend!",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop",
    },
    {
      name: "Neha & Arjun",
      text: "Found my soulmate through MySaadi. Forever grateful!",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=400&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "How does MySaadi verify profiles?",
      answer: "We use a comprehensive verification process including document verification, phone number verification, and photo verification to ensure all profiles are authentic.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer matchmaking services, wedding planning, legal documentation assistance, travel management for honeymoons, and pre-matrimonial investigation services.",
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal information. Your privacy is our top priority.",
    },
    {
      question: "How much does it cost?",
      answer: "We offer various membership plans to suit different needs. Contact us for detailed pricing information.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Featured Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Featured Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover why thousands trust MySaadi for their journey to find love
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex p-3 rounded-full bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Real couples, real love stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">{testimonial.name}</h4>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Got questions? We've got answers
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
