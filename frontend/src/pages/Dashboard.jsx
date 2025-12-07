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
    <>
      <div className="tron-bg">
        <div className="tron-layer1"></div>
        <div className="tron-layer2"></div>
        <div className="tron-layer3"></div>
      </div>

      <div className="dashboard-container">
      <h1>Recent Innovations of Generative AI</h1>

      <section className="dashboard-section">
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 1 ? null : 1)}>
          <div className="post-header">
            <img className="post-icon" src="/image.png" alt="icon" />
            <h3 className="post-title">Recent Innovations in Generative AI</h3>
          </div>

          <p className="post-body collapsed">
            Over the last six months, the landscape of Generative AI has evolved at an unprecedented pace, driven by major breakthroughs in efficiency, multimodality, and real-world scalability. New model families, such as Google’s Gemini 2.5 series, have significantly expanded what AI systems can accomplish, demonstrating stronger reasoning, richer image-to-video generation, and highly responsive real-time task assistance. Lightweight “Flash” variants have further accelerated adoption by enabling high-quality AI performance on smaller devices, reducing cost barriers, and supporting edge-based applications. Meanwhile, advanced generative video models like Veo 3 have redefined fidelity, motion coherence, and creative control, making cinematic content generation accessible to everyday users and professionals alike.

These innovations have empowered developers to build more immersive, accurate, and interactive AI-driven experiences, influencing fields such as digital media, education, customer support, and enterprise automation. The rapid growth of fine-tuned, domain-specific models also reflects a broader shift toward practical, workflow-integrated AI solutions. Businesses are no longer simply experimenting with generative capabilities—they are actively embedding them into tools, pipelines, and decision-making processes. Collectively, these advancements mark a decisive step toward AI systems that are faster, more capable, and increasingly central to modern computing.
          </p>
          {openPost === 1 && (
            <div className="post-expanded fade-slide">
              <p>
                Over the last six months, the landscape of Generative AI has evolved faster than ever, driven by breakthroughs in efficiency, multimodality, and real‑world deployment. Models like Google's Gemini 2.5 series have pushed the boundaries of reasoning, image‑to‑video generation, and real‑time task assistance. Flash variants have made high‑quality AI accessible on smaller devices, while advanced models like Veo 3 have redefined video generation fidelity. These innovations enable developers to build more immersive, accurate, and interactive applications—fueling everything from creative tools to enterprise automation. The acceleration of fine‑tuned, task‑specific AI systems also highlights a shift toward practical adoption, enabling industries to embed generative capabilities directly into their workflows.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">
                Read original source →
              </a>

              <img className="post-image" src="/McKinsey_Quarterly_logo.png" alt="AI visual" loading="lazy" />
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
              <defs>
                <linearGradient id="tronMiniLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00eaff" stopOpacity={0.1} />
                  <stop offset="50%" stopColor="#00eaff" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#00eaff" stopOpacity={0.3} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="rgba(0, 234, 255, 0.25)" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#00eaff" tick={{ fill: "#b9faff", fontSize: 12 }} />
              <YAxis stroke="#00eaff" tick={{ fill: "#b9faff", fontSize: 12 }} />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#02040a",
                  border: "1px solid #00eaff",
                  borderRadius: "8px",
                  color: "#b9faff",
                  boxShadow: "0 0 18px rgba(0, 234, 255, 0.7)"
                }}
              />

              <Line
                type="monotone"
                dataKey="videos"
                stroke="url(#tronMiniLine)"
                strokeWidth={3}
                dot={{ r: 5, stroke: "#00eaff", strokeWidth: 2, fill: "#02040a" }}
                activeDot={{ r: 7, stroke: "#00eaff", strokeWidth: 2, fill: "#00eaff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
      </div>
    </>
  );
}