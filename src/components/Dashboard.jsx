// // // // // // import React from "react";
// // // // // // import Sidebar from "./Sidebar";
// // // // // // import Header from "./Header";
// // // // // // import Card from "./Card";
// // // // // // import List from "./List";
// // // // // // import ChartCard from "./ChartCard";

// // // // // // const Dashboard = () => {
// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // // //       <div className="flex">
// // // // // //         <Sidebar />
// // // // // //         <main className="w-3/4 p-6">
// // // // // //           <Header title="Overview" />
// // // // // //           <div className="grid grid-cols-3 gap-6">
// // // // // //             <Card title="Current Balance" amount="$4,836.00" />
// // // // // //             <Card title="Income" amount="$3,814.25" />
// // // // // //             <Card title="Expenses" amount="$1,700.50" />
// // // // // //           </div>
// // // // // //           <div className="grid grid-cols-2 gap-6 mt-6">
// // // // // //             <ChartCard title="Income vs Expenses" />
// // // // // //             <List
// // // // // //               title="Pots"
// // // // // //               total="Total Saved $850"
// // // // // //               items={[
// // // // // //                 "Savings: $159",
// // // // // //                 "Concert Ticket: $110",
// // // // // //                 "Gift: $40",
// // // // // //                 "New Laptop: $10",
// // // // // //               ]}
// // // // // //             />
// // // // // //           </div>
// // // // // //           <List
// // // // // //             title="Budgets"
// // // // // //             total="$338 of $975 limit"
// // // // // //             items={[
// // // // // //               "Entertainment: $50.00",
// // // // // //               "Bills: $750.00",
// // // // // //               "Dining Out: $75.00",
// // // // // //               "Personal Care: $100.00",
// // // // // //             ]}
// // // // // //           />
// // // // // //           <List
// // // // // //             title="Transactions"
// // // // // //             items={[
// // // // // //               "Emma Richardson: +$75.50 on 19 Aug 2024",
// // // // // //               "Savory Bites Bistro: -$55.50 on 19 Aug 2024",
// // // // // //               "Daniel Carter: -$42.30 on 18 Aug 2024",
// // // // // //               "Sun Park: +$120.00 on 17 Aug 2024",
// // // // // //               "Urban Services Hub: -$65.00 on 17 Aug 2024",
// // // // // //             ]}
// // // // // //           />
// // // // // //           <List
// // // // // //             title="Recurring Bills"
// // // // // //             items={[
// // // // // //               "Paid Bills: $190.00",
// // // // // //               "Total Upcoming: $194.98",
// // // // // //               "Due Soon: $59.98",
// // // // // //             ]}
// // // // // //           />
// // // // // //         </main>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Dashboard;
// // // // // import React from "react";
// // // // // import Sidebar from "./Sidebar";
// // // // // import Header from "./Header";
// // // // // import Card from "./Card";
// // // // // import List from "./List";
// // // // // import ChartCard from "./ChartCard";

// // // // // const Dashboard = () => {
// // // // //   return (
// // // // //     <div className="flex">
// // // // //       <Sidebar />
// // // // //       <main className="w-3/4 p-6 ml-1/4">
// // // // //         {" "}
// // // // //         {/* Added ml-1/4 to account for the sidebar width */}
// // // // //         <Header title="Overview" />
// // // // //         <div className="grid grid-cols-3 gap-6">
// // // // //           <Card title="Current Balance" amount="$4,836.00" />
// // // // //           <Card title="Income" amount="$3,814.25" />
// // // // //           <Card title="Expenses" amount="$1,700.50" />
// // // // //         </div>
// // // // //         <div className="grid grid-cols-2 gap-6 mt-6">
// // // // //           <ChartCard title="Income vs Expenses" />
// // // // //           <List
// // // // //             title="Pots"
// // // // //             total="Total Saved $850"
// // // // //             items={[
// // // // //               "Savings: $159",
// // // // //               "Concert Ticket: $110",
// // // // //               "Gift: $40",
// // // // //               "New Laptop: $10",
// // // // //             ]}
// // // // //           />
// // // // //         </div>
// // // // //         <List
// // // // //           title="Budgets"
// // // // //           total="$338 of $975 limit"
// // // // //           items={[
// // // // //             "Entertainment: $50.00",
// // // // //             "Bills: $750.00",
// // // // //             "Dining Out: $75.00",
// // // // //             "Personal Care: $100.00",
// // // // //           ]}
// // // // //         />
// // // // //         <List
// // // // //           title="Transactions"
// // // // //           items={[
// // // // //             "Emma Richardson: +$75.50 on 19 Aug 2024",
// // // // //             "Savory Bites Bistro: -$55.50 on 19 Aug 2024",
// // // // //             "Daniel Carter: -$42.30 on 18 Aug 2024",
// // // // //             "Sun Park: +$120.00 on 17 Aug 2024",
// // // // //             "Urban Services Hub: -$65.00 on 17 Aug 2024",
// // // // //           ]}
// // // // //         />
// // // // //         <List
// // // // //           title="Recurring Bills"
// // // // //           items={[
// // // // //             "Paid Bills: $190.00",
// // // // //             "Total Upcoming: $194.98",
// // // // //             "Due Soon: $59.98",
// // // // //           ]}
// // // // //         />
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;
// // // // import React from "react";
// // // // import Sidebar from "./Sidebar";
// // // // import Header from "./Header";
// // // // import Card from "./Card";
// // // // import List from "./List";
// // // // import ChartCard from "./ChartCard";
// // // // import Budgets from "./Budgets";

// // // // const Dashboard = () => {
// // // //   return (
// // // //     <div className="flex h-screen">
// // // //       <Sidebar />
// // // //       <main className="p-6 ml-[25%] w-full overflow-hidden">
// // // //         {" "}
// // // //         {/* Ensure main content does not scroll */}
// // // //         <Header title="Overview" />
// // // //         {/* <div className="grid grid-cols-3 gap-6">
// // // //           <Card title="Current Balance" amount="$4,836.00" />
// // // //           <Card title="Income" amount="$3,814.25" />
// // // //           <Card title="Expenses" amount="$1,700.50" />
// // // //         </div> */}
// // // //         <div className="grid grid-cols-3 gap-6">
// // // //           <div className="bg-black text-white p-6 rounded-lg shadow">
// // // //             <h3 className="text-xl font-bold">Current Balance</h3>
// // // //             <p className="text-2xl">$4,836.00</p>
// // // //           </div>
// // // //           <div className="bg-white text-black p-6 rounded-lg shadow">
// // // //             <h3 className="text-xl font-bold">Income</h3>
// // // //             <p className="text-2xl">$3,814.25</p>
// // // //           </div>
// // // //           <div className="bg-white text-black p-6 rounded-lg shadow">
// // // //             <h3 className="text-xl font-bold">Expenses</h3>
// // // //             <p className="text-2xl">$1,700.50</p>
// // // //           </div>
// // // //         </div>
// // // //         {/* <div className="grid grid-cols-2 gap-6 mt-6">
// // // //           <ChartCard title="Income vs Expenses" />
// // // //           <List
// // // //             title="Pots"
// // // //             total="Total Saved $850"
// // // //             items={[
// // // //               "Savings: $159",
// // // //               "Concert Ticket: $110",
// // // //               "Gift: $40",
// // // //               "New Laptop: $10",
// // // //             ]}
// // // //           />
// // // //         </div> */}
// // // //         <div className="grid grid-cols-2 gap-6 mt-6">
// // // //           <div className="flex space-x-6">
// // // //             <div className="bg-white shadow-md rounded-lg p-4 w-64 flex flex-col">
// // // //               {/* Header Section */}
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <h2 className="text-lg font-bold text-gray-900">Pots</h2>
// // // //                 <button className="text-sm text-teal-600 hover:underline">
// // // //                   See Details →
// // // //                 </button>
// // // //               </div>

// // // //               {/* Total Saved Section */}
// // // //               <div className="flex items-center space-x-3 mb-4">
// // // //                 <div className="bg-teal-100 rounded-full p-2 flex items-center justify-center">
// // // //                   <svg
// // // //                     className="w-5 h-5 text-teal-500"
// // // //                     xmlns="http://www.w3.org/2000/svg"
// // // //                     fill="none"
// // // //                     viewBox="0 0 24 24"
// // // //                     stroke="currentColor"
// // // //                   >
// // // //                     <path
// // // //                       strokeLinecap="round"
// // // //                       strokeLinejoin="round"
// // // //                       strokeWidth="2"
// // // //                       d="M12 8v4l3 3"
// // // //                     />
// // // //                   </svg>
// // // //                 </div>
// // // //                 <div>
// // // //                   <p className="text-xl font-bold">$850</p>
// // // //                   <p className="text-gray-500 text-xs">Total Saved</p>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Categories Section */}
// // // //               <div>
// // // //                 <div className="flex justify-between items-center mb-2">
// // // //                   <p className="text-gray-600 text-sm">Savings</p>
// // // //                   <p className="font-semibold text-sm">$159</p>
// // // //                 </div>
// // // //                 <div className="flex justify-between items-center mb-2">
// // // //                   <p className="text-gray-600 text-sm">Concert Tickets</p>
// // // //                   <p className="font-semibold text-sm">$110</p>
// // // //                 </div>
// // // //                 <div className="flex justify-between items-center mb-2">
// // // //                   <p className="text-gray-600 text-sm">Gift</p>
// // // //                   <p className="font-semibold text-sm">$40</p>
// // // //                 </div>
// // // //                 <div className="flex justify-between items-center mb-2">
// // // //                   <p className="text-gray-600 text-sm">New Laptop</p>
// // // //                   <p className="font-semibold text-sm">$10</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Budgets Component */}
// // // //             <Budgets />
// // // //           </div>
// // // //         </div>
// // // //         <List
// // // //           title="Transactions"
// // // //           items={[
// // // //             "Emma Richardson: +$75.50 on 19 Aug 2024",
// // // //             "Savory Bites Bistro: -$55.50 on 19 Aug 2024",
// // // //             "Daniel Carter: -$42.30 on 18 Aug 2024",
// // // //             "Sun Park: +$120.00 on 17 Aug 2024",
// // // //             "Urban Services Hub: -$65.00 on 17 Aug 2024",
// // // //           ]}
// // // //         />
// // // //         <List
// // // //           title="Recurring Bills"
// // // //           items={[
// // // //             "Paid Bills: $190.00",
// // // //             "Total Upcoming: $194.98",
// // // //             "Due Soon: $59.98",
// // // //           ]}
// // // //         />
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;
// // // // import React from "react";
// // // // import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// // // // import "react-circular-progressbar/dist/styles.css";
// // // // import Sidebar from "./Sidebar";

// // // // const Dashboard = () => {
// // // //   const totalBudget = 975;
// // // //   const spentBudget = 338;
// // // //   const percentage = (spentBudget / totalBudget) * 100;

// // // //   return (
// // // //     <div className="flex h-screen bg-gray-100">
// // // //       {/* Sidebar (Fixed Position) */}
// // // //       <Sidebar />

// // // //       <div className="min-h-screen bg-gray-50 p-8">
// // // //         {/* Overview Section */}
// // // //         <h1 className="text-2xl font-bold mb-4">Overview</h1>
// // // //         <div className="grid grid-cols-3 gap-6 mb-6">
// // // //           <div className="p-6 bg-black text-white rounded-lg">
// // // //             <p className="text-sm">Current Balance</p>
// // // //             <p className="text-3xl font-bold">$4,836.00</p>
// // // //           </div>
// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <p className="text-sm text-gray-500">Income</p>
// // // //             <p className="text-3xl font-bold">$3,814.25</p>
// // // //           </div>
// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <p className="text-sm text-gray-500">Expenses</p>
// // // //             <p className="text-3xl font-bold">$1,700.50</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Grid Layout */}
// // // //         <div className="grid grid-cols-3 gap-6">
// // // //           {/* Pots Section */}
// // // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // // //             <h2 className="text-lg font-bold">Pots</h2>
// // // //             <p className="text-gray-500">Total Saved</p>
// // // //             <p className="text-3xl font-bold">$850</p>
// // // //             <div className="mt-4 space-y-2">
// // // //               <p className="flex justify-between">
// // // //                 <span>Savings</span>
// // // //                 <span>$159</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Gift</span>
// // // //                 <span>$40</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Concert Ticket</span>
// // // //                 <span>$110</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>New Laptop</span>
// // // //                 <span>$10</span>
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Budget Section */}
// // // //           <div className="p-6 bg-white shadow-md rounded-lg h-full flex flex-col items-center">
// // // //             <h2 className="text-lg font-bold self-start">Budgets</h2>
// // // //             <div className="w-32 h-32 my-4">
// // // //               <CircularProgressbar
// // // //                 value={percentage}
// // // //                 text={`$${spentBudget}`}
// // // //                 styles={buildStyles({
// // // //                   textSize: "16px",
// // // //                   textColor: "#000",
// // // //                   pathColor: "#3B82F6",
// // // //                   trailColor: "#E5E7EB",
// // // //                 })}
// // // //               />
// // // //             </div>
// // // //             <p className="text-gray-500 text-sm mb-4">
// // // //               of ${totalBudget} limit
// // // //             </p>
// // // //             <div className="w-full">
// // // //               <p className="flex justify-between">
// // // //                 <span>Entertainment</span>
// // // //                 <span>$50.00</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Bills</span>
// // // //                 <span>$750.00</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Dining Out</span>
// // // //                 <span>$75.00</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Personal Care</span>
// // // //                 <span>$100.00</span>
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Transactions Section */}
// // // //           <div className="p-6 bg-white shadow-md rounded-lg h-full">
// // // //             <h2 className="text-lg font-bold">Transactions</h2>
// // // //             <div className="mt-4 space-y-3">
// // // //               <div className="flex justify-between">
// // // //                 <span>Emma Richardson</span>
// // // //                 <span className="text-green-500">+ $75.50</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Savory Bites Bistro</span>
// // // //                 <span className="text-red-500">- $55.50</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Daniel Carter</span>
// // // //                 <span className="text-red-500">- $42.30</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Sun Park</span>
// // // //                 <span className="text-green-500">+ $120.00</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Urban Services Hub</span>
// // // //                 <span className="text-red-500">- $65.00</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Recurring Bills Section */}
// // // //           <div className="p-6 bg-white shadow-md rounded-lg col-span-3">
// // // //             <h2 className="text-lg font-bold">Recurring Bills</h2>
// // // //             <div className="mt-4 space-y-2">
// // // //               <p className="flex justify-between">
// // // //                 <span>Paid Bills</span>
// // // //                 <span>$190.00</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Total Upcoming</span>
// // // //                 <span>$194.98</span>
// // // //               </p>
// // // //               <p className="flex justify-between">
// // // //                 <span>Due Soon</span>
// // // //                 <span>$59.98</span>
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;
// // // import React from "react";
// // // import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// // // import "react-circular-progressbar/dist/styles.css";
// // // import Sidebar from "./Sidebar";

// // // const Dashboard = () => {
// // //   const totalBudget = 975;
// // //   const spentBudget = 338;
// // //   const percentage = (spentBudget / totalBudget) * 100;

// // //   return (
// // //     <div className="flex h-screen bg-gray-100">
// // //       {/* Sidebar */}
// // //       <Sidebar />

// // //       {/* Main Content (Adjusted to avoid overlap) */}
// // //       <div className="flex-1 ml-[25%] min-h-screen bg-gray-50 p-8">
// // //         <h1 className="text-2xl font-bold mb-4">Overview</h1>

// // //         {/* Top Cards */}
// // //         <div className="grid grid-cols-3 gap-6 mb-6">
// // //           <div className="p-6 bg-black text-white rounded-lg">
// // //             <p className="text-sm">Current Balance</p>
// // //             <p className="text-3xl font-bold">$4,836.00</p>
// // //           </div>
// // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // //             <p className="text-sm text-gray-500">Income</p>
// // //             <p className="text-3xl font-bold">$3,814.25</p>
// // //           </div>
// // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // //             <p className="text-sm text-gray-500">Expenses</p>
// // //             <p className="text-3xl font-bold">$1,700.50</p>
// // //           </div>
// // //         </div>

// // //         {/* Main Grid Layout */}
// // //         <div className="grid grid-cols-3 gap-6">
// // //           {/* Pots Section */}
// // //           <div className="p-6 bg-white shadow-md rounded-lg">
// // //             <h2 className="text-lg font-bold">Pots</h2>
// // //             <p className="text-gray-500">Total Saved</p>
// // //             <p className="text-3xl font-bold">$850</p>
// // //             <div className="mt-4 space-y-2">
// // //               <p className="flex justify-between">
// // //                 <span>Savings</span>
// // //                 <span>$159</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Gift</span>
// // //                 <span>$40</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Concert Ticket</span>
// // //                 <span>$110</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>New Laptop</span>
// // //                 <span>$10</span>
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Budget Section */}
// // //           <div className="p-6 bg-white shadow-md rounded-lg h-full flex flex-col items-center">
// // //             <h2 className="text-lg font-bold self-start">Budgets</h2>
// // //             <div className="w-32 h-32 my-4">
// // //               <CircularProgressbar
// // //                 value={percentage}
// // //                 text={`$${spentBudget}`}
// // //                 styles={buildStyles({
// // //                   textSize: "16px",
// // //                   textColor: "#000",
// // //                   pathColor: "#3B82F6",
// // //                   trailColor: "#E5E7EB",
// // //                 })}
// // //               />
// // //             </div>
// // //             <p className="text-gray-500 text-sm mb-4">
// // //               of ${totalBudget} limit
// // //             </p>
// // //             <div className="w-full">
// // //               <p className="flex justify-between">
// // //                 <span>Entertainment</span>
// // //                 <span>$50.00</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Bills</span>
// // //                 <span>$750.00</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Dining Out</span>
// // //                 <span>$75.00</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Personal Care</span>
// // //                 <span>$100.00</span>
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Transactions Section */}
// // //           <div className="p-6 bg-white shadow-md rounded-lg h-full">
// // //             <h2 className="text-lg font-bold">Transactions</h2>
// // //             <div className="mt-4 space-y-3">
// // //               <div className="flex justify-between">
// // //                 <span>Emma Richardson</span>
// // //                 <span className="text-green-500">+ $75.50</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span>Savory Bites Bistro</span>
// // //                 <span className="text-red-500">- $55.50</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span>Daniel Carter</span>
// // //                 <span className="text-red-500">- $42.30</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span>Sun Park</span>
// // //                 <span className="text-green-500">+ $120.00</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span>Urban Services Hub</span>
// // //                 <span className="text-red-500">- $65.00</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Recurring Bills Section */}
// // //           <div className="p-6 bg-white shadow-md rounded-lg col-span-3">
// // //             <h2 className="text-lg font-bold">Recurring Bills</h2>
// // //             <div className="mt-4 space-y-2">
// // //               <p className="flex justify-between">
// // //                 <span>Paid Bills</span>
// // //                 <span>$190.00</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Total Upcoming</span>
// // //                 <span>$194.98</span>
// // //               </p>
// // //               <p className="flex justify-between">
// // //                 <span>Due Soon</span>
// // //                 <span>$59.98</span>
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React from "react";
// // import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// // import "react-circular-progressbar/dist/styles.css";
// // import Sidebar from "./Sidebar";

// // const Dashboard = () => {
// //   const totalBudget = 975;
// //   const spentBudget = 338;
// //   const percentage = (spentBudget / totalBudget) * 100;

// //   return (
// //     <div className="flex bg-[#F6F4EE] min-h-screen">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <div className="flex-1 p-8 ml-[260px]">
// //         <h1 className="text-3xl font-semibold mb-6">Overview</h1>

// //         {/* Top Cards */}
// //         <div className="grid grid-cols-3 gap-6 mb-6">
// //           <div className="p-6 bg-black text-white rounded-lg shadow-md">
// //             <p className="text-sm text-gray-400">Current Balance</p>
// //             <p className="text-4xl font-bold">$4,836.00</p>
// //           </div>
// //           <div className="p-6 bg-white rounded-lg shadow-md">
// //             <p className="text-sm text-gray-500">Income</p>
// //             <p className="text-4xl font-bold">$3,814.25</p>
// //           </div>
// //           <div className="p-6 bg-white rounded-lg shadow-md">
// //             <p className="text-sm text-gray-500">Expenses</p>
// //             <p className="text-4xl font-bold">$1,700.50</p>
// //           </div>
// //         </div>

// //         {/* Main Grid */}
// //         <div className="grid grid-cols-3 gap-6">
// //           {/* Pots */}
// //           <div className="p-6 bg-white rounded-lg shadow-md">
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-lg font-semibold">Pots</h2>
// //               <p className="text-sm text-gray-400 cursor-pointer">
// //                 See Details &gt;
// //               </p>
// //             </div>
// //             <p className="text-gray-500 mt-2 text-sm">Total Saved</p>
// //             <p className="text-4xl font-bold">$850</p>
// //             <div className="mt-4 space-y-2 text-gray-600 text-sm">
// //               <div className="flex justify-between">
// //                 <span>Savings</span> <span>$159</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Gift</span> <span>$40</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Concert Ticket</span> <span>$110</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>New Laptop</span> <span>$10</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Budgets */}
// //           <div className="p-6 bg-white rounded-lg shadow-md text-center">
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-lg font-semibold">Budgets</h2>
// //               <p className="text-sm text-gray-400 cursor-pointer">
// //                 See Details &gt;
// //               </p>
// //             </div>
// //             <div className="w-40 h-40 mx-auto my-6">
// //               <CircularProgressbar
// //                 value={percentage}
// //                 text={`$${spentBudget}`}
// //                 styles={buildStyles({
// //                   textSize: "18px",
// //                   textColor: "#000",
// //                   pathColor: "#2563EB",
// //                   trailColor: "#E5E7EB",
// //                 })}
// //               />
// //             </div>
// //             <p className="text-gray-500 text-sm">of ${totalBudget} limit</p>
// //             <div className="mt-4 text-gray-600 text-sm">
// //               <div className="flex justify-between">
// //                 <span>Entertainment</span> <span>$50.00</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Bills</span> <span>$750.00</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Dining Out</span> <span>$75.00</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Personal Care</span> <span>$100.00</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Transactions */}
// //           <div className="p-6 bg-white rounded-lg shadow-md">
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-lg font-semibold">Transactions</h2>
// //               <p className="text-sm text-gray-400 cursor-pointer">
// //                 View All &gt;
// //               </p>
// //             </div>
// //             <div className="mt-4 text-sm">
// //               <div className="flex justify-between">
// //                 <span>Emma Richardson</span>{" "}
// //                 <span className="text-green-500">+ $75.50</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Savory Bites Bistro</span>{" "}
// //                 <span className="text-red-500">- $55.50</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Daniel Carter</span>{" "}
// //                 <span className="text-red-500">- $42.30</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Sun Park</span>{" "}
// //                 <span className="text-green-500">+ $120.00</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span>Urban Services Hub</span>{" "}
// //                 <span className="text-red-500">- $65.00</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="bg-[#F8F8F8] min-h-screen p-8 ml-64">
//       {/* Overview Header */}
//       <h1 className="text-2xl font-bold mb-6">Overview</h1>

//       {/* Top Cards: Balance, Income, Expenses */}
//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-black text-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-300 text-sm">Current Balance</h3>
//           <p className="text-3xl font-bold">$4,836.00</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-500 text-sm">Income</h3>
//           <p className="text-3xl font-bold">$3,814.25</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-500 text-sm">Expenses</h3>
//           <p className="text-3xl font-bold">$1,700.50</p>
//         </div>
//       </div>

//       {/* Bottom Section: Pots, Budgets, Transactions, Recurring Bills */}
//       <div className="grid grid-cols-3 gap-6 mt-6">
//         {/* Pots */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-500 text-sm">Pots</h3>
//             <a href="#" className="text-blue-500 text-sm">
//               See Details &gt;
//             </a>
//           </div>
//           <p className="text-3xl font-bold">$850</p>
//           <ul className="mt-4 text-gray-600 text-sm">
//             <li>
//               Savings <span className="float-right">$159</span>
//             </li>
//             <li>
//               Gift <span className="float-right">$40</span>
//             </li>
//             <li>
//               Concert Ticket <span className="float-right">$110</span>
//             </li>
//             <li>
//               New Laptop <span className="float-right">$10</span>
//             </li>
//           </ul>
//         </div>

//         {/* Budgets */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-500 text-sm">Budgets</h3>
//             <a href="#" className="text-blue-500 text-sm">
//               See Details &gt;
//             </a>
//           </div>
//           <div className="flex items-center justify-center my-4">
//             <div className="w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center text-lg font-bold">
//               $338
//             </div>
//           </div>
//           <p className="text-gray-500 text-sm text-center">of $975 limit</p>
//           <ul className="mt-4 text-gray-600 text-sm">
//             <li>
//               Entertainment <span className="float-right">$50.00</span>
//             </li>
//             <li>
//               Bills <span className="float-right">$750.00</span>
//             </li>
//             <li>
//               Dining Out <span className="float-right">$75.00</span>
//             </li>
//             <li>
//               Personal Care <span className="float-right">$100.00</span>
//             </li>
//           </ul>
//         </div>

//         {/* Transactions */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h3 className="text-gray-500 text-sm">Transactions</h3>
//             <a href="#" className="text-blue-500 text-sm">
//               View All &gt;
//             </a>
//           </div>
//           <ul className="mt-4 text-gray-600 text-sm">
//             <li className="flex justify-between">
//               Emma Richardson <span className="text-green-500">+ $75.50</span>
//             </li>
//             <li className="flex justify-between">
//               Savory Bites Bistro <span className="text-red-500">- $55.50</span>
//             </li>
//             <li className="flex justify-between">
//               Daniel Carter <span className="text-red-500">- $42.30</span>
//             </li>
//             <li className="flex justify-between">
//               Sun Park <span className="text-green-500">+ $120.00</span>
//             </li>
//             <li className="flex justify-between">
//               Urban Services Hub <span className="text-red-500">- $65.00</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Recurring Bills */}
//       <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-1/3">
//         <div className="flex justify-between items-center">
//           <h3 className="text-gray-500 text-sm">Recurring Bills</h3>
//           <a href="#" className="text-blue-500 text-sm">
//             See Details &gt;
//           </a>
//         </div>
//         <ul className="mt-4 text-gray-600 text-sm">
//           <li>
//             Paid Bills <span className="float-right">$190.00</span>
//           </li>
//           <li>
//             Total Upcoming <span className="float-right">$194.98</span>
//           </li>
//           <li>
//             Due Soon <span className="float-right">$59.98</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen p-6 md:p-8 lg:p-12 ml-64 md:ml-56 sm:ml-0 transition-all">
      {/* Overview Header */}
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      {/* Top Cards: Balance, Income, Expenses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-black text-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-300 text-sm">Current Balance</h3>
          <p className="text-3xl font-bold">$4,836.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm">Income</h3>
          <p className="text-3xl font-bold">$3,814.25</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm">Expenses</h3>
          <p className="text-3xl font-bold">$1,700.50</p>
        </div>
      </div>

      {/* Bottom Section: Pots, Budgets, Transactions, Recurring Bills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Pots */}
        <div className="bg-white p-6 rounded-lg shadow-md">
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
        <div className="bg-white p-6 rounded-lg shadow-md">
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
        <div className="bg-white p-6 rounded-lg shadow-md">
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
              Savory Bites Bistro <span className="text-red-500">- $55.50</span>
            </li>
            <li className="flex justify-between">
              Daniel Carter <span className="text-red-500">- $42.30</span>
            </li>
            <li className="flex justify-between">
              Sun Park <span className="text-green-500">+ $120.00</span>
            </li>
            <li className="flex justify-between">
              Urban Services Hub <span className="text-red-500">- $65.00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Recurring Bills */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full lg:w-1/3">
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
  );
};

export default Dashboard;
