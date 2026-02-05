import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  {
    name: "Priya Sharma",
    role: "Ayurveda Practitioner",
    content: "As someone who practices traditional medicine, I appreciate Leafy's authentic approach. Their products honor ancient wisdom while meeting modern quality standards.",
    rating: 5,
    avatar: "P",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextTestimonial = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-primary/5 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-primary font-medium tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Join thousands of satisfied customers who have transformed their
            wellness journey with Leafy.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="relative bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-medium overflow-hidden">
            {/* Decorative background */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <Quote className="absolute top-4 right-4 sm:top-8 sm:right-8 h-10 w-10 sm:h-16 sm:w-16 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-base sm:text-xl md:text-2xl text-foreground/90 mb-5 sm:mb-8 italic leading-relaxed font-serif">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg sm:text-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonials[activeIndex].avatar}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground text-base sm:text-lg">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setAutoPlay(false);
                      setActiveIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.name}
              onClick={() => {
                setAutoPlay(false);
                setActiveIndex(index);
              }}
              className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-300 touch-manipulation ${
                index === activeIndex
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card hover:bg-card/80"
              }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base ${
                    index === activeIndex
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p
                    className={`font-medium text-sm ${
                      index === activeIndex ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs ${
                      index === activeIndex
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
