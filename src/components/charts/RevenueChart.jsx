import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { revenueData } from "../../data/revenueData";

export default function RevenueChart() {
  return (
    <div
      className="
      bg-white/[0.04]
      backdrop-blur-2xl
      border border-white/10
      rounded-3xl
      p-4 md:p-6
      shadow-xl
      "
    >
      <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
        Revenue Analytics
      </h2>

      <div className="h-[250px] sm:h-[300px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="#334155" strokeDasharray="4 4" />

            <XAxis dataKey="month" stroke="#94A3B8" tick={{ fontSize: 12 }} />

            <YAxis stroke="#94A3B8" tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "16px",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={{
                fill: "#8B5CF6",
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
