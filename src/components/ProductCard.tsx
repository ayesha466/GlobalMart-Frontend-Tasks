import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
}

const ProductCard = ({ id, title, price, image, rating = 4.5 }: ProductCardProps) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, title, price, image }
    });
    toast.success(`${title} added to cart!`);
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 glow-hover">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Add Button - Slides in on hover */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-foreground font-medium">{rating}</span>
        </div>

        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
          {title}
        </h3>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
