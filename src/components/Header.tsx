"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">LUXURY MOTORS</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">NEW CARS</Link>
          <Link href="/inventory" className="hover:text-gray-300 transition-colors">USED CARS</Link>
          <Link href="/service" className="hover:text-gray-300 transition-colors">SERVICE</Link>
          <Link href="/financing" className="hover:text-gray-300 transition-colors">FINANCING</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">CONTACT US</Link>
          <Button
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-4 py-2"
          >
            CALL
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-300 transition-colors">NEW CARS</Link>
            <Link href="/inventory" className="hover:text-gray-300 transition-colors">USED CARS</Link>
            <Link href="/service" className="hover:text-gray-300 transition-colors">SERVICE</Link>
            <Link href="/financing" className="hover:text-gray-300 transition-colors">FINANCING</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">CONTACT US</Link>
            <Button
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-fit"
            >
              CALL
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}