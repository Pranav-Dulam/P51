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
    if (!token) return; // Prevent API call if token is missing

    axios.get("http://159.65.180.152:3000/api/charts/summary", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      setData(res.data.data);
    })
    .catch(err => {
      console.error("Summary API Error:", err);
    });
  }, [token]);

  return (
    <div className="summary-container">
      <h2 className="summary-heading">AI Model Adoption Chart</h2>

      <div className="summary-chart-box">
        <div style={{ width: "100%", height: 300}}>
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
      </div>

      <img 
        src={`${import.meta.env.BASE_URL}summary_chart.png`} 
        alt="Summary Chart" 
        className="summary-image"
      />

      <p className="summary-description">
        This bar chart illustrates the number of real-world projects built using Google’s
        latest Generative AI innovations such as Gemini 2.5 Pro, Gemini 2.5 Flash, Flash Image,
        and Veo 3. Data is retrieved dynamically from the backend API connected to MySQL.
      </p>ß
    </div>
  );
}