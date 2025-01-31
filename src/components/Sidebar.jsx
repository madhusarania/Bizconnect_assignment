// // // // // // import React from "react";
// // // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // // import {
// // // // // //   faHome,
// // // // // //   faExchangeAlt,
// // // // // //   faClipboard,
// // // // // //   faPiggyBank,
// // // // // //   faFileInvoiceDollar,
// // // // // //   faMinusSquare,
// // // // // // } from "@fortawesome/free-solid-svg-icons";

// // // // // // const Sidebar = () => {
// // // // // //   return (
// // // // // //     <aside className="w-1/4 bg-black text-white p-4 flex flex-col fixed h-screen">
// // // // // //       <h1 className="text-2xl font-bold mb-6">finance</h1>
// // // // // //       <nav className="flex-grow">
// // // // // //         <ul>
// // // // // //           <li className="mb-4 flex items-center">
// // // // // //             <FontAwesomeIcon icon={faHome} className="mr-2" /> {/* Icon */}
// // // // // //             <a href="#" className="text-green-500">
// // // // // //               Overview
// // // // // //             </a>
// // // // // //           </li>
// // // // // //           <li className="mb-4 flex items-center">
// // // // // //             <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />{" "}
// // // // // //             {/* Icon */}
// // // // // //             <a href="#">Transactions</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4 flex items-center">
// // // // // //             <FontAwesomeIcon icon={faClipboard} className="mr-2" /> {/* Icon */}
// // // // // //             <a href="#">Budgets</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4 flex items-center">
// // // // // //             <FontAwesomeIcon icon={faPiggyBank} className="mr-2" /> {/* Icon */}
// // // // // //             <a href="#">Pots</a>
// // // // // //           </li>
// // // // // //           <li className="mb-4 flex items-center">
// // // // // //             <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />{" "}
// // // // // //             {/* Icon */}
// // // // // //             <a href="#">Recurring Bills</a>
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //       </nav>
// // // // // //       <button className="mt-auto text-gray-400 flex items-center">
// // // // // //         <FontAwesomeIcon icon={faMinusSquare} className="mr-2" /> Minimize Menu
// // // // // //       </button>
// // // // // //     </aside>
// // // // // //   );
// // // // // // };

// // // // // // export default Sidebar;
// // // // // import { useState } from "react";
// // // // // import { NavLink } from "react-router-dom";

// // // // // const Sidebar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(true);

// // // // //   return (
// // // // //     <div className={${isOpen ? "w-64" : "w-20"} h-screen bg-black text-white p-6 fixed transition-all duration-300}>
// // // // //       {/* Logo */}
// // // // //       <h1 className={${isOpen ? "text-2xl font-bold mb-10" : "hidden"}}>finance</h1>

// // // // //       {/* Navigation Menu */}
// // // // //       <nav>
// // // // //         <ul className="space-y-4">
// // // // //           <NavLink to="/" className={({ isActive }) => ${isActive ? "bg-gray-900" : ""} block p-3 rounded}>
// // // // //             Overview
// // // // //           </NavLink>
// // // // //           <NavLink to="/transactions" className={({ isActive }) => ${isActive ? "bg-gray-900" : ""} block p-3 rounded}>
// // // // //             Transactions
// // // // //           </NavLink>
// // // // //           <NavLink to="/budgets" className={({ isActive }) => ${isActive ? "bg-gray-900" : ""} block p-3 rounded}>
// // // // //             Budgets
// // // // //           </NavLink>
// // // // //           <NavLink to="/pots" className={({ isActive }) => ${isActive ? "bg-gray-900" : ""} block p-3 rounded}>
// // // // //             Pots
// // // // //           </NavLink>
// // // // //           <NavLink to="/recurring-bills" className={({ isActive }) => ${isActive ? "bg-gray-900" : ""} block p-3 rounded}>
// // // // //             Recurring Bills
// // // // //           </NavLink>
// // // // //         </ul>
// // // // //       </nav>

// // // // //       {/* Minimize Button */}
// // // // //       <div
// // // // //         className="absolute bottom-6 left-6 text-gray-400 text-sm cursor-pointer"
// // // // //         onClick={() => setIsOpen(!isOpen)}
// // // // //       >
// // // // //         {isOpen ? "⬅ Minimize Menu" : "➡ Expand"}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Sidebar;
// // // // import React, { useState } from "react";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import {
// // // //   faHome,
// // // //   faExchangeAlt,
// // // //   faClipboard,
// // // //   faPiggyBank,
// // // //   faFileInvoiceDollar,
// // // //   faMinusSquare,
// // // //   faBars,
// // // // } from "@fortawesome/free-solid-svg-icons";
// // // // import { NavLink } from "react-router-dom";

// // // // const Sidebar = () => {
// // // //   const [isOpen, setIsOpen] = useState(true);

// // // //   return (
// // // //     <aside
// // // //       className={`${
// // // //         isOpen ? "w-64" : "w-20"
// // // //       } bg-black text-white p-4 flex flex-col fixed h-screen transition-all duration-300`}
// // // //     >
// // // //       {/* Logo */}
// // // //       <h1 className={${isOpen ? "text-2xl font-bold mb-6" : "hidden"}}>
// // // //         finance
// // // //       </h1>

// // // //       {/* Navigation Menu */}
// // // //       <nav className="flex-grow">
// // // //         <ul>
// // // //           <li className="mb-4 flex items-center">
// // // //             <FontAwesomeIcon icon={faHome} className="mr-2" />
// // // //             {isOpen && (
// // // //               <NavLink to="/" className="text-green-500">
// // // //                 Overview
// // // //               </NavLink>
// // // //             )}
// // // //           </li>
// // // //           <li className="mb-4 flex items-center">
// // // //             <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
// // // //             {isOpen && <NavLink to="/transactions">Transactions</NavLink>}
// // // //           </li>
// // // //           <li className="mb-4 flex items-center">
// // // //             <FontAwesomeIcon icon={faClipboard} className="mr-2" />
// // // //             {isOpen && <NavLink to="/budgets">Budgets</NavLink>}
// // // //           </li>
// // // //           <li className="mb-4 flex items-center">
// // // //             <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
// // // //             {isOpen && <NavLink to="/pots">Pots</NavLink>}
// // // //           </li>
// // // //           <li className="mb-4 flex items-center">
// // // //             <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />
// // // //             {isOpen && <NavLink to="/recurring-bills">Recurring Bills</NavLink>}
// // // //           </li>
// // // //         </ul>
// // // //       </nav>

// // // //       {/* Minimize / Expand Button */}
// // // //       <button
// // // //         className="mt-auto text-gray-400 flex items-center"
// // // //         onClick={() => setIsOpen(!isOpen)}
// // // //       >
// // // //         <FontAwesomeIcon icon={isOpen ? faMinusSquare : faBars} className="mr-2" />
// // // //         {isOpen && "Minimize Menu"}
// // // //       </button>
// // // //     </aside>
// // // //   );
// // // // };

// // // // export default Sidebar;
// // // import React, { useState } from "react";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import {
// // //   faHome,
// // //   faExchangeAlt,
// // //   faClipboard,
// // //   faPiggyBank,
// // //   faFileInvoiceDollar,
// // //   faMinusSquare,
// // //   faBars,
// // // } from "@fortawesome/free-solid-svg-icons";
// // // import { NavLink } from "react-router-dom";

// // // const Sidebar = () => {
// // //   const [isOpen, setIsOpen] = useState(true);

// // //   return (
// // //     <aside
// // //       className={`${
// // //         isOpen ? "w-64" : "w-20"
// // //       } bg-black text-white p-4 flex flex-col fixed h-screen transition-all duration-300`}
// // //     >
// // //       {/* Logo */}
// // //       <h1 className={isOpen ? "text-2xl font-bold mb-6" : "hidden"}>finance</h1>

// // //       {/* Navigation Menu */}
// // //       <nav className="flex-grow">
// // //         <ul>
// // //           <li className="mb-4 flex items-center">
// // //             <FontAwesomeIcon icon={faHome} className="mr-2" />
// // //             {isOpen && (
// // //               <NavLink
// // //                 to="/"
// // //                 exact
// // //                 className={({ isActive }) => (isActive ? "text-green-500" : "")}
// // //               >
// // //                 Overview
// // //               </NavLink>
// // //             )}
// // //           </li>
// // //           <li className="mb-4 flex items-center">
// // //             <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
// // //             {isOpen && (
// // //               <NavLink
// // //                 to="/transactions"
// // //                 className={({ isActive }) => (isActive ? "text-green-500" : "")}
// // //               >
// // //                 Transactions
// // //               </NavLink>
// // //             )}
// // //           </li>
// // //           <li className="mb-4 flex items-center">
// // //             <FontAwesomeIcon icon={faClipboard} className="mr-2" />
// // //             {isOpen && (
// // //               <NavLink
// // //                 to="/budgets"
// // //                 className={({ isActive }) => (isActive ? "text-green-500" : "")}
// // //               >
// // //                 Budgets
// // //               </NavLink>
// // //             )}
// // //           </li>
// // //           <li className="mb-4 flex items-center">
// // //             <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
// // //             {isOpen && (
// // //               <NavLink
// // //                 to="/pots"
// // //                 className={({ isActive }) => (isActive ? "text-green-500" : "")}
// // //               >
// // //                 Pots
// // //               </NavLink>
// // //             )}
// // //           </li>
// // //           <li className="mb-4 flex items-center">
// // //             <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />
// // //             {isOpen && (
// // //               <NavLink
// // //                 to="/recurring-bills"
// // //                 className={({ isActive }) => (isActive ? "text-green-500" : "")}
// // //               >
// // //                 Recurring Bills
// // //               </NavLink>
// // //             )}
// // //           </li>
// // //         </ul>
// // //       </nav>

// // //       {/* Minimize / Expand Button */}
// // //       <button
// // //         aria-label={isOpen ? "Minimize Menu" : "Expand Menu"}
// // //         title={isOpen ? "Minimize Menu" : "Expand Menu"}
// // //         className="mt-auto text-gray-400 flex items-center"
// // //         onClick={() => setIsOpen(!isOpen)}
// // //       >
// // //         <FontAwesomeIcon
// // //           icon={isOpen ? faMinusSquare : faBars}
// // //           className="mr-2"
// // //         />
// // //         {isOpen && "Minimize Menu"}
// // //       </button>
// // //     </aside>
// // //   );
// // // };

// // // export default Sidebar;
// // import React, { useState } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faHome,
// //   faExchangeAlt,
// //   faClipboard,
// //   faPiggyBank,
// //   faFileInvoiceDollar,
// //   faBars,
// //   faTimes,
// // } from "@fortawesome/free-solid-svg-icons";

// // const Sidebar = () => {
// //   const [isOpen, setIsOpen] = useState(true);

// //   return (
// //     <>
// //       <button
// //         className="absolute top-4 left-4 z-50 text-white md:hidden"
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
// //       </button>

// //       <aside
// //         className={`bg-black text-white p-4 fixed h-screen w-64 transition-transform ${
// //           isOpen ? "translate-x-0" : "-translate-x-full"
// //         } md:translate-x-0`}
// //       >
// //         <h1 className="text-2xl font-bold mb-6">finance</h1>
// //         <nav>
// //           <ul>
// //             <li className="mb-4 flex items-center">
// //               <FontAwesomeIcon icon={faHome} className="mr-2" />
// //               <a href="#" className="text-green-500">
// //                 Overview
// //               </a>
// //             </li>
// //             <li className="mb-4 flex items-center">
// //               <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
// //               <a href="#">Transactions</a>
// //             </li>
// //             <li className="mb-4 flex items-center">
// //               <FontAwesomeIcon icon={faClipboard} className="mr-2" />
// //               <a href="#">Budgets</a>
// //             </li>
// //           </ul>
// //         </nav>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faExchangeAlt,
//   faClipboard,
//   faPiggyBank,
//   faFileInvoiceDollar,
//   faBars,
//   faTimes,
//   faMinusSquare,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);

//   return (
//     <>
//       {/* Toggle Button for Mobile */}
//       <button
//         className="absolute top-4 left-4 z-50 text-black sm:hidden"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`bg-black text-white p-4 fixed h-screen ${
//           isMinimized ? "w-16" : "w-64"
//         } transition-all ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between">
//           <h1 className={${isMinimized ? "hidden" : "block"} text-2xl font-bold}>finance</h1>
//           <button
//             className="text-gray-400 text-sm cursor-pointer sm:block hidden"
//             onClick={() => setIsMinimized(!isMinimized)}
//           >
//             <FontAwesomeIcon icon={faMinusSquare} size="lg" />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-6">
//           <ul className={`${isMinimized ? "space-y-6" : "space-y-4"}`}>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faHome} className="mr-2" />
//               {!isMinimized && <a href="#" className="text-green-500">Overview</a>}
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
//               {!isMinimized && <a href="#">Transactions</a>}
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faClipboard} className="mr-2" />
//               {!isMinimized && <a href="#">Budgets</a>}
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
//               {!isMinimized && <a href="#">Pots</a>}
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />
//               {!isMinimized && <a href="#">Recurring Bills</a>}
//             </li>
//           </ul>
//         </nav>

//         {/* Minimize Menu Button */}
//         {!isMinimized && (
//           <button
//             className="absolute bottom-6 left-6 text-gray-400 text-sm cursor-pointer"
//             onClick={() => setIsMinimized(true)}
//           >
//             ⬅ Minimize Menu
//           </button>
//         )}
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faExchangeAlt,
  faClipboard,
  faPiggyBank,
  faFileInvoiceDollar,
  faBars,
  faTimes,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="absolute top-4 left-4 z-50 text-black sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-black text-white p-4 fixed h-screen transition-all ${
          isMinimized ? "w-16" : "w-64"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between">
          <h1
            className={`${isMinimized ? "hidden" : "block"} text-2xl font-bold`}
          >
            Finance
          </h1>
          <button
            className="text-gray-400 text-sm cursor-pointer sm:block hidden"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label="Toggle Sidebar"
          >
            <FontAwesomeIcon icon={faMinusSquare} size="lg" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className={`${isMinimized ? "space-y-6" : "space-y-4"}`}>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              {!isMinimized && (
                <a href="#" className="text-green-500">
                  Overview
                </a>
              )}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
              {!isMinimized && <a href="#">Transactions</a>}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faClipboard} className="mr-2" />
              {!isMinimized && <a href="#">Budgets</a>}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
              {!isMinimized && <a href="#">Pots</a>}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />
              {!isMinimized && <a href="#">Recurring Bills</a>}
            </li>
          </ul>
        </nav>

        {/* Minimize Menu Button */}
        {!isMinimized && (
          <button
            className="absolute bottom-6 left-6 text-gray-400 text-sm cursor-pointer"
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize Menu"
          >
            ⬅ Minimize Menu
          </button>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
