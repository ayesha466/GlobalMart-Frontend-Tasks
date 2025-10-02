import { ShoppingCart, Store, X, Search, Phone, Info, Menu, Contact } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const { state, dispatch } = useCart();
  const [shake, setShake] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  // Trigger shake animation when cart updates
  useState(() => {
    if (itemCount > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  });

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // For now, we'll just log the search query
    // In a real implementation, you would filter products based on the search query
  };

  return (
    <>
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

            {/* Nav Links - Desktop */}
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
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                About Us
              </a>
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-1"
              >
                <Phone className="h-4 w-4" />
                Contact
              </button>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              {/* Search Form - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-full bg-card border-border"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </form>

              {/* Search Icon - Mobile */}
              <button className="md:hidden p-2 rounded-full bg-card hover:bg-primary/20 transition-all">
                <Search className="h-5 w-5 text-primary" />
              </button>

              {/* Cart Icon */}
              <Dialog>
                <DialogTrigger asChild>
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
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Your Cart
                      </span>
                      <span className="text-primary font-bold">{itemCount} items</span>
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="max-h-[60vh] overflow-y-auto">
                    {state.items.length === 0 ? (
                      <div className="text-center py-8">
                        <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
                        <p className="mt-1 text-muted-foreground">Add some items to your cart</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {state.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="h-16 w-16 object-cover rounded-md"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm truncate">{item.title}</h4>
                              <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm">Qty: {item.quantity}</span>
                                <span className="text-sm text-muted-foreground">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveItem(item.id)}
                              className="h-8 w-8"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <div className="border-t pt-4">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-primary">${state.total.toFixed(2)}</span>
                          </div>
                          <Button className="w-full mt-4">Proceed to Checkout</Button>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-full bg-card hover:bg-primary/20 transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-primary" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <a 
                  href="#categories" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </a>
                <a 
                  href="#products" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </a>
                <a 
                  href="#testimonials" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <a 
                  href="#about" 
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <button 
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Contact
                </button>
                
                {/* Search Form - Mobile */}
                <form onSubmit={handleSearch} className="flex items-center gap-2 mt-2">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 rounded-full bg-card border-border"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <Button type="submit" size="icon" className="rounded-full">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Slide-out Panel */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsContactOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-background border-l border-border shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-bold font-poppins text-foreground">
                      Contact Us
                    </h2>
                    <button
                      onClick={() => setIsContactOpen(false)}
                      className="p-2 rounded-md hover:bg-card transition-colors"
                    >
                      <X className="h-6 w-6 text-foreground" />
                    </button>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                        <Contact className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground mt-1">support@globalmart.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                        <Store className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Office</h3>
                        <p className="text-muted-foreground mt-1">123 Commerce Street<br />New York, NY 10001</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                        <Info className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Business Hours</h3>
                        <p className="text-muted-foreground mt-1">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Your Name" className="bg-card" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Your Email" className="bg-card" />
                      </div>
                      <div>
                        <Input placeholder="Subject" className="bg-card" />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Your Message" 
                          rows={4}
                          className="w-full px-3 py-2 rounded-md bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;