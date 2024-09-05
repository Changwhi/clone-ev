"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Zap,
  Droplet,
} from "lucide-react";

type VehicleType = "Truck" | "SUV" | "Sedan";

interface VehicleInfo {
  type: VehicleType;
  mpg: number;
  icon: React.ReactNode;
}

const vehicleTypes: VehicleInfo[] = [
  { type: "Truck", mpg: 18, icon: <span className="text-2xl">🚚</span> },
  { type: "SUV", mpg: 20, icon: <span className="text-2xl">🚙</span> },
  { type: "Sedan", mpg: 29, icon: <span className="text-2xl">🚗</span> },
];

export default function EVCalculator() {
  const [listedPrice, setListedPrice] = useState(40000);
  const [apr, setApr] = useState(5);
  const [downPayment, setDownPayment] = useState(20);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [loanTerm, setLoanTerm] = useState(60);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>("Sedan");

  const calculateMonthlyPayment = () => {
    const loanAmount =
      listedPrice - listedPrice * (downPayment / 100) - tradeInValue;
    const monthlyInterestRate = apr / 12 / 100;
    const numberOfPayments = loanTerm;
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    return Math.round(monthlyPayment);
  };

  const monthlyPayment = calculateMonthlyPayment();

  const electricityCost = 406;
  const gasolineCost = 1344;
  const savings = gasolineCost - electricityCost;

  return (
    <div className="bg-sky-50 p-8 rounded-lg">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Calculate your monthly vehicle payment
          </h2>
          <p className="mb-6 text-gray-600">
            Find out why EV ownership has cheaper running costs than a
            gasoline-powered vehicle.
          </p>

          {/* <div className="space-y-4">
            <div>
              <label htmlFor="listedPrice" className="block text-sm font-medium text-gray-700">Listed price</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="listedPrice"
                  id="listedPrice"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  value={listedPrice}
                  onChange={(e) => setListedPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <label htmlFor="apr" className="block text-sm font-medium text-gray-700">Est. APR %</label>
              <input
                type="number"
                name="apr"
                id="apr"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={apr}
                onChange={(e) => setApr(Number(e.target.value))}
              />
            </div>

            <div>
              <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">Down Payment %</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="downPayment"
                  id="downPayment"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="tradeInValue" className="block text-sm font-medium text-gray-700">Est. Trade-In Value</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="tradeInValue"
                  id="tradeInValue"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  value={tradeInValue}
                  onChange={(e) => setTradeInValue(Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">Loan Term</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                {[36, 48, 60, 72, 84].map((term) => (
                  <button
                    key={term}
                    onClick={() => setLoanTerm(term)}
                    className={`${
                      loanTerm === term
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    } flex-1 py-2 px-4 text-sm font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-200">
            Search your budget
          </button> */}
        </div>

        <div className="flex flex-col gap-5">
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Estimated Budget</h3>
            <p className="text-4xl font-bold">${monthlyPayment}/mo</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Listed price</span>
                <span>${listedPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly budget</span>
                <span>${monthlyPayment}/mo</span>
              </div>
              <div className="flex justify-between">
                <span>Down Payment</span>
                <span>-${(listedPrice * (downPayment / 100)).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Trade-In Value</span>
                <span>${tradeInValue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${(listedPrice - (listedPrice * (downPayment / 100)) - tradeInValue).toLocaleString()} or ${monthlyPayment}/mo</span>
              </div>
            </div>
          </div> */}

          <div className="bg-white p-6 rounded-lg shadow-md felx flex-col">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cost to drive</h3>
              <div className="flex justify-between items-center mb-4">
                <span>Time period</span>
                <button className="flex items-center text-gray-600">
                  5 years
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="mb-4">
                <button className="text-blue-600 flex items-center">
                  Edit vehicle efficiency
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="flex space-x-4 mb-6">
                {vehicleTypes.map((vehicle) => (
                  <button
                    key={vehicle.type}
                    onClick={() => setSelectedVehicle(vehicle.type)}
                    className={`flex-1 p-4 rounded-lg flex flex-col items-center justify-center ${
                      selectedVehicle === vehicle.type
                        ? "bg-teal-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {vehicle.icon}
                    <span className="mt-2 font-medium">{vehicle.type}</span>
                    <span className="text-sm">{vehicle.mpg} MPG</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">
                Savings over 5 years: ${savings * 5}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-teal-500 mr-2" />
                  <span>Electricity cost per year</span>
                  <span className="ml-auto bg-teal-500 text-white px-2 py-1 rounded">
                    ${electricityCost}/year
                  </span>
                </div>
                <div className="flex items-center">
                  <Droplet className="h-5 w-5 text-gray-500 mr-2" />
                  <span>Gasoline cost per year</span>
                  <span className="ml-auto bg-gray-800 text-white px-2 py-1 rounded">
                    ${gasolineCost}/year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        <button className="p-2 rounded-full border border-gray-300">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button className="p-2 rounded-full border border-gray-300">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
