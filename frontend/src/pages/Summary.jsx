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

export default function Summary() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/charts/summary", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setData(res.data);
    });
  }, [token]);

  return (
    <div className="px-6 pt-24 pb-10">
      <h2 className="text-3xl font-bold mb-6">AI Model Adoption Chart</h2>

      <div className="w-[90%] h-[400px] mx-auto bg-white shadow-md rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="model_name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="projects" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="max-w-3xl leading-relaxed text-gray-700 mt-6">
        This bar chart illustrates the number of real-world projects built using Google’s
        latest Generative AI innovations such as Gemini 2.5 Pro, Gemini 2.5 Flash, Flash Image,
        and Veo 3. Data is retrieved dynamically from the backend API connected to MySQL.
      </p>
    </div>
  );
}