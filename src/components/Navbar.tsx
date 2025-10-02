import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { state } = useCart();
  const [shake, setShake] = useState(false);
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  // Trigger shake animation when cart updates
  useState(() => {
    if (itemCount > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  });

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Store className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold font-poppins text-foreground">
              Global<span className="text-primary">Mart</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#categories" 
              className="text-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Categories
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Products
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Reviews
            </a>
          </div>

          {/* Cart Icon */}
          <button 
            className={`relative p-2 rounded-full bg-card hover:bg-primary/20 transition-all glow-hover ${shake ? 'animate-shake' : ''}`}
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-6 w-6 text-primary" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
