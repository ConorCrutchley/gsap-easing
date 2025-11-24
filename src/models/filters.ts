import type { EasingSpeedType } from "./easingType";

export type Filters = {
  easingType: gsap.EaseString;
  speedType: EasingSpeedType;
  duration: number;
  setEasingType: (easingType: gsap.EaseString) => void;
  setSpeedType: (easingSpeed: EasingSpeedType) => void;
  setDuration: (duration: number) => void;
};
