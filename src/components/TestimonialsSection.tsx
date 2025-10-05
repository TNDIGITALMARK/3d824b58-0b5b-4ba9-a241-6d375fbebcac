"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Satisfied Customer",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Outstanding service from start to finish. The team helped me find the perfect car within my budget and made the financing process seamless."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Repeat Customer",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "This is my third car from Luxury Motors. Their quality and customer service are unmatched. Highly recommend to anyone looking for a reliable dealer."
  },
  {
    id: 3,
    name: "Jennifer Wong",
    title: "First-time Buyer",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "As a first-time car buyer, I was nervous about the process. The staff was patient, knowledgeable, and helped me make an informed decision."
  }
];

export function TestimonialsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">TESTIMONIALS</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white text-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{testimonial.title}</span>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700">{testimonial.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">GET IN TOUCH</h2>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your vehicle needs..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}