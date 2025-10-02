import { Store, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <Store className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold font-poppins">
                Global<span className="text-primary">Mart</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm">
              Your trusted destination for quality products at unbeatable prices. Shop smarter, live better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#categories" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold font-poppins mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold font-poppins mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 GlobalMart. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="p-2 rounded-full bg-background hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all glow-hover"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-background hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all glow-hover"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-background hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all glow-hover"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-background hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all glow-hover"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
