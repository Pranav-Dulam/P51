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
      <h1>Dashboard</h1>

      <section className="dashboard-section">
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 1 ? null : 1)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
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

              <img className="post-image" src="/image.png" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">
            {openPost === 1 ? "Show Less ▲" : "Read More ▼"}
          </button>
        </div>

        {/* Post 2 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 2 ? null : 2)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI Compute Efficiency Gains</h3>
          </div>

          <p className="post-body collapsed">
            GenAI models have become dramatically more efficient due to breakthroughs
            in quantization, batching, and optimized transformer execution...
          </p>

          {openPost === 2 && (
            <div className="post-expanded fade-slide">
              <p>
                Compute efficiency is one of the most important breakthroughs in GenAI.
                With new architecture improvements and lightweight inference engines,
                organizations can deploy high-performance models on modest hardware.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 2 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 3 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 3 ? null : 3)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">Rise of Multimodal Models</h3>
          </div>

          <p className="post-body collapsed">
            Multimodal models can understand text, images, audio, and video together...
          </p>

          {openPost === 3 && (
            <div className="post-expanded fade-slide">
              <p>
                The shift to multimodal AI unlocks new capabilities, from image-grounded
                reasoning to video understanding and real-time AR/VR AI assistants.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 3 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 4 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 4 ? null : 4)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">Agentic AI Systems</h3>
          </div>

          <p className="post-body collapsed">
            Autonomous AI agents are becoming capable of multi-step reasoning...
          </p>

          {openPost === 4 && (
            <div className="post-expanded fade-slide">
              <p>
                Agentic AI systems represent the next leap: autonomous assistants that
                plan, reflect, revise, and complete tasks with minimal human prompting.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 4 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 5 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 5 ? null : 5)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">Enterprise AI Governance</h3>
          </div>

          <p className="post-body collapsed">
            With rapid GenAI adoption, companies must establish strong AI governance...
          </p>

          {openPost === 5 && (
            <div className="post-expanded fade-slide">
              <p>
                Governance is now a top priority as businesses adopt AI responsibly.
                Enterprises are creating guidelines for fairness, transparency, and
                safe deployment of AI agents.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 5 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 6 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 6 ? null : 6)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI in Creative Industries</h3>
          </div>

          <p className="post-body collapsed">
            GenAI tools now support filmmaking, animation, music generation, and more...
          </p>

          {openPost === 6 && (
            <div className="post-expanded fade-slide">
              <p>
                AI-generated storyboards, VFX previsualization, audio cleanup, and
                scene generation are transforming creative workflows worldwide.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 6 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 7 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 7 ? null : 7)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI for Healthcare Decision Support</h3>
          </div>

          <p className="post-body collapsed">
            Hospitals are integrating GenAI for diagnostics, triage automation...
          </p>

          {openPost === 7 && (
            <div className="post-expanded fade-slide">
              <p>
                GenAI helps clinicians summarize patient history, interpret imaging,
                and accelerate administrative processes, improving patient outcomes.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 7 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 8 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 8 ? null : 8)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI-Enhanced Cybersecurity Defense</h3>
          </div>

          <p className="post-body collapsed">
            GenAI models are being deployed to predict attacks, detect anomalies...
          </p>

          {openPost === 8 && (
            <div className="post-expanded fade-slide">
              <p>
                AI security systems analyze traffic patterns, catch phishing attempts,
                and detect zero-day vulnerabilities faster than traditional tools.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 8 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 9 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 9 ? null : 9)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI for Autonomous Robotics</h3>
          </div>

          <p className="post-body collapsed">
            Robots powered by GenAI are now learning tasks through natural language...
          </p>

          {openPost === 9 && (
            <div className="post-expanded fade-slide">
              <p>
                These systems can adapt to new environments, follow complex instructions,
                and collaborate with humans more safely and efficiently.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 9 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 10 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 10 ? null : 10)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI-Driven Climate Modeling</h3>
          </div>

          <p className="post-body collapsed">
            Advanced AI models are improving climate predictions and environmental monitoring...
          </p>

          {openPost === 10 && (
            <div className="post-expanded fade-slide">
              <p>
                AI-driven simulations help scientists understand complex climate interactions,
                enabling better policy decisions and disaster preparedness.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 10 ? "Show Less ▲" : "Read More ▼"}</button>
        </div>

        {/* Post 11 */}
        <div className="dashboard-post" onClick={() => setOpenPost(openPost === 11 ? null : 11)}>
          <div className="post-header">
            <img className="post-icon" src="https://via.placeholder.com/40" alt="icon" />
            <h3 className="post-title">AI in Financial Risk Management</h3>
          </div>

          <p className="post-body collapsed">
            Financial institutions are leveraging GenAI to assess risks and detect fraud...
          </p>

          {openPost === 11 && (
            <div className="post-expanded fade-slide">
              <p>
                AI models analyze large datasets to identify anomalies, forecast market trends,
                and improve compliance efforts.
              </p>
              <a href="https://www.mckinsey.com" target="_blank" className="post-source">Read original source →</a>
              <img className="post-image" src="https://via.placeholder.com/600x300" alt="AI visual" />
            </div>
          )}

          <button className="read-more-button">{openPost === 11 ? "Show Less ▲" : "Read More ▼"}</button>
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