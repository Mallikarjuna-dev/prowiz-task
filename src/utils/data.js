export const dashboardData = {
    unitsProcessed: 2575,
    unitsPassed: 814,
    unitsRejected: 12,
    throughput: 110.41,
    splitData: [
        { name: "Party Pack", passed: 80, rejected: 50 },
        { name: "Tub", passed: 60, rejected: 80 },
    ],
    rejectionReasons: [
        { name: "Incorrect Price", value: 52 },
        { name: "Missing Coding", value: 48 },
    ],
    tableData: [
        { application: "Application 1", line: "Line 1", product: "Party Pack", reason: "Wrong Coding", quantity: 10, date: "01/02/2024" },
        { application: "Application 2", line: "Line 2", product: "Tub", reason: "Wrong Price", quantity: 12, date: "01/02/2024" },
        { application: "Application 3", line: "Line 3", product: "Party Pack", reason: "Wrong Factory Code", quantity: 8, date: "01/02/2024" },
    ],
};
