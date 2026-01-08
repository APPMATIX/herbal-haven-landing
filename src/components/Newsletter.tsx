import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Leafy family! 🌿",
        description: "You'll receive our wellness tips and exclusive offers soon.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-leaf-dark/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Join Our Wellness Community
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Subscribe for exclusive discounts, wellness tips, and be the first 
            to know about new herbal products.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </Button>
          </form>

          {/* Trust */}
          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam, unsubscribe anytime. Join 10,000+ wellness enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
