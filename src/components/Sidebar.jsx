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
        className="absolute top-4 left-4 z-50 text-black md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-black text-white p-4 h-screen fixed transition-all duration-300
          ${isMinimized ? "w-16" : "w-64"} 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between">
          {!isMinimized && <h1 className="text-2xl font-bold">Finance</h1>}
          <button
            className="text-gray-400 text-sm cursor-pointer md:block hidden"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label="Toggle Sidebar"
          >
            <FontAwesomeIcon icon={faMinusSquare} size="lg" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faHome} />
              {!isMinimized && (
                <a href="#" className="text-green-500">
                  Overview
                </a>
              )}
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faExchangeAlt} />
              {!isMinimized && <a href="#">Transactions</a>}
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faClipboard} />
              {!isMinimized && <a href="#">Budgets</a>}
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPiggyBank} />
              {!isMinimized && <a href="#">Pots</a>}
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
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
