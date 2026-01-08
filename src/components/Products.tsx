import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Herbal Wellness Oil",
    description: "Premium blend of rosemary, lavender & eucalyptus for daily wellness",
    price: 34.99,
    rating: 4.9,
    reviews: 128,
    image: product1,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Calming Tea Blend",
    description: "Chamomile & lavender infusion for peaceful relaxation",
    price: 24.99,
    rating: 4.8,
    reviews: 96,
    image: product2,
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Aloe Repair Cream",
    description: "Natural skin healing with organic aloe vera & herbs",
    price: 42.99,
    rating: 4.9,
    reviews: 156,
    image: product3,
    badge: "Popular",
  },
];

const Products = () => {
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

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
