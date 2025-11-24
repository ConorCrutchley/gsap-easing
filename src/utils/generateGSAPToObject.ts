import type { Filters } from "../models/filters";
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

  return {
    x: 300,
    duration: filters.duration,
    ease: easingType,
  };
};
