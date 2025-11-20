import { gsap } from "gsap";

export type EasingSpeedType = "in" | "out" | "inOut";

type EasingType = {
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

const commonTypes: EasingSpeedType[] = ["in", "out", "inOut"];

export const easingTypes: EasingType[] = [
  {
    name: "none",
    description:
      "Also kown as linear, this is where there is no easing at all. The animation moves at a constant speed from start to finish.",
    feeling: "Mechanical, steady, no acceleration or deceleration",
    useCase: [
      "Progress bars",
      "Timers",
      "Animations where speed must be perfectly constant",
      "Debugging when you want to see raw motion without easing",
    ],
    examples: [],
    speedTypes: [],
  },
  {
    name: "back",
    description:
      "With the back ease, this moves slightly past the start/end value before setting into place.",
    feeling:
      "Creates a “wind-up” or “overshoot,” like pulling and releasing a stretchy band",
    useCase: [
      "Buttons or cards entering the screen with personality",
      "Tooltips or dropdowns that “pop” open",
      "Elements that should feel slightly springy without a full-on elastic wobble",
      "UI microinteractions where a subtle overshoot adds polish",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "bounce",
    description:
      "The bounce ease mimics gravity. It hits the target then bounces several times until it settles.",
    feeling: "Energetic, playful, bouncy physics effect",
    useCase: [
      "Playful UI elements",
      "Game UI, children's sites, or fun animations",
      "Dropping objects into place (e.g., icons falling into a grid)",
      "Celebratory effects (points, coins, rewards)",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "circ",
    description:
      "The circular ease starts very slowly, accelerates quickly towards the middle, then eases sharply at the end.",
    feeling:
      "Natural, rounded motion, similar to objects moving along a circular arc.",
    useCase: [
      "Natural-feeling movements",
      "Smooth entrances/exits that shouldn't feel too “techy”",
      "Softly accelerating animations like modals or hero text",
      "Organic transitions where speed ramps feel real-world",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "elastic",
    description:
      "The elastic ease overshoots and oscillates back and forth multiple times like a rubber band or a string.",
    feeling: "Stretchy, wobbly, rubber-band-like motion.",
    useCase: [
      "Highly stylised or playful UI",
      "Animated logos or mascots",
      "Elements that should feel rubbery or flexible",
      "Attention-grabbing reveals (if used sparingly)",
      "Showcasing physics-like effects without writing custom springs",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "expo",
    description:
      "Similar to the circular ease, the exponential ease start extremely slow, rapily accelerates, then slows sharply at the end.",
    feeling: "Dramatic, powerful, high-impact easing.",
    useCase: [
      "Dramatic entrances (hero sections, large titles, splash screens)",
      "Animations that must feel “powerful” or high-tech",
      "Reveals where you want a slow build-up then a rapid finish",
      "Animations synced with sound or impact effects",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "power1",
    description: "A power based eas with mild acceleration / deceleration.",
    feeling: "Smooth and subtle. Also known as Quad.",
    useCase: [
      "Most UI animations — subtle and pleasant",
      "Fades, slides, and small movements",
      "Motion that shouldn't draw attention to itself",
      "Scroll-based animations",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "power2",
    description: "A power based eas with slight acceleration and deceleration.",
    feeling: "More noticeable speed curve. Also known as Cubic.",
    useCase: [
      "Slightly more dynamic UI transitions",
      "Moving mid-sized elements (cards, panels, sections)",
      "When power1 feels too soft but power3 or expo feels too strong",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "power3",
    description:
      "A power based ease that goes faster in the middle and slower at the ends.",
    feeling: "Even stronger ease — faster in the middle, slower at the ends.",
    useCase: [
      "Snappier UI transitions",
      "Larger movements across the screen",
      "Animations where you want a strong acceleration/deceleration",
      "Content reveals where the motion should feel decisive",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "power4",
    description:
      "A power based ease with fast acceleration and a very slow finish.",
    feeling:
      "The strongest of the power eases — very fast acceleration and very slow finish.",
    useCase: [
      "Very fast, impactful animations",
      "Hero header entrances",
      "Animations that need to feel intense but not “cartoony”",
      "High-end motion design where strong curves look intentional",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "sine",
    description:
      "The sine ease is based on a sine wave curve with a smooth rise and a smooth fall.",
    feeling: "Gentle, natural, rhythmic; resembles a smooth pendulum motion.",
    useCase: [
      "Very gentle UI transitions",
      "Modal fades, soft movements, opacity/blur effects",
      "Hover effects",
      "Page transitions that should feel calm and smooth",
      "When you want easing that's noticeable but not dramatic",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
];
