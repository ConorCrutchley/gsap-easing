export type EasingSpeedType = "in" | "out" | "inOut";

export type EasingType = {
  name: gsap.EaseString;
  description: string;
  feeling: string;
  useCase: string[];
  examples: {
    description: string;
    link: {
      href: string;
      text: string;
    };
  }[];
  speedTypes: EasingSpeedType[];
};
