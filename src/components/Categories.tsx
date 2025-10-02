import { Smartphone, ShoppingBag, Home, Watch } from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: 'Electronics',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop',
    itemCount: 1200
  },
  {
    title: 'Fashion',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop',
    itemCount: 2500
  },
  {
    title: 'Home & Living',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop',
    itemCount: 800
  },
  {
    title: 'Accessories',
    icon: Watch,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop',
    itemCount: 950
  }
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of products across different categories. 
            Find exactly what you're looking for with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
