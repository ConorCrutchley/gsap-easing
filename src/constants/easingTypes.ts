import { gsap } from "gsap";

export type EasingSpeedType = "in" | "out" | "inOut";

type EasingType = {
  name: gsap.EaseString;
  description: string;
  speedTypes: EasingSpeedType[];
};

const commonTypes: EasingSpeedType[] = ["in", "out", "inOut"];

export const easingTypes: EasingType[] = [
  {
    name: "none",
    description: "None",
    speedTypes: [],
  },
  {
    name: "back",
    description: "Back",
    speedTypes: commonTypes,
  },
  {
    name: "bounce",
    description: "Bounce",
    speedTypes: commonTypes,
  },
  {
    name: "circ",
    description: "Circular",
    speedTypes: commonTypes,
  },
  {
    name: "elastic",
    description: "Elastic",
    speedTypes: commonTypes,
  },
  {
    name: "expo",
    description: "Exponential",
    speedTypes: commonTypes,
  },
  {
    name: "power1",
    description: "Power 1",
    speedTypes: commonTypes,
  },
  {
    name: "power2",
    description: "Power 2",
    speedTypes: commonTypes,
  },
  {
    name: "power3",
    description: "Power 3",
    speedTypes: commonTypes,
  },
  {
    name: "power4",
    description: "Power 4",
    speedTypes: commonTypes,
  },
  {
    name: "sine",
    description: "Sine",
    speedTypes: commonTypes,
  },
];
