import React from "react";

const BudgetChart = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Budget Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold text-gray-900">Budgets</h2>
        <button className="text-sm text-teal-600 hover:underline">
          See Details →
        </button>

        {/* Circular Budget Progress */}
        <div className="relative w-40 h-40 mx-auto my-6">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="10"
              className="fill-none stroke-gray-200"
            />
            {/* Progress Circle (Dynamic via Tailwind) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="10"
              className="fill-none stroke-blue-500"
              strokeDasharray="250"
              strokeDashoffset="100"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">$338</p>
            <p className="text-sm text-gray-500">of $975 limit</p>
          </div>
        </div>

        {/* Budget Categories */}
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Entertainment</span>
            <span className="font-semibold">$50.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Bills</span>
            <span className="font-semibold">$750.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Dining Out</span>
            <span className="font-semibold">$75.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Personal Care</span>
            <span className="font-semibold">$100.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;
