import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "Essential Oils", href: "#" },
      { name: "Herbal Teas", href: "#" },
      { name: "Skincare", href: "#" },
      { name: "Supplements", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Leafy Herbal Products" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Bringing nature's healing power to your doorstep. Handcrafted 
              herbal products for your wellness journey.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>Payyoli, Kozhikkode<br />Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+918089673738" className="hover:text-accent transition-colors">
                  +91 80896 73738
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@leafyherbal.in" className="hover:text-accent transition-colors">
                  info@leafyherbal.in
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Leafy Herbal Products. All rights reserved. | Developed and designed by{" "}
            <a 
              href="https://appmatixsolutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Appmatix Solutions
            </a>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
