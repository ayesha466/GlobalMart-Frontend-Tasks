import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Verified Buyer',
    content: 'Amazing shopping experience! Fast delivery and great product quality. Will definitely shop again.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'Best prices I\'ve found online. The customer service is exceptional and products always arrive on time.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Happy Shopper',
    content: 'Love the variety of products available. The website is easy to navigate and checkout is seamless.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied shoppers who trust GlobalMart for their online shopping needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">10,000+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">4.8/5</p>
            <p className="text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">99%</p>
            <p className="text-sm">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
