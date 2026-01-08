import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const whatsappLink = "https://wa.me/971588355652?text=Hi%2C%20I%27m%20interested%20in%20your%20herbal%20products";

  const navLinks = [
    { name: "Home", href: isHomePage ? "#" : "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: whatsappLink, external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Leafy" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
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
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="block px-6 py-3 font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-6 py-3">
                <Button variant="default" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Get in Touch</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
