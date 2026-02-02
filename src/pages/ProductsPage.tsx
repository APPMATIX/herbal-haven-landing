import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Star, ArrowRight, Leaf, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts, categories, Product } from "@/data/products";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
              All Products
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our complete range of herbal products, carefully crafted 
              using organic ingredients and time-honored recipes.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift animate-fade-in-up"
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
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 p-8 bg-secondary/30 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We offer custom formulations and can source specific herbs. 
              Get in touch with our team to discuss your needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/#contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProduct.badge}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {selectedProduct.category}
                </span>
              </div>
              
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-foreground">
                      {selectedProduct.rating}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({selectedProduct.reviews} reviews)
                  </span>
                </div>
                <DialogTitle className="text-2xl font-serif">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {selectedProduct.fullDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Benefits */}
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Key Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-2">Ingredients</h4>
                <p className="text-sm text-muted-foreground">{selectedProduct.ingredients}</p>
              </div>

              {/* How to Use */}
              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-2">How to Use</h4>
                <p className="text-sm text-muted-foreground">{selectedProduct.usage}</p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button className="w-full" size="lg" asChild>
                  <a 
                    href={`https://wa.me/918089673738?text=${encodeURIComponent(`Hi, I'm interested in the "${selectedProduct.name}" product.\n\nProduct Details:\n• Category: ${selectedProduct.category}\n• Description: ${selectedProduct.description}\n\nPlease provide more information about pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire About This Product
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
