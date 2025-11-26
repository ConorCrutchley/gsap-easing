import type { Filters } from "../models/filters";
import type { GSAPTo } from "../models/gsapFromTo";
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
  const gsapFrom = generateGSAPFromObject();

  // If the opacity is greater than 1, multiply it by 0.01
  // to get a value between 0 and 1
  const opacity = filters.animation.opacity ?? gsapFrom.opacity;
  const newOpacity = opacity > 1 ? opacity * 0.01 : opacity;

  // If the scale is greater than 1, multiply it by 0.01
  // to get a value between 0 and 1
  const scale = filters.animation.scale ?? gsapFrom.scale;
  const newScale = scale > 1 ? scale * 0.01 : scale;

  const gsapTo: GSAPTo = {
    duration: filters.duration,
    ease: easingType,
    x: filters.animation.x ?? gsapFrom.x,
    y: filters.animation.y ?? gsapFrom.y,
    scale: newScale,
    opacity: newOpacity,
    rotate: filters.animation.rotate ?? gsapFrom.rotate,
    skewX: filters.animation.skewX ?? gsapFrom.skewX,
    skewY: filters.animation.skewY ?? gsapFrom.skewY,
  };

  return gsapTo;
};
