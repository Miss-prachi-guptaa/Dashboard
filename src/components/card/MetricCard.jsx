import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

export default function MetricCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
}) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-white/[0.04]
  backdrop-blur-2xl border border-white/10 p-6 hover:-translate-y hover:border-violet-500/30 transition-all duration-300 shadow-xl "
    >
      {/* Top */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${color}`}
        >
          <Icon size={24} />
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-6 flex items-center gap-2">
        {trend === "up" ? (
          <FiArrowUpRight className="text-emerald-400" />
        ) : (
          <FiArrowDownRight className="text-red-400" />
        )}

        <span
          className={`
          text-sm
          ${trend === "up" ? "text-emerald-400" : "text-red-400"}
          `}
        >
          {change}
        </span>

        <span className="text-slate-500 text-sm">from last month</span>
      </div>
    </div>
  );
}
