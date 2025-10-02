import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  itemCount: number;
}

const CategoryCard = ({ title, icon: Icon, image, itemCount }: CategoryCardProps) => {
  return (
    <a 
      href={`#${title.toLowerCase()}`}
      className="group relative overflow-hidden rounded-2xl bg-card hover-zoom cursor-pointer"
    >
      {/* Background Image */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <Icon className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
        <h3 className="text-2xl font-bold font-poppins mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{itemCount}+ items</p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm" />
      </div>
    </a>
  );
};

export default CategoryCard;
