import { motion } from "framer-motion";
import { Leaf, Heart, Award } from "lucide-react";

const OurStory = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "We source only the finest natural ingredients from trusted suppliers.",
    },
    {
      icon: Heart,
      title: "Made with Care",
      description: "Each product is crafted with love and attention to detail.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality, ensuring the best for our customers.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Bringing Nature's Best to Your Doorstep
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Rooted in the rich Ayurvedic traditions of Kerala, Leafy Herbal Products 
                began as a small family venture dedicated to bringing the purest herbal 
                remedies from God's Own Country to homes everywhere.
              </p>
              <p>
                Our journey started with a simple belief: nature holds the key to true 
                wellness. Drawing from Kerala's ancient wisdom and abundant natural resources, 
                we carefully select and craft products that harness the power of traditional herbs.
              </p>
              <p>
                From traditional Chembarathi hair oils to nourishing skincare, every product 
                in our collection is a testament to Kerala's herbal heritage and our commitment 
                to quality, authenticity, and your well-being.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
