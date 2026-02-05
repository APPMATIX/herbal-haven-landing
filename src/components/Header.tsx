import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const whatsappLink = "https://wa.me/918089673738";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Leafy" className="h-10 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
          <SheetHeader className="p-6 pb-4 border-b border-border">
            <SheetTitle className="flex items-center gap-2">
              <img src={logo} alt="Leafy" className="h-8 w-auto" />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center px-6 py-4 font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors active:bg-secondary/70 touch-manipulation"
                >
                  {link.name}
                </a>
              </SheetClose>
            ))}
            <div className="px-6 pt-4 mt-2 border-t border-border">
              <SheetClose asChild>
                <Button variant="default" className="w-full h-12 text-base" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Get in Touch</a>
                </Button>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
