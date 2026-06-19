import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { ordersData } from "../../data/ordersData";

export default function OrdersChart() {
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
        Orders Analytics
      </h2>

      <div className="h-[250px] sm:h-[300px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ordersData}
            margin={{
              top: 5,
              right: 5,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="#334155" strokeDasharray="4 4" />

            <XAxis dataKey="month" stroke="#94A3B8" tick={{ fontSize: 12 }} />

            <YAxis stroke="#94A3B8" />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "20px",
              }}
            />

            <Bar
              dataKey="orders"
              fill="#06B6D4"
              radius={[10, 10, 0, 0]}
              maxBarSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
