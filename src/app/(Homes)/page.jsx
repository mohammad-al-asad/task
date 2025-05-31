import HeroSection from "@/components/HeroSection";
import CatagorySection from "@/components/CatagorySection";
import PopularItems from "@/components/PopularItems";
import FoodCards from "@/components/FoodCards";
import RestaurentCards from "@/components/RestaurentCards";
import MobileApp from "@/components/MobileApp";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CatagorySection/>
      <PopularItems itemTitle="Food Near me">
        <FoodCards/>
      </PopularItems>
      <PopularItems itemTitle="Restaurent Near me">
        <RestaurentCards/>
      </PopularItems>
      <MobileApp/>
      <div className="flex justify-center">
        <TestimonialSection/>
      </div>
    </div>
  );
}
