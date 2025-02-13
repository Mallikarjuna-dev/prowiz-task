import React from "react";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white shadow-md flex flex-col p-4">
            <h2 className="text-xl font-semibold mb-6">ProWiz Analytics</h2>
            <ul>
                <li className="p-3 bg-blue-600 text-white rounded-lg mb-2">Dashboard</li>
                <li className="p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">Camera View</li>
                <li className="p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">Event Log</li>
            </ul>
        </div>
    );
};

export default Sidebar;
