import { Button } from "@/components/ui/button";
import CarCard from "@/components/carCard";
import Image from "next/image";
import CompareAndIncentives from "@/components/compareAndIncentives";
import EVCalculator from "@/components/paymentAndCompare/paymentCalculator";
import CompareAndCalculator from "@/components/shopNowAndSave";
import PaymentCalculator from "@/components/paymentAndCompare/paymentCalculator";
import EvComparison from "@/components/evCalculator";
import ShopCategories from "@/components/paymentAndCompare";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">EV.com</a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li>
              <a href="#inventory" className="hover:text-blue-600 pointer-events-none">
                Inventory
              </a>
            </li>
            <li>
              <a href="/customorder" className="hover:text-blue-600">
                Custom Order
              </a>
            </li>
            <li>
              <a href="#compare-ev" className="hover:text-blue-600 pointer-events-none">
                Compare EV
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-blue-600 pointer-events-none">
                News
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <div>
            <Button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700">
              Login
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-black ">
          <video
            autoPlay
            playsInline
            loop
            muted
            src="https://homepage-hero-videos.s3.amazonaws.com/hero-video-desktop.mp4"
            className="h-full w-full object-cover"
            aria-label="home page background video"
          >
            <track kind="captions" src="" label="English" default />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">EV for All</h1>
          <p className="mt-4 text-lg">
            Shop electric cars from our trusted partners
          </p>
          <div className="flex mt-6">
            <select className="mr-4 p-3 bg-white text-black rounded-md">
              <option value="">All Makes</option>
            </select>
            <select className="mr-4 p-3 bg-white text-black rounded-md">
              <option value="">Select Model</option>
            </select>
            <Button variant="default" className="px-6 py-3">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Shop by Popularity Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Shop by Popularity</h2>
        <div className="flex justify-center mt-8 space-x-4">
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </section>
      {/* Compare and incentive Section */}

      <section className="py-16 bg-white">
        <EVCalculator/>
      </section>

      {/* EV calculator Section */}

      <section className="py-16 bg-white">
        <CompareAndCalculator />
      </section>
      {/* Shop Now and Save Section */}
      <section className="py-16 bg-white">
        <CompareAndCalculator />
      </section>

      {/* Shop Now Section */}
      <section className="py-16 bg-gray-100">
      <ShopCategories />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
