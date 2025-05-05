"use client"
import { useState } from 'react';
import { 
  ChevronRight, 
  Cpu, 
  Monitor, 
  ArrowRight,
  Check,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Sample laptop data for hero section
const heroLaptop = {
  id: "1",
  productName: "Dell Latitude 3000",
  price: "3205",
  processor: "Intel Core i5",
  memory: "16GB",
  screenSize: "14 инч"
};

export default function DellLaptopPromoSections() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-32 bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                Unleash <span className="font-bold">Limitless Potential</span>
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Introducing the new Dell Latitude 3000 series. Engineered for performance, designed for professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                  Explore Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-white/30 rounded-full blur-3xl"></div>
                <img 
                  src="https://freepngimg.com/save/162246-laptop-top-portable-view-free-clipart-hd/800x620" 
                  alt="Dell Latitude 3000" 
                  className="relative z-10 w-full h-auto max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek Design Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <img 
                src="/api/placeholder/600/400" 
                alt="Sleek Design" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Sleek Design Meets<br />Powerful Performance</h2>
              <p className="text-lg text-gray-600 mb-8">
                The Dell Latitude 3000 combines elegant aesthetics with robust capabilities. Crafted from premium materials, it's designed to make a statement while delivering exceptional performance for your everyday tasks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5" />
                  <span>Ultra-thin profile with durable construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5" />
                  <span>Premium keyboard with smooth typing experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 mt-0.5" />
                  <span>Precision touchpad for intuitive navigation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pl-12">
              <img 
                src="/api/placeholder/600/400" 
                alt="Performance" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Performance That<br />Exceeds Expectations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Powered by the latest {heroLaptop.processor} processor and {heroLaptop.memory} RAM, the Dell Latitude 3000 handles everything from complex spreadsheets to creative projects with ease.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Cpu className="h-8 w-8 text-blue-700 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Next-Gen Processor</h3>
                  <p className="text-gray-600">Blazing fast performance for all your professional tasks</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700 mb-4"><path d="M15 9h.01"/><path d="M11 11h.01"/><path d="M15 15h.01"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                  <h3 className="text-xl font-medium mb-2">Ample Memory</h3>
                  <p className="text-gray-600">Multitask effortlessly with high-speed RAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Display Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Immersive Visual Experience</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Featuring a stunning {heroLaptop.screenSize} display with vibrant colors and crisp details for an exceptional viewing experience.
          </p>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl"></div>
            <img 
              src="/api/placeholder/1000/500" 
              alt="Immersive Display" 
              className="w-full h-auto max-w-4xl mx-auto rounded-lg relative z-10"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Monitor className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Anti-Glare Panel</h3>
              <p className="text-gray-300">Comfortable viewing experience even in bright environments</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mx-auto mb-4"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              <h3 className="text-xl font-medium mb-2">Wide Color Gamut</h3>
              <p className="text-gray-300">True-to-life colors for creative professionals</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mx-auto mb-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/></svg>
              <h3 className="text-xl font-medium mb-2">Ultra HD Resolution</h3>
              <p className="text-gray-300">Sharp details and crystal clear text</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Designed for Productivity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of the Dell Latitude 3000 is engineered to help you work more efficiently and comfortably.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Security</h3>
              <p className="text-gray-600">
                Advanced security features protect your sensitive data and privacy with multiple layers of protection.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">All-Day Battery</h3>
              <p className="text-gray-600">
                Work unplugged all day with long-lasting battery life and rapid charging technology.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/><path d="M7 16h10"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ergonomic Keyboard</h3>
              <p className="text-gray-600">
                Comfortable typing experience with backlit keys and precise feedback for extended use.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "The Dell Latitude 3000 has transformed how I work. The performance is outstanding and the battery lasts all day."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="font-medium text-gray-600">JD</span>
                </div>
                <div>
                  <h4 className="font-medium">James Davis</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "Exceptional build quality and the display is simply stunning. Perfect for both work and entertainment."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="font-medium text-gray-600">SL</span>
                </div>
                <div>
                  <h4 className="font-medium">Sarah Lee</h4>
                  <p className="text-sm text-gray-500">Graphic Designer</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-white">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "The speed and reliability are impressive. I can run multiple applications without any lag or performance issues."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="font-medium text-gray-600">MT</span>
                </div>
                <div>
                  <h4 className="font-medium">Michael Thompson</h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Elevate Your Experience Today</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience the perfect balance of power, portability, and elegance with the Dell Latitude 3000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Buy Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
              Explore Features
            </Button>
          </div>
          <p className="mt-8 text-blue-200">Starting at ${heroLaptop.price}</p>
        </div>
      </section>
    </div>
  );
}