
import { ArrowRight, Map } from "lucide-react";

const Product = () => {
  return (
    <section id="product" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="h-full w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Product" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <h3 className="text-xl font-semibold mb-4">THE PRODUCT</h3>
            
            <div className="mb-6">
              <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                <Map className="h-6 w-6 text-primary" />
                CityL3ns
              </h2>
              <p className="text-muted-foreground mb-6">
                Our interactive GIS platform, provides an interactive map with vital information for decision making. With CityL3ns, we show you the land and property now, while getting you real time predictive modeling for the environment of a region and its Climate Change and water impacts for the future.
              </p>
              
              <button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 w-auto">
                SIGN UP
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
