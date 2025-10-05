import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SearchBar } from "@/components/SearchBar";
import { FeaturedVehicles } from "@/components/FeaturedVehicles";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SearchBar />
      <FeaturedVehicles />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}