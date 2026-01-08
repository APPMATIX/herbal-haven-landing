import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Star, ArrowRight, Leaf, Check } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import chembarathiShampoo from "@/assets/chembarathi-shampoo.jpg";

const products = [
  {
    id: 1,
    name: "Chembarathi Shampoo",
    description: "Natural hibiscus shampoo for strong, healthy hair",
    fullDescription: "Our Chembarathi Shampoo is crafted with the goodness of hibiscus (Chembarathi) flowers, known for centuries in Ayurveda for promoting hair health. This gentle, sulfate-free formula cleanses while nourishing your scalp and strengthening hair from root to tip.",
    benefits: ["Strengthens hair follicles", "Reduces hair fall", "Adds natural shine", "Gentle & sulfate-free"],
    ingredients: "Hibiscus Extract, Coconut Oil, Aloe Vera, Brahmi, Bhringraj, Neem Extract",
    usage: "Apply to wet hair, massage into scalp, and rinse thoroughly. For best results, use 2-3 times per week.",
    rating: 4.9,
    reviews: 185,
    image: chembarathiShampoo,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Herbal Wellness Oil",
    description: "Premium blend of rosemary, lavender & eucalyptus for daily wellness",
    fullDescription: "Our signature Herbal Wellness Oil is a carefully crafted blend of organic rosemary, lavender, and eucalyptus essential oils. This premium formula is designed to promote relaxation, ease muscle tension, and support overall well-being.",
    benefits: ["Promotes relaxation & stress relief", "Eases muscle tension", "100% organic ingredients", "Suitable for all skin types"],
    ingredients: "Organic Rosemary Oil, Organic Lavender Oil, Organic Eucalyptus Oil, Jojoba Oil, Vitamin E",
    usage: "Apply a few drops to skin and massage gently. Can also be used in a diffuser or added to bath water.",
    rating: 4.9,
    reviews: 128,
    image: product1,
    badge: null,
  },
  {
    id: 3,
    name: "Calming Tea Blend",
    description: "Chamomile & lavender infusion for peaceful relaxation",
    fullDescription: "Unwind with our Calming Tea Blend, a soothing herbal infusion crafted from the finest organic chamomile and lavender flowers. This caffeine-free blend is perfect for evening relaxation.",
    benefits: ["Promotes restful sleep", "Calms the mind naturally", "Caffeine-free", "Hand-blended with care"],
    ingredients: "Organic Chamomile Flowers, Organic Lavender Buds, Organic Lemon Balm, Organic Passionflower",
    usage: "Steep 1-2 teaspoons in hot water for 5-7 minutes. Enjoy 30 minutes before bedtime.",
    rating: 4.8,
    reviews: 96,
    image: product2,
    badge: "New Arrival",
  },
  {
    id: 4,
    name: "Aloe Repair Cream",
    description: "Natural skin healing with organic aloe vera & herbs",
    fullDescription: "Our Aloe Repair Cream harnesses the powerful healing properties of organic aloe vera combined with a blend of soothing herbs. Ideal for dry, irritated, or sun-exposed skin.",
    benefits: ["Deep hydration & repair", "Soothes irritated skin", "Non-greasy formula", "Dermatologist tested"],
    ingredients: "Organic Aloe Vera, Shea Butter, Calendula Extract, Vitamin E, Chamomile Extract, Coconut Oil",
    usage: "Apply generously to affected areas as needed. For best results, use after cleansing morning and night.",
    rating: 4.9,
    reviews: 156,
    image: product3,
    badge: "Popular",
  },
];

type Product = typeof products[0];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Nature's Finest Selection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each product is carefully crafted using time-honored recipes and 
            the purest organic ingredients from sustainable sources.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
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

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

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
                  <a href="#contact">
                    Inquire About This Product
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
