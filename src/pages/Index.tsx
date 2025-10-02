import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;