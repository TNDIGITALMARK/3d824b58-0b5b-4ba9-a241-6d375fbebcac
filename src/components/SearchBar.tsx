"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchBar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <section className="bg-white py-8 shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-end max-w-4xl mx-auto">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">MAKE</label>
            <Select value={make} onValueChange={setMake}>
              <SelectTrigger>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="ford">Ford</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
                <SelectItem value="lexus">Lexus</SelectItem>
                <SelectItem value="acura">Acura</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">MODEL</label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accord">Accord</SelectItem>
                <SelectItem value="camry">Camry</SelectItem>
                <SelectItem value="f150">F-150</SelectItem>
                <SelectItem value="x3">X3</SelectItem>
                <SelectItem value="civic">Civic</SelectItem>
                <SelectItem value="corolla">Corolla</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">PRICE RANGE</label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-25000">Under $25,000</SelectItem>
                <SelectItem value="25000-35000">$25,000 - $35,000</SelectItem>
                <SelectItem value="35000-50000">$35,000 - $50,000</SelectItem>
                <SelectItem value="50000+">$50,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-sm"
          >
            SEARCH
          </Button>
        </div>
      </div>
    </section>
  );
}