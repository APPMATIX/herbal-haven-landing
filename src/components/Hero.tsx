import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Herbal garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Leaf className="h-4 w-4" />
            <span className="text-sm font-medium">100% Natural & Organic</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up stagger-1">
            Nature's Healing
            <span className="block text-accent">Power</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg animate-fade-in-up stagger-2">
            Discover our handcrafted collection of herbal remedies, sourced from 
            the finest organic gardens and prepared with centuries-old wisdom.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
            <Button size="lg" className="group" asChild>
              <a href="#products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20" asChild>
              <a href="#about">Learn Our Story</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in-up stagger-4">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/70">Herbal Products</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">10K+</p>
              <p className="text-sm text-primary-foreground/70">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">15+</p>
              <p className="text-sm text-primary-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
