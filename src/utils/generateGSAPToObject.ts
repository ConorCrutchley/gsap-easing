import type { Filters } from "../models/filters";
import { generateGSAPFromObject } from "./generateGSAPFromObject";
import { getSelectedEasingType } from "./getSelectedEasingType";

export const generateGSAPToObject = (filters: Filters) => {
  // Get the selected easing speed types
  const selectedSpeedTypes = getSelectedEasingType(
    filters.easingType
  )?.speedTypes;

  // Produce a string for the easing type based on the filters
  // and whether the easing has speed types
  const easingType = `${filters.easingType}${
    selectedSpeedTypes && selectedSpeedTypes?.length > 0
      ? `.${filters.speedType}`
      : ""
  }`;

  // Generate the GSAP from object
  const gsapFrom = generateGSAPFromObject(filters);

  // If the from x value > 0, set the to x value to 0
  const x = filters.animation.x ?? gsapFrom.x;
  const newX = gsapFrom.x > 0 ? 0 : x;

  // If the from y value > 0, set the to y value to 0
  const y = filters.animation.y ?? gsapFrom.y;
  const newY = gsapFrom.y > 0 ? 0 : y;

  // If the opacity is greater than 1, multiply it by 0.01
  // to get a value between 0 and 1
  const opacity = filters.animation.opacity ?? gsapFrom.opacity;
  const newOpacity = opacity > 1 ? opacity * 0.01 : opacity;

  // If the scale is greater than 1, multiply it by 0.01
  // to get a value between 0 and 1
  const scale = filters.animation.scale ?? gsapFrom.scale;
  const newScale = scale > 1 ? scale * 0.01 : scale;

  return {
    duration: filters.duration,
    ease: easingType,
    x: newX,
    y: newY,
    scale: newScale,
    opacity: newOpacity,
    rotate: filters.animation.rotate ?? gsapFrom.rotate,
    skewX: filters.animation.skewX ?? gsapFrom.skewX,
    skewY: filters.animation.skewY ?? gsapFrom.skewY,
  };
};
