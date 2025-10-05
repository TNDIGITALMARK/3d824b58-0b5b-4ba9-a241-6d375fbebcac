"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VehicleCardProps {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage?: number;
  transmission: string;
  fuelType: string;
}

export function VehicleCard({
  id,
  make,
  model,
  year,
  price,
  image,
  mileage,
  transmission,
  fuelType
}: VehicleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] bg-gray-100">
        <img
          src={image}
          alt={`${year} ${make} ${model}`}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-gray-900">
            {year} {make} {model}
          </h3>
          <p className="text-2xl font-bold text-primary">
            ${price.toLocaleString()}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
          {mileage && (
            <div>
              <span className="block font-medium">{mileage.toLocaleString()}</span>
              <span className="text-xs">Miles</span>
            </div>
          )}
          <div>
            <span className="block font-medium">{transmission}</span>
            <span className="text-xs">Transmission</span>
          </div>
          <div>
            <span className="block font-medium">{fuelType}</span>
            <span className="text-xs">Fuel Type</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/vehicle/${id}`} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
            >
              VIEW DETAILS
            </Button>
          </Link>
          <Button
            className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            size="sm"
          >
            CONTACT
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}