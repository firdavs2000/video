import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  Filter,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import avatarImg from "../assets/sidebar.png"; // <-- your avatar image
import {useAuth} from "../hooks/useAuth"; // <-- make sure you have this hook

const Header = () => {
  const [userOpen, setUserOpen] = useState(false);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-[#191919] text-white">

      {/* LEFT MENU */}
      <div className="flex items-center gap-6 m-4">
        <span className="text-yellow-400 cursor-pointer">All</span>
        <span className="cursor-pointer hover:text-yellow-400 transition">Movie</span>
        <span className="cursor-pointer hover:text-yellow-400 transition">Series</span>
        <span className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition">
          Genres <ChevronDown size={16} />
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 md:gap-6">

        {/* SEARCH */}
        <div className="relative flex items-center gap-2 bg-[#111111] px-3 py-1 rounded-md">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search series, movies..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-32 md:w-48"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5">
            <Filter size={16} className="text-gray-400" />
          </button>
        </div>

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>

        {/* USER AVATAR */}
        <div className="relative">
          <button
            onClick={() => setUserOpen(!userOpen)}
            className="flex items-center space-x-2 pl-3 border-l border-slate-200 dark:border-slate-700"
          >
            <img src={avatarImg} alt="Avatar" className="w-8 h-8 rounded-full ring-2 ring-blue-500" />
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>

          {userOpen &&
            createPortal(
              <div className="absolute right-6 top-16 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700 p-2 z-[9999]">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-900 dark:text-slate-50 cursor-pointer">
                  <User className="w-4 h-4" /> Profile
                </button>

                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-700 rounded cursor-pointer">
                  <Settings className="w-4 h-4" /> Settings
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded cursor-pointer"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>,
              document.body
            )
          }
        </div>

      </div>
    </header>
  );
};

export default Header;
