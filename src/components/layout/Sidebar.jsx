import { useState } from "react";
import {
  FiGrid,
  FiBarChart2,
  FiShoppingCart,
  FiUsers,
  FiPackage,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menus = [
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "Analytics", icon: <FiBarChart2 /> },
    { name: "Orders", icon: <FiShoppingCart /> },
    { name: "Customers", icon: <FiUsers /> },
    { name: "Products", icon: <FiPackage /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <aside
      className={`hidden md:flex flex-col h-screen sticky top-0 bg-white/[0.04] backdrop-blur-xl border-r border-white/10 transition-[width] duration-300 ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Toggle */}
      <div className="p-5">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-2xl text-slate-300 hover:text-white transition-all duration-300"
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu */}
      <div className="space-y-3 px-3">
        {menus.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${active === item.name ? "bg-violet-500/20 text-violet-300 border border-violet-500/20 shadow-lg shadow-violet-500/10" : "hover:bg-violet-500/20 hover:translate-x-1 text-slate-300"}`}
          >
            <span className="text-xl">{item.icon}</span>

            {!collapsed && item.name}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
