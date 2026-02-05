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
      <div className="container mx-auto px-5 sm:px-6">
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
                What started as a humble family business in Kerala has grown into a 
                trusted name in herbal wellness. Passed down through generations, our 
                traditional recipes and knowledge form the heart of everything we create.
              </p>
              <p>
                Rooted in Kerala's rich Ayurvedic heritage, our family has always believed 
                that nature holds the key to true wellness. We carefully select herbs and 
                ingredients from God's Own Country, honoring the wisdom our elders passed on to us.
              </p>
              <p>
                Today, Leafy Herbal Products continues this family tradition, bringing 
                you authentic Kerala herbal remedies crafted with the same love and care 
                that has defined our family for generations. Every product we create 
                reflects our commitment to purity, tradition, and your natural wellness journey.
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
