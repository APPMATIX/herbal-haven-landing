import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Leaf, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { getFeaturedProducts, Product } from "@/data/products";
import MobileProductDetail from "@/components/MobileProductDetail";

const products = getFeaturedProducts();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-16 sm:py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-primary font-medium tracking-wider uppercase text-sm"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4"
          >
            Nature's Finest Selection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg"
          >
            Each product is carefully crafted using time-honored recipes and
            the purest organic ingredients from sustainable sources.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredProduct === product.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                
                {/* Overlay on hover - desktop only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-foreground/20 hidden sm:flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: hoveredProduct === product.id ? 1 : 0,
                      rotate: hoveredProduct === product.id ? 0 : -180,
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <ShoppingBag className="h-12 w-12 text-primary-foreground" />
                  </motion.div>
                </motion.div>

                {product.badge && (
                  <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {product.badge}
                  </motion.span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                          i < Math.floor(product.rating) ? "fill-current" : ""
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs sm:text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn h-10 sm:h-9 text-sm touch-manipulation"
                  onClick={() => setSelectedProduct(product)}
                >
                  <span className="relative z-10 flex items-center justify-center w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Button variant="outline" size="lg" className="h-12 sm:h-11 text-base sm:text-sm touch-manipulation" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Product Detail - Drawer on mobile, Dialog on desktop */}
      <MobileProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default Products;
