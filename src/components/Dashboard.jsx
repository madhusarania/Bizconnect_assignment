import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      {/* Sidebar space (You can replace this with your actual Sidebar component) */}
      <div className="w-64 bg-gray-900 text-white hidden md:block">
        {/* Sidebar Content */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 lg:p-12 w-full max-w-screen-xl mx-auto">
        {/* Overview Header */}
        <h1 className="text-2xl font-bold mb-6">Overview</h1>

        {/* Top Cards: Balance, Income, Expenses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-black text-white p-6 rounded-lg shadow-md min-w-[300px]">
            <h3 className="text-gray-300 text-sm">Current Balance</h3>
            <p className="text-3xl font-bold">$4,836.00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <h3 className="text-gray-500 text-sm">Income</h3>
            <p className="text-3xl font-bold">$3,814.25</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <h3 className="text-gray-500 text-sm">Expenses</h3>
            <p className="text-3xl font-bold">$1,700.50</p>
          </div>
        </div>

        {/* Bottom Section: Pots, Budgets, Transactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Pots */}
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 text-sm">Pots</h3>
              <a href="#" className="text-blue-500 text-sm">
                See Details &gt;
              </a>
            </div>
            <p className="text-3xl font-bold">$850</p>
            <ul className="mt-4 text-gray-600 text-sm">
              <li>
                Savings <span className="float-right">$159</span>
              </li>
              <li>
                Gift <span className="float-right">$40</span>
              </li>
              <li>
                Concert Ticket <span className="float-right">$110</span>
              </li>
              <li>
                New Laptop <span className="float-right">$10</span>
              </li>
            </ul>
          </div>

          {/* Budgets */}
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 text-sm">Budgets</h3>
              <a href="#" className="text-blue-500 text-sm">
                See Details &gt;
              </a>
            </div>
            <div className="flex items-center justify-center my-4">
              <div className="w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center text-lg font-bold">
                $338
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">of $975 limit</p>
            <ul className="mt-4 text-gray-600 text-sm">
              <li>
                Entertainment <span className="float-right">$50.00</span>
              </li>
              <li>
                Bills <span className="float-right">$750.00</span>
              </li>
              <li>
                Dining Out <span className="float-right">$75.00</span>
              </li>
              <li>
                Personal Care <span className="float-right">$100.00</span>
              </li>
            </ul>
          </div>

          {/* Transactions */}
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 text-sm">Transactions</h3>
              <a href="#" className="text-blue-500 text-sm">
                View All &gt;
              </a>
            </div>
            <ul className="mt-4 text-gray-600 text-sm">
              <li className="flex justify-between">
                Emma Richardson <span className="text-green-500">+ $75.50</span>
              </li>
              <li className="flex justify-between">
                Savory Bites Bistro{" "}
                <span className="text-red-500">- $55.50</span>
              </li>
              <li className="flex justify-between">
                Daniel Carter <span className="text-red-500">- $42.30</span>
              </li>
              <li className="flex justify-between">
                Sun Park <span className="text-green-500">+ $120.00</span>
              </li>
              <li className="flex justify-between">
                Urban Services Hub{" "}
                <span className="text-red-500">- $65.00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recurring Bills */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full lg:w-1/3 min-w-[300px]">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">Recurring Bills</h3>
            <a href="#" className="text-blue-500 text-sm">
              See Details &gt;
            </a>
          </div>
          <ul className="mt-4 text-gray-600 text-sm">
            <li>
              Paid Bills <span className="float-right">$190.00</span>
            </li>
            <li>
              Total Upcoming <span className="float-right">$194.98</span>
            </li>
            <li>
              Due Soon <span className="float-right">$59.98</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
