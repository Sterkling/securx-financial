"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

const businessTypes = [
  { value: "bar", label: "Bar / Nightclub", avgTransactions: 25 },
  { value: "convenience", label: "Convenience Store", avgTransactions: 20 },
  { value: "restaurant", label: "Restaurant", avgTransactions: 15 },
  { value: "gas-station", label: "Gas Station", avgTransactions: 22 },
  { value: "other", label: "Other Business", avgTransactions: 18 },
];

export default function RevenueCalculator() {
  const [businessType, setBusinessType] = useState(businessTypes[0].value);
  const [dailyFootTraffic, setDailyFootTraffic] = useState(100);
  const [daysPerWeek, setDaysPerWeek] = useState(7);

  const selectedBusiness = businessTypes.find((b) => b.value === businessType);
  
  const surchargePerTransaction = 3.00;
  const conversionRate = 0.15;
  
  const dailyTransactions = Math.floor(dailyFootTraffic * conversionRate);
  const monthlyTransactions = dailyTransactions * daysPerWeek * 4.33;
  const monthlyRevenue = Math.floor(monthlyTransactions * surchargePerTransaction * 0.5);

  return (
    <div id="calculator" className="bg-gradient-to-br from-black to-gray-900 p-8 lg:p-12 rounded-2xl shadow-2xl">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="text-blue" size={32} />
        <h3 className="text-white font-heading text-3xl uppercase">
          Revenue Calculator
        </h3>
      </div>

      <p className="text-gray text-base mb-8">
        See how much passive income your business could generate with a SecurX ATM.
      </p>

      <div className="space-y-6">
        {/* Business Type */}
        <div>
          <label htmlFor="businessType" className="block text-white font-semibold mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue"
          >
            {businessTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Daily Foot Traffic */}
        <div>
          <label htmlFor="footTraffic" className="block text-white font-semibold mb-2">
            Daily Foot Traffic: <span className="text-blue">{dailyFootTraffic}</span>
          </label>
          <input
            type="range"
            id="footTraffic"
            min="20"
            max="500"
            step="10"
            value={dailyFootTraffic}
            onChange={(e) => setDailyFootTraffic(Number(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue"
          />
          <div className="flex justify-between text-gray text-xs mt-1">
            <span>20</span>
            <span>500+</span>
          </div>
        </div>

        {/* Days Per Week */}
        <div>
          <label htmlFor="daysPerWeek" className="block text-white font-semibold mb-2">
            Days Open Per Week: <span className="text-blue">{daysPerWeek}</span>
          </label>
          <input
            type="range"
            id="daysPerWeek"
            min="3"
            max="7"
            step="1"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(Number(e.target.value))}
            className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue"
          />
          <div className="flex justify-between text-gray text-xs mt-1">
            <span>3 days</span>
            <span>7 days</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-10 pt-8 border-t border-gray-700">
        <div className="text-center">
          <p className="text-gray text-sm uppercase tracking-wider mb-2">
            Estimated Monthly Revenue
          </p>
          <div className="text-6xl lg:text-7xl font-heading text-blue mb-4">
            ${monthlyRevenue.toLocaleString()}
          </div>
          <p className="text-gray text-sm mb-6">
            Based on {Math.floor(monthlyTransactions)} estimated monthly transactions
          </p>
          <div className="bg-blue/10 border border-blue/30 rounded-lg p-4">
            <p className="text-white text-sm">
              <span className="font-semibold">How it works:</span> You earn 50% of the surcharge revenue. With an avg. ${surchargePerTransaction.toFixed(2)} surcharge per transaction, your share is ${(surchargePerTransaction * 0.5).toFixed(2)}.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors"
        >
          Get Started — It's Free
        </a>
      </div>
    </div>
  );
}
