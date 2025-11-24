import type { Filters } from "../models/filters";

export const generateGSAPFromObject = (filters: Filters) => {
  return {
    x: (filters.animation.x ?? 0) >= 0 ? 0 : 300,
    y: (filters.animation.y ?? 0) >= 0 ? 0 : 300,
    rotate: 0,
    scale: 1,
    opacity: 1,
    skewX: 0,
    skewY: 0,
  };
};
