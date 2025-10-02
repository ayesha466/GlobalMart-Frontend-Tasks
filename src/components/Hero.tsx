import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Animated circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins leading-tight">
              Shop Smarter with{' '}
              <span className="text-primary">GlobalMart</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover amazing deals on electronics, fashion, home goods and more. 
              Your one-stop destination for quality products at unbeatable prices.
            </p>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-hover group"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-8 pt-8 text-sm text-muted-foreground">
              <div>
                <p className="text-2xl font-bold text-primary">10k+</p>
                <p>Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5k+</p>
                <p>Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.8★</p>
                <p>Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop" 
                alt="Shopping illustration"
                className="relative rounded-2xl shadow-2xl hover-zoom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
