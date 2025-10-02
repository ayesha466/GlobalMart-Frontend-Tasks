import { Users, Award, ShoppingBag, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            About <span className="text-primary">GlobalMart</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're dedicated to providing you with the best shopping experience, offering quality products at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold font-poppins mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2010, GlobalMart started as a small online marketplace with a vision to revolutionize the way people shop. Over the years, we've grown into a trusted platform serving thousands of customers worldwide.
            </p>
            <p className="text-muted-foreground mb-6">
              Our commitment to quality, customer service, and innovation has made us a leader in the e-commerce industry. We carefully curate our product selection to ensure that every item meets our high standards.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to evolve and expand our offerings while staying true to our core values of integrity, excellence, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold font-poppins mb-2">10K+</h4>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold font-poppins mb-2">50+</h4>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
              <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold font-poppins mb-2">100K+</h4>
              <p className="text-muted-foreground">Products Sold</p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold font-poppins mb-2">50+</h4>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-card rounded-2xl border border-border p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold font-poppins mb-6">
              Our Mission & Values
            </h3>
            <p className="text-muted-foreground mb-8">
              At GlobalMart, our mission is to empower customers by providing access to high-quality products at affordable prices, while delivering exceptional service and creating a seamless shopping experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">Q</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Quality</h4>
                <p className="text-muted-foreground">
                  We never compromise on quality and ensure every product meets our rigorous standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">I</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                <p className="text-muted-foreground">
                  We conduct business with honesty, transparency, and ethical practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">C</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Customer Focus</h4>
                <p className="text-muted-foreground">
                  Our customers are at the heart of everything we do, and their satisfaction drives us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;