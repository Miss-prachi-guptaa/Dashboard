import { useState } from "react";
import MetricsGrid from "../components/card/MetricsGrid";
import OrdersChart from "../components/charts/OrdersChart";
import RevenueChart from "../components/charts/RevenueChart";
import Header from "../components/layout/Header";
import MobileDrawer from "../components/layout/MobileDrawer";
import Sidebar from "../components/layout/Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar />

      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 overflow-x-hidden p-4 md:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <Header setIsOpen={setIsOpen} />

          <MetricsGrid />

          <section className="mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Analytics Overview</h2>

              <p className="text-slate-400 mt-1">
                Revenue and order performance over the last 6 months
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <OrdersChart />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
