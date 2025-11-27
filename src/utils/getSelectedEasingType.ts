import { easingTypes } from "../constants/easingTypes";

/**
 * Returns the easing type object from the easingTypes array
 * that matches the provided easing string.
 *
 * @param {gsap.EaseString} easing - The easing string to search for.
 * @returns {EasingType | undefined} - The easing type object if found, undefined otherwise.
 */
export const getSelectedEasingType = (easing: gsap.EaseString) => {
  const easingType = easingTypes.find((e) => e.name === easing);
  return easingType;
};
