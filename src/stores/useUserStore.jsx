import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
	persist(
		(set) => ({
			user: null,
			actions: {
				setUser: (user) => set({ user }),
				clearUser: () => set({ user: null }),
			},
		}),
		{ name: "user" }
	)
);

// export const useUser = () => useUserStore((state) => state.user);
export const useToken = () => useUserStore((state) => state.user?.accessToken);

export const useUserActions = () => useUserStore((state) => state.actions);
