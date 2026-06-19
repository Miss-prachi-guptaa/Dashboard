import {
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiTrendingUp,
} from "react-icons/fi";

export const metrics = [
  {
    title: "Revenue",
    value: "₹1,25,000",
    change: "+12.5%",
    trend: "up",
    icon: FiDollarSign,
    color: "from-violet-500 to-purple-500",
  },

  {
    title: "Users",
    value: "5,420",
    change: "+8.2%",
    trend: "up",
    icon: FiUsers,
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "Orders",
    value: "1,230",
    change: "-2.1%",
    trend: "down",
    icon: FiShoppingCart,
    color: "from-orange-500 to-yellow-500",
  },

  {
    title: "Conversion",
    value: "4.8%",
    change: "+1.4%",
    trend: "up",
    icon: FiTrendingUp,
    color: "from-pink-500 to-rose-500",
  },
];