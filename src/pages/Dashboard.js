import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { dashboardData } from "../utils/data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import Select from "react-select";

const Dashboard = () => {
    const [selectedApplication, setSelectedApplication] = useState(
        JSON.parse(localStorage.getItem("selectedApplication")) || null
    );
    const [selectedLine, setSelectedLine] = useState(
        JSON.parse(localStorage.getItem("selectedLine")) || null
    );

    useEffect(() => {
        localStorage.setItem("selectedApplication", JSON.stringify(selectedApplication));
        localStorage.setItem("selectedLine", JSON.stringify(selectedLine));
    }, [selectedApplication, selectedLine]);

    const appOptions = dashboardData.tableData.map((item) => ({
        value: item.application,
        label: item.application,
    }));

    const lineOptions = dashboardData.tableData.map((item) => ({
        value: item.line,
        label: item.line,
    }));

    const filteredTableData = dashboardData.tableData.filter(
        (row) =>
            (!selectedApplication || row.application === selectedApplication.value) &&
            (!selectedLine || row.line === selectedLine.value)
    );

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="flex-1 p-4 bg-gray-100 min-h-screen">
                {/* Header */}
                <div className="bg-white p-3 flex flex-col sm:flex-row justify-between items-center mb-4 shadow rounded-lg">
                    <h2 className="text-2xl font-semibold">KPI Tracker</h2>
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                        <span className="font-medium">User</span>
                        <img src="/assets/user-profile.png" alt="User Profile" className="w-10 h-10 rounded-full border border-gray-300" />
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
                    <Select options={appOptions} onChange={setSelectedApplication} placeholder="Application" />
                    <Select options={lineOptions} onChange={setSelectedLine} placeholder="Line Number" />
                    <Select options={lineOptions} onChange={setSelectedLine} placeholder="Reason for rejection" />
                    <Select options={lineOptions} onChange={setSelectedLine} placeholder="Select date Range" />
                    <button className="p-2 bg-blue-600 text-white text-xl rounded-lg w-full">Download</button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {["Units Processed", "Units Passed", "Units Rejected", "Throughput (Units/Minute)"].map((title, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow text-center">
                            <p className="text-gray-600">{title}</p>
                            <h3 className="text-xl font-bold">{Object.values(dashboardData)[index]}</h3>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-3">Split of Units Processed Today</h3>
                        <BarChart width={350} height={250} data={dashboardData.splitData} className="mx-auto">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="passed" fill="#3b82f6" />
                            <Bar dataKey="rejected" fill="#10b981" />
                        </BarChart>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-3">Reasons for Rejection</h3>
                        <PieChart width={350} height={250} className="mx-auto">
                            <Pie data={dashboardData.rejectionReasons} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                                <Cell fill="#3b82f6" />
                                <Cell fill="#10b981" />
                            </Pie>
                            <Legend />
                        </PieChart>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white mt-6 p-4 rounded-xl shadow overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-3">Rejection Details</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2">Application</th>
                                <th className="p-2">Line Number</th>
                                <th className="p-2">Product</th>
                                <th className="p-2">Reason for Rejection</th>
                                <th className="p-2">Quantity</th>
                                <th className="p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTableData.map((row, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-2">{row.application}</td>
                                    <td className="p-2">{row.line}</td>
                                    <td className="p-2">{row.product}</td>
                                    <td className="p-2">{row.reason}</td>
                                    <td className="p-2">{row.quantity}</td>
                                    <td className="p-2">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
