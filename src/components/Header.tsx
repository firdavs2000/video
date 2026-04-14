import React, { useState } from "react";
import { createPortal } from "react-dom";

import {
  Search,
  Bell,
  ChevronDown,
  Filter,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import avatarImg from "../assets/sidebar.png";


const Header = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);





  return (
    <header className="w-full bg-[#191919] text-white">
      
      {/* CONTAINER */}
      <div className="flex items-center justify-between w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] py-4">

        {/* LEFT */}
        <div className="flex items-center gap-6">
          
          {/* MOBILE MENU BTN */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(true)}
          >
            <Menu />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-yellow-400 cursor-pointer">All</span>
            <span className="cursor-pointer hover:text-yellow-400">Movie</span>
            <span className="cursor-pointer hover:text-yellow-400">Series</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              Genres <ChevronDown size={16} />
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

          {/* SEARCH */}
          <div className="hidden sm:flex relative items-center bg-[#111] px-3 py-1 rounded-md">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-24 md:w-40"
            />
            <Filter size={16} className="text-gray-400 ml-2" />
          </div>

          {/* NOTIFICATION */}
          <div className="relative cursor-pointer">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>

          {/* USER */}
          <div className="relative">
            <button
              onClick={() => setUserOpen(!userOpen)}
              className="flex items-center gap-2 pl-3 border-l border-slate-700"
            >
              <img
                src={avatarImg}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {userOpen &&
              createPortal(
                <div className="fixed right-6 top-16 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700 p-2 z-[9999]">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                    <User className="w-4 h-4" /> Profile
                  </button>

                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                    <Settings className="w-4 h-4" /> Settings
                  </button>

                  <button
                   
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>,
                document.body
              )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/70 z-[9998]">
          <div className="w-[260px] h-full bg-[#111] p-6">
            
            <button
              className="mb-6"
              onClick={() => setMobileMenu(false)}
            >
              <X />
            </button>

            <div className="flex flex-col gap-4">
              <span className="text-yellow-400">All</span>
              <span>Movie</span>
              <span>Series</span>
              <span>Genres</span>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
