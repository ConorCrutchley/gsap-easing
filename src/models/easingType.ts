export type EasingSpeedType = "in" | "out" | "inOut";

export type EasingType = {
  name: gsap.EaseString;
  descriptions: {
    default: string;
    in?: string;
    out?: string;
    inOut?: string;
  };
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
