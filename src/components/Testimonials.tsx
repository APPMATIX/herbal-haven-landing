import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Wellness Coach",
    content: "Leafy's herbal teas have become an essential part of my daily wellness routine. The quality is unmatched, and I can truly feel the difference.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "James Chen",
    role: "Yoga Instructor",
    content: "I've tried many herbal products, but Leafy's commitment to organic sourcing really shows. My students love the calming effects of their blends.",
    rating: 5,
    avatar: "J",
  },
  {
    name: "Emma Rodriguez",
    role: "Natural Health Advocate",
    content: "Finally, a brand that lives up to its promises! The Aloe Repair Cream worked wonders for my skin. Highly recommend to anyone seeking natural solutions.",
    rating: 5,
    avatar: "E",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of satisfied customers who have transformed their 
            wellness journey with Leafy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
