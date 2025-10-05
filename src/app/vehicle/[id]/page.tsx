"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Share2, Phone, Mail } from "lucide-react";

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loanAmount, setLoanAmount] = useState("45000");
  const [downPayment, setDownPayment] = useState("5000");
  const [loanTerm, setLoanTerm] = useState("60");
  const [interestRate, setInterestRate] = useState("6.5");

  // Mock vehicle data - in a real app, this would be fetched based on the ID
  const vehicle = {
    id: params.id,
    make: "BMW",
    model: "X3 xDrive",
    year: 2024,
    price: 48500,
    mileage: 5200,
    transmission: "Automatic",
    fuelType: "Gasoline",
    vin: "WBAXF13C11G123456",
    stock: "BM2024001",
    exteriorColor: "Mineral White Metallic",
    interiorColor: "Black SensaTec",
    engine: "2.0L TwinPower Turbo",
    drivetrain: "All-Wheel Drive",
    features: [
      "Premium Package",
      "Technology Package",
      "Panoramic Moonroof",
      "Heated Seats",
      "Navigation System",
      "Backup Camera",
      "Keyless Entry",
      "Bluetooth"
    ],
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  };

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numPayments = parseFloat(loanTerm);

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
                          (Math.pow(1 + monthlyRate, numPayments) - 1);

    return isNaN(monthlyPayment) ? 0 : monthlyPayment;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Inventory
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="secondary">Stock #{vehicle.stock}</Badge>
                <span className="text-gray-600">VIN: {vehicle.vin}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">${vehicle.price.toLocaleString()}</div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={vehicle.images[currentImageIndex]}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded border-2 overflow-hidden ${
                          currentImageIndex === index ? "border-primary" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Details */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Mileage</div>
                    <div className="font-semibold">{vehicle.mileage.toLocaleString()} miles</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Transmission</div>
                    <div className="font-semibold">{vehicle.transmission}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Fuel Type</div>
                    <div className="font-semibold">{vehicle.fuelType}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Engine</div>
                    <div className="font-semibold">{vehicle.engine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Drivetrain</div>
                    <div className="font-semibold">{vehicle.drivetrain}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Exterior Color</div>
                    <div className="font-semibold">{vehicle.exteriorColor}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Interior Color</div>
                    <div className="font-semibold">{vehicle.interiorColor}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Features & Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="justify-start">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Financing Calculator and Contact */}
          <div className="space-y-6">
            {/* Financing Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Financing Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="downPayment">Down Payment</Label>
                  <Input
                    id="downPayment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="loanTerm">Loan Term (months)</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="48">48 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                      <SelectItem value="72">72 months</SelectItem>
                      <SelectItem value="84">84 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ${calculateMonthlyPayment().toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Apply for Financing
                </Button>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Interested in this vehicle? Our sales team is ready to help you.
                </p>

                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (555) 123-CARS
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Schedule Test Drive
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  Mon-Sat: 9AM-8PM | Sunday: 11AM-6PM
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}