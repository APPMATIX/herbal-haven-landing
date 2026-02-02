import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Send, Sparkles, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the Leafy family! 🌿",
        description: "You'll receive our wellness tips and exclusive offers soon.",
      });
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden" ref={sectionRef}>
      {/* Animated Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-20, 20, -20],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-leaf-dark/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [-30, 30, -30],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating leaves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-foreground/10"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Leaf className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4"
          >
            Join Our Wellness Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto"
          >
            Subscribe for exclusive discounts, wellness tips, and be the first
            to know about new herbal products.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <motion.div
              className="flex-1 relative"
              whileFocus={{ scale: 1.02 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground h-12"
                required
                disabled={isSubmitted}
              />
              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Check className="h-5 w-5 text-accent" />
                </motion.div>
              )}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="gap-2 h-12 min-w-[140px]"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Trust */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-foreground/60 text-sm mt-4 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            No spam, unsubscribe anytime. Join 10,000+ wellness enthusiasts.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
