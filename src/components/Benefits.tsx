import { Leaf, Shield, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our herbs are grown without pesticides or synthetic fertilizers in certified organic farms.",
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Every batch undergoes rigorous quality testing to ensure purity and potency.",
  },
  {
    icon: Heart,
    title: "Handcrafted",
    description: "Our products are made in small batches with traditional methods passed down generations.",
  },
  {
    icon: Sparkles,
    title: "Sustainable",
    description: "We're committed to eco-friendly packaging and carbon-neutral shipping practices.",
  },
];

const Benefits = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            The Leafy Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We believe in the power of nature to heal and nurture. Our commitment 
            to quality sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group text-center p-8 rounded-2xl bg-secondary/50 hover:bg-primary hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 mb-6 transition-colors duration-500">
                <benefit.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
