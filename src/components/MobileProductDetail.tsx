import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Star, ArrowRight, Leaf, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Product } from "@/data/products";

interface MobileProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailContent = ({ product }: { product: Product }) => {
  const whatsappUrl = `https://wa.me/918089673738?text=${encodeURIComponent(
    `Hi, I'm interested in the "${product.name}" product.\n\nProduct Details:\n• Category: ${product.category}\n• Description: ${product.description}\n\nPlease provide more information about pricing and availability.`
  )}`;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-background/90 text-foreground px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium capitalize">
          {product.category}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
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

      {/* Benefits */}
      <div>
        <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
          <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          Key Benefits
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
          {product.benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Ingredients */}
      <div>
        <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">Ingredients</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{product.ingredients}</p>
      </div>

      {/* How to Use */}
      <div>
        <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">How to Use</h4>
        <p className="text-xs sm:text-sm text-muted-foreground">{product.usage}</p>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Button className="w-full h-12 text-base touch-manipulation" size="lg" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Inquire About This Product
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

const MobileProductDetail = ({ product, onClose }: MobileProductDetailProps) => {
  const isMobile = useIsMobile();

  if (!product) return null;

  if (isMobile) {
    return (
      <Drawer open={!!product} onOpenChange={(open) => !open && onClose()}>
        <DrawerContent className="max-h-[90svh]">
          <div className="overflow-y-auto px-4 pb-6">
            <DrawerHeader className="px-0 pt-2 pb-1">
              <DrawerTitle className="text-xl font-serif text-left">
                {product.name}
              </DrawerTitle>
              <DrawerDescription className="text-sm text-muted-foreground text-left">
                {product.fullDescription}
              </DrawerDescription>
            </DrawerHeader>
            <ProductDetailContent product={product} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <DialogHeader className="mb-2">
            <DialogTitle className="text-2xl font-serif">
              {product.name}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {product.fullDescription}
            </DialogDescription>
          </DialogHeader>
          <ProductDetailContent product={product} />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileProductDetail;
