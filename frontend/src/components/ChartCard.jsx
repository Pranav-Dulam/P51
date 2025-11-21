import React from "react";

function ChartCard({ value }) {

return (
    <div className="p-6 rounded-xl bg-gray-900 text-white text-center text-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
        <span className="font-bold">{value}</span>
    </div>
);
}

export default ChartCard;