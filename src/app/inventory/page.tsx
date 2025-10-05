"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, X } from "lucide-react";

const inventoryVehicles = [
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
  },
  {
    id: "5",
    make: "Toyota",
    model: "RAV4 XLE",
    year: 2023,
    price: 32900,
    image: "/api/placeholder/400/300",
    mileage: 18000,
    transmission: "Automatic",
    fuelType: "Gasoline"
  },
  {
    id: "6",
    make: "Honda",
    model: "CR-V EX",
    year: 2024,
    price: 35400,
    image: "/api/placeholder/400/300",
    mileage: 8900,
    transmission: "CVT",
    fuelType: "Gasoline"
  },
  {
    id: "7",
    make: "BMW",
    model: "3 Series",
    year: 2023,
    price: 41200,
    image: "/api/placeholder/400/300",
    mileage: 12400,
    transmission: "Automatic",
    fuelType: "Gasoline"
  },
  {
    id: "8",
    make: "Ford",
    model: "Explorer XLT",
    year: 2023,
    price: 38900,
    image: "/api/placeholder/400/300",
    mileage: 15600,
    transmission: "Automatic",
    fuelType: "Gasoline"
  }
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [priceRange, setPriceRange] = useState([0, 60000]);
  const [maxMileage, setMaxMileage] = useState([50000]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("price-low");
  const [showFilters, setShowFilters] = useState(false);

  const makes = [...new Set(inventoryVehicles.map(v => v.make))].sort();
  const models = [...new Set(inventoryVehicles.map(v => v.model))].sort();
  const transmissions = [...new Set(inventoryVehicles.map(v => v.transmission))].sort();
  const fuelTypes = [...new Set(inventoryVehicles.map(v => v.fuelType))].sort();

  const filteredVehicles = inventoryVehicles
    .filter(vehicle => {
      const matchesSearch = searchTerm === "" ||
        `${vehicle.year} ${vehicle.make} ${vehicle.model}`.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMake = selectedMake === "" || vehicle.make === selectedMake;
      const matchesModel = selectedModel === "" || vehicle.model === selectedModel;
      const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const matchesMileage = !vehicle.mileage || vehicle.mileage <= maxMileage[0];
      const matchesTransmission = selectedTransmissions.length === 0 || selectedTransmissions.includes(vehicle.transmission);
      const matchesFuelType = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(vehicle.fuelType);

      return matchesSearch && matchesMake && matchesModel && matchesPrice && matchesMileage && matchesTransmission && matchesFuelType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "mileage-low":
          return (a.mileage || 0) - (b.mileage || 0);
        case "mileage-high":
          return (b.mileage || 0) - (a.mileage || 0);
        case "year-new":
          return b.year - a.year;
        case "year-old":
          return a.year - b.year;
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedMake("");
    setSelectedModel("");
    setPriceRange([0, 60000]);
    setMaxMileage([50000]);
    setSelectedTransmissions([]);
    setSelectedFuelTypes([]);
  };

  const toggleTransmission = (transmission: string) => {
    setSelectedTransmissions(prev =>
      prev.includes(transmission)
        ? prev.filter(t => t !== transmission)
        : [...prev, transmission]
    );
  };

  const toggleFuelType = (fuelType: string) => {
    setSelectedFuelTypes(prev =>
      prev.includes(fuelType)
        ? prev.filter(f => f !== fuelType)
        : [...prev, fuelType]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Inventory</h1>
          <p className="text-gray-600">
            Browse our complete selection of quality pre-owned vehicles. Use the filters below to find your perfect match.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? "Hide" : "Show"} Filters
            </Button>
          </div>

          {/* Sidebar - Filters */}
          <div className={`lg:w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Filters</CardTitle>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Search by make, model, or year..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Make */}
                <div>
                  <Label htmlFor="make">Make</Label>
                  <Select value={selectedMake} onValueChange={setSelectedMake}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Make" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any Make</SelectItem>
                      {makes.map(make => (
                        <SelectItem key={make} value={make}>{make}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Model */}
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any Model</SelectItem>
                      {models.map(model => (
                        <SelectItem key={model} value={model}>{model}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <Label>Price Range</Label>
                  <div className="px-2 py-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={60000}
                      step={1000}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Max Mileage */}
                <div>
                  <Label>Maximum Mileage</Label>
                  <div className="px-2 py-4">
                    <Slider
                      value={maxMileage}
                      onValueChange={setMaxMileage}
                      max={50000}
                      step={5000}
                      className="w-full"
                    />
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Up to {maxMileage[0].toLocaleString()} miles
                  </div>
                </div>

                {/* Transmission */}
                <div>
                  <Label>Transmission</Label>
                  <div className="space-y-2 mt-2">
                    {transmissions.map(transmission => (
                      <div key={transmission} className="flex items-center space-x-2">
                        <Checkbox
                          id={`transmission-${transmission}`}
                          checked={selectedTransmissions.includes(transmission)}
                          onCheckedChange={() => toggleTransmission(transmission)}
                        />
                        <Label htmlFor={`transmission-${transmission}`} className="text-sm">
                          {transmission}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <Label>Fuel Type</Label>
                  <div className="space-y-2 mt-2">
                    {fuelTypes.map(fuelType => (
                      <div key={fuelType} className="flex items-center space-x-2">
                        <Checkbox
                          id={`fuel-${fuelType}`}
                          checked={selectedFuelTypes.includes(fuelType)}
                          onCheckedChange={() => toggleFuelType(fuelType)}
                        />
                        <Label htmlFor={`fuel-${fuelType}`} className="text-sm">
                          {fuelType}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? 's' : ''} Found
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                    <SelectItem value="mileage-high">Mileage: High to Low</SelectItem>
                    <SelectItem value="year-new">Year: Newest First</SelectItem>
                    <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Vehicle Grid */}
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map(vehicle => (
                  <VehicleCard key={vehicle.id} {...vehicle} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to see more results.
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}