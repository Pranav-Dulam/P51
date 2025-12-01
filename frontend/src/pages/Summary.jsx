import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { AuthContext } from "../auth/AuthContext";
import "./Design/Summary.css";

export default function Summary() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/charts/summary", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setData(res.data.data);
    });
  }, [token]);

  return (
    <div className="summary-container">
      <h2 className="summary-heading">AI Model Adoption Chart</h2>

      <div className="summary-chart-box">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="summary-description">
        This bar chart illustrates the number of real-world projects built using Google’s
        latest Generative AI innovations such as Gemini 2.5 Pro, Gemini 2.5 Flash, Flash Image,
        and Veo 3. Data is retrieved dynamically from the backend API connected to MySQL.
      </p>
    </div>
  );
}