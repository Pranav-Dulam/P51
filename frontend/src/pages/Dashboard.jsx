import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const miniData = [
    { month: "Jun", videos: 12 },
    { month: "Jul", videos: 19 },
    { month: "Aug", videos: 24 },
    { month: "Sep", videos: 31 },
    { month: "Oct", videos: 43 }
  ];

  return (
    <div className="px-6 pt-24 pb-10">
      <h1>Dashboard</h1>

      <section className="mt-6">
        <h2>Recent Innovations in Generative AI</h2>
        <p className="max-w-3xl leading-relaxed text-gray-700">
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
      </section>

      <section className="mt-10">
        <h2>Mini Chart — AI Video Growth Trend</h2>
        <div className="w-[90%] h-[250px] mx-auto bg-white shadow-md rounded-lg p-4">
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