import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { AuthContext } from "../auth/AuthContext";

export default function Reports() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/charts/reports", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setData(res.data));
  }, [token]);

  // Removed Anime.js animation useEffect and SVG point calculations

  return (
    <div className="px-6 pt-24 pb-10">
      <h2 className="text-3xl font-bold mb-6">AI Video Generation Trend</h2>

      <div className="w-[90%] h-[400px] mx-auto bg-white shadow-md rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="videos_million"
              stroke="#ef4444"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="max-w-3xl leading-relaxed text-gray-700 mt-6">
        This line chart displays the growth of AI-generated videos from June to October 2025. 
        The data comes from the backend MySQL database and is visualized using Recharts.
      </p>
    </div>
  );
}