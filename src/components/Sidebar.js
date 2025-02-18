import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                className="p-3 bg-blue-600 text-white fixed top-4 left-4 z-50 md:hidden rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen bg-white shadow-md p-4 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:relative md:translate-x-0 md:w-64`}
            >
                <h2 className="text-xl font-semibold mb-6">ProWiz Analytics</h2>
                <ul className="space-y-2">
                    <li className="p-3 bg-blue-600 text-white rounded-lg">Dashboard</li>
                    <li className="p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">Camera View</li>
                    <li className="p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">Event Log</li>
                </ul>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
