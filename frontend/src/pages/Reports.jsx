import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";
import "./Design/Reports.css";
import { AuthContext } from "../auth/AuthContext";

export default function Reports() {
  const { token } = useContext(AuthContext);

  const [adoption, setAdoption ] = useState([]);
  const [efficiency, setEfficiency] = useState([]);
  const [cost, setCost] = useState([]);

  useEffect(() => {
    if (!token) return; // Prevent API calls when no token

    axios
      .get("http://159.65.180.152:3000/api/charts/reports/adoption", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((res) => setAdoption(res.data.data))
      .catch((err) => console.error("Adoption API Error:", err));

    axios
      .get("http://159.65.180.152:3000/api/charts/reports/efficiency", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((res) => setEfficiency(res.data.data))
      .catch((err) => console.error("Efficiency API Error:", err));

    axios
      .get("http://159.65.180.152:3000/api/charts/reports/cost", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((res) => setCost(res.data.data))
      .catch((err) => console.error("Cost API Error:", err));
  }, [token]);

  return (
    <div className="reports-container">
      {/* ---------Chart 1: Adoption --------- */}
      <h2 className="reports-heading">GenAI Model Adoption from Last 6 Months</h2>
      <div className="reports-chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={adoption}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="reports-description">
        This bar chart illustrates the adoption of leading GenAI models over the last six months.
        Data comes from the MySQL database and reflects recent industry trends.
      </p>

      {/* ------------ Chart 2: Efficiency ------------ */}
      <h2 className="reports-heading">Model Efficiency (Tokens per second)</h2>
      <div className="reports-chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={efficiency}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="reports-description">
        This line chart compares model efficiency across leading AI model efficiency across leading AI models. visualizing token output.
        performance based on backend MySQL data.
      </p>

      {/* --------------- Chart 3: Cost Reduction --------------- */}
      <h2 className="reports-heading">Training Cost Reduction (%)</h2>
      <div className="reports-chart-box">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cost}>
            <CartesianGrid stroke="#ccc" strokeDasharray= "5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="reports-description">
        This bar chart shows GPU and compute cost reductions achieved by Leading GenAI labs.
        Data is sourced directly from MySQL dataset.
      </p>
    </div>
  );
}
