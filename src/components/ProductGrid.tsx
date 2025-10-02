import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://68bbeb6a0f2491613edd9cf1.mockapi.io/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-12 w-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive text-lg">Error loading products: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 text-primary hover:underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of premium products. 
            Each item is carefully selected to bring you the best quality and value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              price={parseFloat(product.price)}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
