import type { GSAPFrom } from "../models/gsapFromTo";

export const generateGSAPFromObject = () => {
  const gsapFrom: GSAPFrom = {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
    skewX: 0,
    skewY: 0,
  };
  return gsapFrom;
};
