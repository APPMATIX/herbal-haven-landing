import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts, categories, Product } from "@/data/products";
import MobileProductDetail from "@/components/MobileProductDetail";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 sm:mb-8 touch-manipulation py-1"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">
              Our Collection
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4">
              All Products
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Discover our complete range of herbal products, carefully crafted 
              using organic ingredients and time-honored recipes.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all flex-shrink-0 h-10 sm:h-9 text-sm touch-manipulation"
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-primary text-primary-foreground px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-background/90 text-foreground px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium capitalize">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-1.5 sm:mb-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                      <span className="ml-0.5 sm:ml-1 text-xs sm:text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-[10px] sm:text-xs">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm sm:text-lg font-serif font-semibold text-foreground mb-0.5 sm:mb-1 line-clamp-1 sm:line-clamp-none">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-[11px] sm:text-sm mb-2.5 sm:mb-4 line-clamp-2 hidden sm:block">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn h-8 sm:h-9 text-xs sm:text-sm touch-manipulation"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Learn More
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-secondary/30 rounded-2xl">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2 sm:mb-3">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
              We offer custom formulations and can source specific herbs. 
              Get in touch with our team to discuss your needs.
            </p>
            <Button size="lg" className="h-12 sm:h-11 text-base sm:text-sm touch-manipulation" asChild>
              <Link to="/#contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Product Detail - Drawer on mobile, Dialog on desktop */}
      <MobileProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ProductsPage;
