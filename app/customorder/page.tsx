"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RangeComponent from "@/components/range";
import Footer from "@/components/footer";

export default function CarDetailsPage() {
  const [selectedColor, setSelectedColor] = React.useState("white");
  const [selectedTrim, setSelectedTrim] = React.useState("standard");

  const trimClasses: { [key: string]: number } = {
    standard: 74375,
    Advanced_Sedan: 78375,
    More_advanced: 84375,
  };

  const colorClasses: { [key: string]: string } = {
    gray: "bg-gray-500",
    white: "bg-white",
    black: "bg-black",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
  };
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">EV.com</a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li>
              <a
                href="#inventory"
                className="hover:text-blue-600 pointer-events-none"
              >
                Inventory
              </a>
            </li>
            <li>
              <a href="/customorder" className="hover:text-blue-600">
                Custom Order
              </a>
            </li>
            <li>
              <a
                href="#compare-ev"
                className="hover:text-blue-600 pointer-events-none"
              >
                Compare EV
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="hover:text-blue-600 pointer-events-none"
              >
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Car Image */}
          <div className="lg:w-2/3">
            <div className="relative">
              <Image
                src={
                  selectedColor === "white"
                    ? "/a1.png"
                    : selectedColor === "black"
                    ? "/a2.png"
                    : "/a3.png"
                }
                alt="Electrified G80"
                width={800}
                height={400}
                className="rounded-lg pt-16"
              />
              <Button variant="outline" className="absolute top-4 left-4">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Right Column - Car Details */}
          <div className="lg:w-1/3 space-y-6">
            <h1 className="text-3xl font-bold">Electrified G80</h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Est. range</p>
                <p className="font-semibold">282 mi</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Horsepower</p>
                <p className="font-semibold">365 hp</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Starting MSRP*</p>
              {/* Display the dynamically updated price */}
              <p className="text-2xl font-bold">
                ${formatPrice(trimClasses[selectedTrim])}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Est. Savings</p>
              <p className="font-semibold">$0</p>
            </div>

            {/* Trim Buttons */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Available trims</p>
              <div className="flex space-x-2">
                {Object.keys(trimClasses).map((trim) => (
                  <Button
                    key={trim}
                    onClick={() => setSelectedTrim(trim)}
                    className={`py-2 px-4 rounded-md ${
                      selectedTrim === trim
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {trim.replace("_", " ")}
                  </Button>
                ))}
              </div>
            </div>
            {/* Color Buttons */}

            <div className="flex space-x-2">
              <p className="text-sm text-gray-500">Available color</p>
              {/* {["gray", "white", "black", "blue", "green", "red"].map( */}
              {["white", "black", "gray"].map((color) => (
                <Button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full ${colorClasses[color]} border border-gray-300`}
                />
              ))}
            </div>
            <Button className="w-full">Custom Order</Button>
          </div>
        </div>
        {/* menu section */}
        <div className="flex justify-center mt-24 mb-16">
          <div className="flex flex-row gap-8">
            <p className="text-md font-semibold text-gray-500">Key feature</p>
            <p className="text-md font-semibold text-gray-500">Range</p>
            <p className="text-md font-semibold text-gray-500">Rating</p>
            <p className="text-md font-semibold text-gray-500">Trim</p>
          </div>
        </div>
        <hr />
        {/* Tabs Section */}

        <div className="flex flex-col gap-8 mt-8">
          <p className="text-2xl font-semibold">Highlights</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold">282 - 282 mi</p>
              <p className="text-sm text-gray-500">EPA Est. Range</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">87.2 kWh</p>
              <p className="text-sm text-gray-500">Battery Size</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">22 min</p>
              <p className="text-sm text-gray-500">10% to 80% Charge</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">AWD</p>
              <p className="text-sm text-gray-500">Drivetrain</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">5</p>
              <p className="text-sm text-gray-500">Seats</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Whiel size</p>
            <p className="text-lg">19 Inch</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="text-lg">Battery warranty</p>
            <p className="text-lg">120 month/100000 miles</p>
          </div>
          <p className="self-end text-blue-500">View full list {">"}</p>
          <hr />
        </div>

        {/* Range Map */}
        <div className="mt-12">
          <RangeComponent />
        </div>

        {/* Specs Section */}
        <div className="mt-12 p-24">
          <h2 className="text-2xl font-bold mb-10">Specs</h2>
          <div className="space-y-4 text-lg">
            <div>
              <h3 className="font-semibold">Drive Train</h3>
              <div className="">
                <div className="my-5 flex justify-between">
                  <p>Horsepower</p>
                  <p>
                    <strong>365</strong>hp
                  </p>
                </div>
                <hr />
                <div className="my-5 flex justify-between">
                  <p>Torque</p>
                  <p>
                    <strong>516</strong>lb-ft
                  </p>
                </div>
                <hr />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mt-10">Charging</h3>
              <div className="my-5 flex justify-between">
                <p className="">DC Charging time</p>
                <p>
                  <strong>1.15</strong> kW
                </p>
              </div>
              <hr />
            </div>
            <div>
              <h3 className="font-semibold mt-10">Cabin Capacity</h3>
              <div className="my-5 flex justify-between">
                <p className="">Body Type</p>
                <p className="">
                  <strong>4dr Car</strong>
                </p>
              </div>
              <hr />
              <div className="my-5 flex justify-between">
                <p className="">Max Seating</p>
                <p>
                  <strong>5</strong>
                </p>
              </div>
              <hr />
              <div className="my-5 flex justify-between">
                <p className="">Cargo Capacity</p>
                <p>
                  <strong>N/A</strong>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
