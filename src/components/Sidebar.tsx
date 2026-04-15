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
  ChevronDown,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/sidebar.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const location = useLocation();

  const menus = [
    {
      name: "Discover",
      icon: Home,
      link: "/",
      submenu: [
        { name: "FilmPage", path: "/films" },
      ],
    },
    { name: "Watchlist", icon: Bookmark, link: "/watchlist" },
    { name: "Blog", icon: FileText, link: "/blog" },
    { name: "Artists", icon: Users, link: "/artists" },
    { divider: true },
    { name: "Contact Us", icon: Phone, link: "/contact" },
    { name: "Help Center", icon: HelpCircle, link: "/help" },
    { name: "Setting", icon: Settings, link: "/settings" },
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

          const isActive =
            menu.link === location.pathname ||
            menu.submenu?.some((sub) => sub.path === location.pathname);

          return (
            <div key={i}>
              {/* Main item */}
              {menu.link ? (
                <NavLink
                  to={menu.link}
                  className={`flex items-center justify-between gap-3 p-2 rounded-md cursor-pointer transition
                  ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                  onClick={() =>
                    menu.submenu &&
                    setOpenMenu(openMenu === menu.name ? null : menu.name)
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    {open && <span>{menu.name}</span>}
                  </div>

                  {open && menu.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openMenu === menu.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </NavLink>
              ) : null}

              {/* Submenu */}
              {menu.submenu && openMenu === menu.name && open && (
                <div className="ml-6 mt-1 flex flex-col gap-1">
                  {menu.submenu.map((sub, i) => (
                    <NavLink
                      key={i}
                      to={sub.path}
                      className={({ isActive }) =>
                        `p-2 text-sm rounded-md transition ${
                          isActive
                            ? "text-yellow-400"
                            : "text-gray-400 hover:text-yellow-400"
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
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
