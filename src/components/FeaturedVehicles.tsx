"use client";

import { VehicleCard } from "./VehicleCard";

const featuredVehicles = [
  {
    id: "1",
    make: "Honda",
    model: "Accord Sport",
    year: 2024,
    price: 28995,
    image: "/api/placeholder/400/300",
    mileage: 15420,
    transmission: "CVT",
    fuelType: "Gasoline"
  },
  {
    id: "2",
    make: "Toyota",
    model: "Camry XLE",
    year: 2024,
    price: 31200,
    image: "/api/placeholder/400/300",
    mileage: 12850,
    transmission: "Automatic",
    fuelType: "Gasoline"
  },
  {
    id: "3",
    make: "Ford",
    model: "F-150 Crew Cab",
    year: 2023,
    price: 42800,
    image: "/api/placeholder/400/300",
    mileage: 8500,
    transmission: "Automatic",
    fuelType: "Gasoline"
  },
  {
    id: "4",
    make: "BMW",
    model: "X3 xDrive",
    year: 2024,
    price: 48500,
    image: "/api/placeholder/400/300",
    mileage: 5200,
    transmission: "Automatic",
    fuelType: "Gasoline"
  }
];

export function FeaturedVehicles() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FEATURED VEHICLES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium vehicles. Each car is thoroughly inspected
            and comes with our comprehensive warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded font-semibold transition-colors">
            VIEW ALL INVENTORY
          </button>
        </div>
      </div>
    </section>
  );
}