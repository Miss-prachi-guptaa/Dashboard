import MetricCard from "./MetricCard";
import { metrics } from "../../data/metricsData";

export default function MetricsGrid() {
  return (
    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
      "
    >
      {metrics.map((item) => (
        <MetricCard key={item.title} {...item} />
      ))}
    </div>
  );
}
