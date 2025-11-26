import type { EasingSpeedType } from "../models/easingType";
import type { Filters } from "../models/filters";
import { create } from "zustand";

const defaultFilters: Filters = {
  easingType: "power1",
  speedType: "out",
  duration: 0.5,
  animation: {
    x: 200,
    y: null,
    rotate: null,
    scale: null,
    opacity: null,
    skewX: null,
    skewY: null,
  },
  setEasingType: () => {},
  setSpeedType: () => {},
  setDuration: () => {},
  setAnimationX: () => {},
  setAnimationY: () => {},
  setAnimationRotate: () => {},
  setAnimationScale: () => {},
  setAnimationOpacity: () => {},
  setAnimationSkewX: () => {},
  setAnimationSkewY: () => {},
};

export const useFilters = create<Filters>()((set) => ({
  ...defaultFilters,
  setEasingType: (easingType: gsap.EaseString) => set({ easingType }),
  setSpeedType: (easingSpeed: EasingSpeedType) =>
    set({ speedType: easingSpeed }),
  setDuration: (duration: number) => set({ duration }),
  setAnimationX: (x: number | null) =>
    set((state) => ({ animation: { ...state.animation, x } })),
  setAnimationY: (y: number | null) =>
    set((state) => ({ animation: { ...state.animation, y } })),
  setAnimationRotate: (rotate: number | null) =>
    set((state) => ({ animation: { ...state.animation, rotate } })),
  setAnimationScale: (scale: number | null) =>
    set((state) => ({ animation: { ...state.animation, scale } })),
  setAnimationOpacity: (opacity: number | null) =>
    set((state) => ({ animation: { ...state.animation, opacity } })),
  setAnimationSkewX: (skewX: number | null) =>
    set((state) => ({ animation: { ...state.animation, skewX } })),
  setAnimationSkewY: (skewY: number | null) =>
    set((state) => ({ animation: { ...state.animation, skewY } })),
}));
