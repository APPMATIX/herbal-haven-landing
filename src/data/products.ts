import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import chembarathiShampoo from "@/assets/chembarathi-shampoo.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
  featured?: boolean;
}

export const allProducts: Product[] = [
  // Featured Products (shown on homepage)
  {
    id: 1,
    name: "Chembarathi Shampoo",
    category: "skincare",
    description: "Natural hibiscus shampoo for strong, healthy hair",
    fullDescription: "Our Chembarathi Shampoo is crafted with the goodness of hibiscus (Chembarathi) flowers, known for centuries in Ayurveda for promoting hair health. This gentle, sulfate-free formula cleanses while nourishing your scalp and strengthening hair from root to tip.",
    benefits: ["Strengthens hair follicles", "Reduces hair fall", "Adds natural shine", "Gentle & sulfate-free"],
    ingredients: "Hibiscus Extract, Coconut Oil, Aloe Vera, Brahmi, Bhringraj, Neem Extract",
    usage: "Apply to wet hair, massage into scalp, and rinse thoroughly. For best results, use 2-3 times per week.",
    rating: 4.9,
    reviews: 185,
    image: chembarathiShampoo,
    badge: "Best Seller",
    featured: true,
  },
  {
    id: 2,
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
    badge: null,
    featured: true,
  },
  {
    id: 3,
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
    featured: true,
  },
  // Additional Oils
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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

export const categories = [
  { id: "all", name: "All Products" },
  { id: "oils", name: "Essential Oils" },
  { id: "teas", name: "Herbal Teas" },
  { id: "skincare", name: "Skincare" },
  { id: "supplements", name: "Supplements" },
];

export const getFeaturedProducts = () => allProducts.filter(p => p.featured);
