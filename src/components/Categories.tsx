import { 
  Baby, 
  Sparkles, 
  BookOpen, 
  Monitor, 
  Shirt, 
  ShoppingCart, 
  Heart, 
  Home, 
  Plane, 
  Dumbbell
} from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: 'Baby',
    icon: Baby,
    image: '/categories/Baby.png',
    itemCount: 450
  },
  {
    title: 'Beauty',
    icon: Sparkles,
    image: '/categories/Beauty.png',
    itemCount: 800
  },
  {
    title: 'Books',
    icon: BookOpen,
    image: '/categories/Books.png',
    itemCount: 1200
  },
  {
    title: 'Electronics',
    icon: Monitor,
    image: '/categories/Electronics.png',
    itemCount: 2100
  },
  {
    title: 'Fashion',
    icon: Shirt,
    image: '/categories/Fashion.png',
    itemCount: 3200
  },
  {
    title: 'Grocery',
    icon: ShoppingCart,
    image: '/categories/Grocery.png',
    itemCount: 1500
  },
  {
    title: 'Health',
    icon: Heart,
    image: '/categories/Health.png',
    itemCount: 950
  },
  {
    title: 'Home',
    icon: Home,
    image: '/categories/Home.png',
    itemCount: 1800
  },
  {
    title: 'Travel',
    icon: Plane,
    image: '/categories/Travel.png',
    itemCount: 320
  },
  {
    title: 'Sports',
    icon: Dumbbell,
    image: '/categories/sports.png',
    itemCount: 750
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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