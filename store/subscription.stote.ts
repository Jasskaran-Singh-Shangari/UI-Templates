import { create } from "zustand";

type Plan = "Annual" | "Monthly";

interface SubscribeState {
  click: Plan;
  setClick: (plan: Plan) => void;
}

export const useSubscribeStore = create<SubscribeState>((set) => ({
  click: "Annual",
  setClick: (plan) => set({ click: plan }),
}));

