import React from "react";

function ChartCard({ value }) {

return (
    <div className="p-6 rounded-xl tron-card text-center text-2xl">
        <h3 className="tron-title text-lg font-semibold mb-2">Total Users</h3>
        <span className="tron-value font-bold">{value}</span>
    </div>
);
}

export default ChartCard;

<style>
{`
  .tron-card {
    background: rgba(0, 12, 25, 0.65);
    border: 1.6px solid #00eaff;
    box-shadow: 0 0 18px rgba(0, 234, 255, 0.5), 0 0 40px rgba(0, 234, 255, 0.25);
    color: #b9faff;
    backdrop-filter: blur(12px);
  }

  .tron-title {
    color: #00eaff;
    text-shadow: 0 0 12px #00eaff;
  }

  .tron-value {
    color: #00eaff;
    text-shadow: 0 0 15px #00eaff, 0 0 30px #00eaff;
    font-size: 1.8rem;
  }
`}
</style>