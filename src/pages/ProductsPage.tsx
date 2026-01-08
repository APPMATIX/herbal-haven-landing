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
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const categories = [
  { id: "all", name: "All Products" },
  { id: "oils", name: "Essential Oils" },
  { id: "teas", name: "Herbal Teas" },
  { id: "skincare", name: "Skincare" },
  { id: "supplements", name: "Supplements" },
];

const allProducts = [
  // Oils
  {
    id: 1,
    name: "Herbal Wellness Oil",
    category: "oils",
    description: "Premium blend of rosemary, lavender & eucalyptus for daily wellness",
    fullDescription: "Our signature Herbal Wellness Oil is a carefully crafted blend of organic rosemary, lavender, and eucalyptus essential oils. This premium formula is designed to promote relaxation, ease muscle tension, and support overall well-being.",
    benefits: ["Promotes relaxation & stress relief", "Eases muscle tension", "100% organic ingredients", "Suitable for all skin types"],
    ingredients: "Organic Rosemary Oil, Organic Lavender Oil, Organic Eucalyptus Oil, Jojoba Oil, Vitamin E",
    usage: "Apply a few drops to skin and massage gently. Can also be used in a diffuser or added to bath water.",
    rating: 4.9,
    reviews: 128,
    image: product1,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Lavender Dream Oil",
    category: "oils",
    description: "Pure lavender essential oil for relaxation and sleep support",
    fullDescription: "Experience the calming power of pure organic lavender. This single-origin essential oil is steam-distilled from French lavender fields, delivering an authentic, soothing aroma perfect for bedtime rituals.",
    benefits: ["Promotes restful sleep", "Reduces anxiety", "Pure & undiluted", "Aromatherapy grade"],
    ingredients: "100% Pure Organic Lavandula Angustifolia Oil",
    usage: "Add 3-5 drops to your diffuser or mix with carrier oil for topical application.",
    rating: 4.8,
    reviews: 89,
    image: product1,
    badge: null,
  },
  {
    id: 3,
    name: "Peppermint Energy Oil",
    category: "oils",
    description: "Invigorating peppermint oil for focus and energy boost",
    fullDescription: "Awaken your senses with our organic peppermint essential oil. Known for its cooling sensation and refreshing aroma, this oil is perfect for boosting concentration and relieving tension headaches.",
    benefits: ["Boosts mental clarity", "Relieves headaches", "Cooling sensation", "Energizing aroma"],
    ingredients: "100% Pure Organic Mentha Piperita Oil",
    usage: "Inhale directly or add to diffuser. For topical use, dilute with carrier oil.",
    rating: 4.7,
    reviews: 67,
    image: product1,
    badge: null,
  },
  // Teas
  {
    id: 4,
    name: "Calming Tea Blend",
    category: "teas",
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
    id: 5,
    name: "Immunity Boost Tea",
    category: "teas",
    description: "Echinacea, elderberry & ginger for immune support",
    fullDescription: "Strengthen your natural defenses with our powerful immunity blend. This warming tea combines echinacea, elderberry, and ginger to support your immune system year-round.",
    benefits: ["Supports immune function", "Rich in antioxidants", "Warming & comforting", "Organic ingredients"],
    ingredients: "Organic Echinacea, Organic Elderberry, Organic Ginger Root, Organic Turmeric, Organic Black Pepper",
    usage: "Steep 1 tablespoon in boiling water for 10 minutes. Drink 2-3 cups daily during cold season.",
    rating: 4.9,
    reviews: 142,
    image: product2,
    badge: "Popular",
  },
  {
    id: 6,
    name: "Digestive Harmony Tea",
    category: "teas",
    description: "Peppermint & fennel blend for digestive comfort",
    fullDescription: "Support healthy digestion with this gentle yet effective blend. Peppermint and fennel work together to soothe the stomach and promote digestive wellness after meals.",
    benefits: ["Soothes stomach discomfort", "Aids digestion", "Reduces bloating", "Refreshing taste"],
    ingredients: "Organic Peppermint Leaves, Organic Fennel Seeds, Organic Ginger, Organic Licorice Root",
    usage: "Steep 1-2 teaspoons in hot water for 5 minutes. Best enjoyed after meals.",
    rating: 4.6,
    reviews: 78,
    image: product2,
    badge: null,
  },
  // Skincare
  {
    id: 7,
    name: "Aloe Repair Cream",
    category: "skincare",
    description: "Natural skin healing with organic aloe vera & herbs",
    fullDescription: "Our Aloe Repair Cream harnesses the powerful healing properties of organic aloe vera combined with a blend of soothing herbs. This rich, nourishing cream is ideal for dry, irritated, or sun-exposed skin.",
    benefits: ["Deep hydration & repair", "Soothes irritated skin", "Non-greasy formula", "Dermatologist tested"],
    ingredients: "Organic Aloe Vera, Shea Butter, Calendula Extract, Vitamin E, Chamomile Extract, Coconut Oil",
    usage: "Apply generously to affected areas as needed. For best results, use after cleansing morning and night.",
    rating: 4.9,
    reviews: 156,
    image: product3,
    badge: "Popular",
  },
  {
    id: 8,
    name: "Rosehip Facial Serum",
    category: "skincare",
    description: "Anti-aging serum with rosehip & vitamin C",
    fullDescription: "Turn back time with our luxurious rosehip facial serum. Packed with vitamin C and essential fatty acids, this lightweight serum helps reduce fine lines and brightens your complexion naturally.",
    benefits: ["Reduces fine lines", "Brightens skin tone", "Lightweight absorption", "100% natural"],
    ingredients: "Organic Rosehip Seed Oil, Vitamin C, Vitamin E, Jojoba Oil, Sea Buckthorn Oil",
    usage: "Apply 3-4 drops to clean face and neck. Use morning and night before moisturizer.",
    rating: 4.8,
    reviews: 112,
    image: product3,
    badge: "Best Seller",
  },
  {
    id: 9,
    name: "Calendula Body Lotion",
    category: "skincare",
    description: "Gentle daily moisturizer with calendula & oat",
    fullDescription: "Nourish your skin daily with our gentle calendula body lotion. Formulated with soothing oat and healing calendula, this lotion is perfect for sensitive skin and the whole family.",
    benefits: ["For sensitive skin", "All-day moisture", "No synthetic fragrances", "Family-friendly"],
    ingredients: "Organic Calendula Extract, Oat Extract, Shea Butter, Almond Oil, Vitamin E",
    usage: "Apply to body after showering. Safe for daily use on all skin types.",
    rating: 4.7,
    reviews: 94,
    image: product3,
    badge: null,
  },
  // Supplements
  {
    id: 10,
    name: "Ashwagandha Capsules",
    category: "supplements",
    description: "Adaptogenic herb for stress relief & energy",
    fullDescription: "Harness the ancient wisdom of Ayurveda with our organic ashwagandha capsules. This powerful adaptogen helps your body manage stress while boosting energy and mental clarity.",
    benefits: ["Reduces stress & anxiety", "Boosts energy levels", "Supports mental clarity", "Organic certified"],
    ingredients: "Organic Ashwagandha Root Extract (600mg), Organic Black Pepper Extract",
    usage: "Take 1 capsule twice daily with meals. Consult healthcare provider before use.",
    rating: 4.9,
    reviews: 203,
    image: product1,
    badge: "Best Seller",
  },
  {
    id: 11,
    name: "Turmeric Golden Blend",
    category: "supplements",
    description: "Anti-inflammatory turmeric with black pepper",
    fullDescription: "Experience the golden power of turmeric enhanced with black pepper for maximum absorption. This potent blend supports joint health, reduces inflammation, and promotes overall wellness.",
    benefits: ["Reduces inflammation", "Supports joint health", "Enhanced absorption", "Antioxidant-rich"],
    ingredients: "Organic Turmeric Root Extract (95% Curcuminoids), Organic Black Pepper Extract (Piperine)",
    usage: "Take 1 capsule daily with a meal containing healthy fats for best absorption.",
    rating: 4.8,
    reviews: 167,
    image: product1,
    badge: null,
  },
  {
    id: 12,
    name: "Elderberry Immune Support",
    category: "supplements",
    description: "Elderberry & vitamin C for immune defense",
    fullDescription: "Boost your immune system naturally with our elderberry supplement. Combined with vitamin C and zinc, this powerful formula provides comprehensive immune support throughout the year.",
    benefits: ["Immune system support", "Rich in antioxidants", "Vitamin C & zinc added", "Vegan friendly"],
    ingredients: "Organic Elderberry Extract, Vitamin C, Zinc, Organic Echinacea Extract",
    usage: "Take 2 capsules daily. Increase to 3 during cold & flu season.",
    rating: 4.7,
    reviews: 134,
    image: product1,
    badge: "New Arrival",
  },
];

type Product = typeof allProducts[0];

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
                  <Link to="/#contact">
                    Inquire About This Product
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
