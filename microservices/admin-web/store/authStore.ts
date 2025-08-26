import { create } from "zustand";

interface AuthStore {
  // user: User | null;
  // isAuthenticated: boolean;
  // login: (user: User) => void;
  // logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  // user: null,
  // isAuthenticated: false,
  // login: (user) => set({ user, isAuthenticated: true }),
  // logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;    