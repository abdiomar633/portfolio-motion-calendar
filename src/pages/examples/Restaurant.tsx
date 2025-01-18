import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Utensils } from "lucide-react";

const Restaurant = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6" />
            <span className="font-bold text-xl">La Bella Cucina</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Fine Italian Dining</h1>
            <p className="text-xl mb-8">Experience Authentic Italian Cuisine</p>
            <Button className="text-lg px-8 py-6">Make a Reservation</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Fresh Pasta</h3>
            <p>Handmade pasta prepared daily with authentic recipes.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Wood-Fired Pizza</h3>
            <p>Traditional Neapolitan pizza baked in our wood-fired oven.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Fine Wines</h3>
            <p>Extensive selection of Italian and international wines.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 La Bella Cucina. Example Restaurant Website.</p>
          <Button 
            variant="link" 
            onClick={() => navigate('/')}
            className="mt-4"
          >
            Return to Portfolio
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Restaurant;