"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LUXURY MOTORS</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium vehicles. We offer exceptional service,
              competitive financing, and a wide selection of quality cars.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin size={16} />
              <span>123 Car Sales Boulevard, City, ST 12345</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">New Cars</Link></li>
              <li><Link href="/inventory" className="hover:text-white transition-colors">Used Cars</Link></li>
              <li><Link href="/financing" className="hover:text-white transition-colors">Financing</Link></li>
              <li><Link href="/service" className="hover:text-white transition-colors">Service Center</Link></li>
              <li><Link href="/trade-in" className="hover:text-white transition-colors">Trade-In</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/warranty" className="hover:text-white transition-colors">Extended Warranty</Link></li>
              <li><Link href="/maintenance" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
              <li><Link href="/parts" className="hover:text-white transition-colors">Genuine Parts</Link></li>
              <li><Link href="/collision" className="hover:text-white transition-colors">Collision Repair</Link></li>
              <li><Link href="/rental" className="hover:text-white transition-colors">Vehicle Rental</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-CARS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@luxurymotors.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock size={16} className="mt-1" />
                <div>
                  <div>Mon-Sat: 9AM-8PM</div>
                  <div>Sunday: 11AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Luxury Motors. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}