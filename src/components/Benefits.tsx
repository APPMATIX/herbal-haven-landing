import { useRef, useState } from "react";
import { Leaf, Shield, Heart, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our herbs are grown without pesticides or synthetic fertilizers in certified organic farms.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Every batch undergoes rigorous quality testing to ensure purity and potency.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Heart,
    title: "Handcrafted",
    description: "Our products are made in small batches with traditional methods passed down generations.",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Sparkles,
    title: "Sustainable",
    description: "We're committed to eco-friendly packaging and carbon-neutral shipping practices.",
    color: "from-amber-500/20 to-yellow-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Benefits = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-16 sm:py-24 bg-background" ref={sectionRef}>
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
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4"
          >
            The Leafy Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We believe in the power of nature to heal and nurture. Our commitment
            to quality sets us apart.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative text-center p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary/50 overflow-hidden cursor-pointer h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-foreground/30 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 0,
                        }}
                        animate={{
                          x: `${20 + i * 20}%`,
                          y: `${20 + (i % 2) * 60}%`,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Icon */}
                <motion.div
                  className="relative z-10 inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 mb-3 sm:mb-6 transition-colors duration-500"
                  animate={{
                    rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon className="h-5 w-5 sm:h-8 sm:w-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 text-sm sm:text-xl font-serif font-semibold text-foreground group-hover:text-primary-foreground mb-1.5 sm:mb-3 transition-colors duration-500">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-xs sm:text-base text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-500">
                  {benefit.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <div className="relative h-20 mt-12 hidden sm:block">
          <motion.div
            className="absolute left-1/4 top-0 w-3 h-3 bg-primary/30 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-1/2 top-5 w-2 h-2 bg-accent/50 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute right-1/4 top-2 w-4 h-4 bg-primary/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
