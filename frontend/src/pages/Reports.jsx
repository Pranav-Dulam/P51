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
import "./Design/Reports.css";
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
    <div className="reports-container">
      <h2 className="reports-heading">AI Video Generation Trend</h2>

      <div className="reports-chart-box">
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

      <p className="reports-description">
        This line chart displays the growth of AI-generated videos from June to October 2025. 
        The data comes from the backend MySQL database and is visualized using Recharts.
      </p>
    </div>
  );
}