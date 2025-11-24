import type { EasingSpeedType } from "./easingType";

type AnimationFilters = {
  x: number | null;
  y: number | null;
  rotate: number | null;
  scale: number | null;
  opacity: number | null;
  skewX: number | null;
  skewY: number | null;
};

export type Filters = {
  easingType: gsap.EaseString;
  speedType: EasingSpeedType;
  duration: number;
  animation: AnimationFilters;
  setEasingType: (easingType: gsap.EaseString) => void;
  setSpeedType: (easingSpeed: EasingSpeedType) => void;
  setDuration: (duration: number) => void;
  setAnimationX: (x: number | null) => void;
  setAnimationY: (y: number | null) => void;
  setAnimationRotate: (degrees: number | null) => void;
  setAnimationScale: (percentage: number | null) => void;
  setAnimationOpacity: (percentage: number | null) => void;
  setAnimationSkewX: (degrees: number | null) => void;
  setAnimationSkewY: (degrees: number | null) => void;
};
