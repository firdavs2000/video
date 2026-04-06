import { create } from "zustand";

export const PERMISSIONS = {
  VIEW_DASHBOARD: "view_dashboard",
  ADD_PRODUCT: "add_product",
  VIEW_PRODUCT: "view_product",
} as const;

type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS];

interface User {
  email: string;
  permissions: Permission[];
}

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: Permission) => boolean;
}

const storedUser = localStorage.getItem("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

export const useAuth = create<AuthState>((set, get) => ({
  user: initialUser,

  login: async (email, password) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        let user: User | null = null;

        if (email === "admin@gmail.com" && password === "123456") {
          user = {
            email,
            permissions: [
              PERMISSIONS.VIEW_DASHBOARD,
              PERMISSIONS.ADD_PRODUCT,
              PERMISSIONS.VIEW_PRODUCT,
            ],
          };
        }

        if (user) {
          set({ user });
          localStorage.setItem("access", "fake-jwt-token");
          localStorage.setItem("user", JSON.stringify(user));
          resolve();
        } else {
          reject(new Error("Login yoki parol noto‘g‘ri"));
        }
      }, 500);
    });
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem("access");
    localStorage.removeItem("user");
  },

  hasPermission: (permission) => {
    const user = get().user;
    if (!user) return false;
    return user.permissions.includes(permission);
  },
}));
