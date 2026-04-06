import { useState } from "react";
import {
  Home,
  Bookmark,
  FileText,
  Users,
  Phone,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logo from "../assets/sidebar.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Discover", icon: Home, active: true },
    { name: "Watchlist", icon: Bookmark },
    { name: "Blog", icon: FileText },
    { name: "Artists", icon: Users },
    { divider: true },
    { name: "Contact Us", icon: Phone },
    { name: "Help Center", icon: HelpCircle },
    { name: "Setting", icon: Settings },
  ];

  return (
<div
  className={`${open ? "w-64" : "w-20"} h-screen p-4 relative duration-300`}
  style={{
    border: "1px solid transparent",
    borderRadius: "16px",
    background:
      "linear-gradient(#000, #000) padding-box, linear-gradient(to bottom, #333, #fff 20%, #333 50%) border-box",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
  }}
>


      {/* Collapse Button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-10 bg-[#1c1c1c] border border-gray-700 rounded-full p-1"
      >
        {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <img src={logo} className="w-28" />

      </div>

      {/* Menu title */}
      {open && (
        <p className="text-gray-500 text-sm mb-3 tracking-wider">Menu</p>
      )}

      {/* Menu */}
      <ul className="space-y-2">
        {menus.map((menu, i) => {
          if (menu.divider) {
            return <hr key={i} className="border-gray-700 my-3" />;
          }

          const Icon = menu.icon;

          return (
            <li
              key={i}
              className={`flex items-center gap-3 p-2 rounded-md cursor-pointer
              ${
                menu.active
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 text-gray-400"
              }`}
            >
              <Icon size={20} />

              {open && <span>{menu.name}</span>}
            </li>
          );
        })}
      </ul>

      {/* Bottom Card */}
      {open && (
        <div className="absolute bottom-5 left-4 right-4 border border-gray-700 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-3">
            Click the button below to see the plans
          </p>

          <button className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition">
            see plans
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
