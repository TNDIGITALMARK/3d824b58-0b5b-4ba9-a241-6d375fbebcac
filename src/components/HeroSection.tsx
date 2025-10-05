"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gray-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              DRIVE YOUR<br />DREAM
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Discover premium vehicles from trusted brands. Find your perfect car with unbeatable financing options and exceptional service.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
            >
              EXPLORE INVENTORY
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Showroom with cars image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/generated/hero-showroom.jpg"
                  alt="Luxury car dealership showroom interior with premium vehicles on display"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}