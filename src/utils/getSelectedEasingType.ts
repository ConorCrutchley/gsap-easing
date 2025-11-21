import { easingTypes } from "../constants/easingTypes";

export const getSelectedEasingType = (easing: gsap.EaseString) => {
  const easingType = easingTypes.find((e) => e.name === easing);
  return easingType;
};
