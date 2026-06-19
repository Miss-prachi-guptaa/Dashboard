import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

export default function Header({ setIsOpen }) {
  return (
    <header className="mb-8 space-y-6">
      {/* Top Row */}
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          className="md:hidden p-3 rounded-xl bg-white/[0.04] border border-white/10"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Search */}
        <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
          <FiSearch className="text-slate-400" />

          <input
            className="w-full bg-transparent outline-none"
            placeholder="Search..."
          />
        </div>

        {/* Bell */}
        <button className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
          <FiBell />
        </button>

        {/* Desktop Only */}
        <button className="hidden md:flex p-4 rounded-2xl bg-white/[0.04] border border-white/10">
          <FiSettings />
        </button>

        <div
          className="
           hidden md:flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl"
        >
          <div className=" w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center font-semibold ">
            PG
          </div>

          <div>
            <h3 className="font-medium">Prachi Gupta</h3>

            <p className="text-xs text-slate-400">Admin</p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-slate-400 mt-1">Welcome back 👋</p>
      </div>
    </header>
  );
}
