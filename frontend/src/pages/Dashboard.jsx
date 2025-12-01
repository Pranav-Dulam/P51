import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { useState } from "react";
import "./Design/Dashboard.css";

export default function Dashboard() {
  const miniData = [
    { month: "Jun", videos: 12 },
    { month: "Jul", videos: 19 },
    { month: "Aug", videos: 24 },
    { month: "Sep", videos: 31 },
    { month: "Oct", videos: 43 }
  ];

  const [openPost, setOpenPost] = useState(null);

  return (
    <div className="dashboard-container">
      <h1>Recent Innovations of Generative AI</h1>

      <section className="dashboard-section">
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 1 ? null : 1)}>
          <div className="post-header">
            <img className="post-icon" src="/image.png" alt="icon" />
            <h3 className="post-title">Recent Innovations in Generative AI</h3>
          </div>

          <p className="post-body collapsed">
            Over the last six months, the landscape of Generative AI has evolved faster
            than ever, driven by breakthroughs in efficiency, multimodality, and
            real‑world deployment. Models like Google's Gemini 2.5 series have pushed
            the boundaries of reasoning, image‑to‑video generation, and real‑time task
            assistance. Flash variants have made high‑quality AI accessible on smaller
            devices, while advanced models like Veo 3 have redefined video generation
            fidelity. These innovations enable developers to build more immersive,
            accurate, and interactive applications—fueling everything from creative
            tools to enterprise automation. The acceleration of fine‑tuned, task‑specific
            AI systems also highlights a shift toward practical adoption, enabling
            industries to embed generative capabilities directly into their workflows.
          </p>

          {openPost === 1 && (
            <div className="post-expanded fade-slide">
              <p>
                Over the last six months, the landscape of Generative AI has evolved faster than ever, driven by breakthroughs in efficiency, multimodality, and real‑world deployment. Models like Google's Gemini 2.5 series have pushed the boundaries of reasoning, image‑to‑video generation, and real‑time task assistance. Flash variants have made high‑quality AI accessible on smaller devices, while advanced models like Veo 3 have redefined video generation fidelity. These innovations enable developers to build more immersive, accurate, and interactive applications—fueling everything from creative tools to enterprise automation. The acceleration of fine‑tuned, task‑specific AI systems also highlights a shift toward practical adoption, enabling industries to embed generative capabilities directly into their workflows.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">
                Read original source →
              </a>

              <img className="post-image" src="/McKinsey_Quarterly_logo.png" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">
            {openPost === 1 ? "Show Less ▲" : "Read More ▼"}
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Mini Chart — AI Video Growth Trend</h2>
        <div className="dashboard-chart-box">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={miniData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="videos"
                stroke="#4f46e5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}