import type { EasingSpeedType } from "../constants/easingTypes";
import { create } from "zustand";
import { gsap } from "gsap";

type Filters = {
  easingType: gsap.EaseString;
  speedType: EasingSpeedType;
  duration: number;
  setEasingType: (easingType: gsap.EaseString) => void;
  setSpeedType: (easingSpeed: EasingSpeedType) => void;
  setDuration: (duration: number) => void;
};

const defaultFilters: Filters = {
  easingType: "none",
  speedType: "in",
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
