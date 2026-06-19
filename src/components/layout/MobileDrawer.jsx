import {
  FiGrid,
  FiBarChart2,
  FiShoppingCart,
  FiUsers,
  FiPackage,
  FiSettings,
  FiX,
} from "react-icons/fi";

export default function MobileDrawer({ isOpen, setIsOpen }) {
  const menus = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
    },
    {
      name: "Orders",
      icon: <FiShoppingCart />,
    },
    {
      name: "Customers",
      icon: <FiUsers />,
    },
    {
      name: "Products",
      icon: <FiPackage />,
    },
    {
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-slate-950/80 backdrop-blur-2xl border-r border-white/10 z-50 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-bold">Dashboard</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <FiX />
          </button>
        </div>

        {/* Menu */}
        <div className="space-y-2 px-4">
          {menus.map((item) => (
            <button
              key={item.name}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-slate-300 hover:bg-violet-500/20 hover:text-white transition-all duration-200"
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
