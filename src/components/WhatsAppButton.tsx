import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/918089673738";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ 
        scale: 1.15,
        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 0],
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      >
        <MessageCircle className="h-7 w-7 fill-current" />
      </motion.div>
      
      {/* Tooltip */}
      <motion.span 
        className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        Chat with us
      </motion.span>
      
      {/* Animated rings */}
      <motion.span 
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ 
          scale: [1, 1.5, 1.8],
          opacity: [0.6, 0.3, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      <motion.span 
        className="absolute inset-0 rounded-full border-2 border-[#25D366]"
        animate={{ 
          scale: [1, 1.5, 1.8],
          opacity: [0.6, 0.3, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
