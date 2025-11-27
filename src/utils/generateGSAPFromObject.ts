import type { GSAPFrom } from "../models/gsapFromTo";

/**
 * Generates a GSAPFrom object, which is used to define the starting
 * properties of an animation.
 * TODO: Incorporate filters so that the user can control the starting
 * properties of the animation
 * @returns {GSAPFrom} The GSAPFrom object.
 */
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
