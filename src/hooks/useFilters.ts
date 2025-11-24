import type { EasingSpeedType } from "../models/easingType";
import type { Filters } from "../models/filters";
import { create } from "zustand";

const defaultFilters: Filters = {
  easingType: "power1",
  speedType: "out",
  duration: 0.5,
  setEasingType: () => {},
  setSpeedType: () => {},
  setDuration: () => {},
};

export const useFilters = create<Filters>()((set) => ({
  ...defaultFilters,
  setEasingType: (easingType: gsap.EaseString) => set({ easingType }),
  setSpeedType: (easingSpeed: EasingSpeedType) =>
    set({ speedType: easingSpeed }),
  setDuration: (duration: number) => set({ duration }),
}));
