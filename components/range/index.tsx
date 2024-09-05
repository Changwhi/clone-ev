"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const RangeComponent = () => {
  const [startingLocation, setStartingLocation] = useState("90013");
  const [tripType, setTripType] = useState<"one-way" | "round-trip">(
    "round-trip"
  );

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartingLocation(e.target.value);
  };

  return (
    <div className="container mx-auto py-8 grid grid-cols-2 justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">Range</h2>
        <p className="text-gray-500 mb-4">
          See where you can travel to with the range of Genesis Electrified G80
        </p>

        <div className="md:w-2/3 space-y-4">
          <div className="mb-4 flex justify-between">
            <p className="text-gray-700">
              <strong>Range (EPA est.)</strong>
            </p>
            <p> 283 mi</p>
          </div>
          <label
            className="block text-sm font-bold text-gray-700"
            htmlFor="starting-location"
          >
            Starting location
          </label>
          <input
            id="starting-location"
            type="text"
            value={startingLocation}
            onChange={handleLocationChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
      </div>
      {/* Left Column - Range Info */}
      <div>
        <div className="md:w-full">
          <img
            src="/map1.png"
            alt="Google Map"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <label className="text-sm text-gray-500">One Way</label>
          <input
            type="radio"
            name="trip-type"
            checked={tripType === "one-way"}
            onChange={() => setTripType("one-way")}
            className="accent-blue-500"
          />
          <label className="text-sm text-gray-500">Round Trip</label>
          <input
            type="radio"
            name="trip-type"
            checked={tripType === "round-trip"}
            onChange={() => setTripType("round-trip")}
            className="accent-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeComponent;
