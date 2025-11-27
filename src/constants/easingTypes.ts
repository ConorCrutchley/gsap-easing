import type { EasingSpeedType, EasingType } from "../models/easingType";

const commonTypes: EasingSpeedType[] = ["in", "out", "inOut"];

// List of easing types
// TODO: Find real world examples of each easing
export const easingTypes: EasingType[] = [
  {
    name: "none",
    descriptions: {
      default:
        "Also known as linear, this is where there is no easing at all. The animation moves at a constant speed from start to finish.",
    },
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
    descriptions: {
      default:
        "With the back ease, this moves slightly past the start/end value before setting into place.",
      in: "With the back.in ease, the element moves slightly below the start value at the beginning of the animation before accelerating halfway through the end of the animation.",
      out: "With the back.out ease, this accelerates at the beginning, slows midway and moves past the end point before going back and setting into place.",
      inOut:
        "With the back.inOut ease, the element moves slightly below the start value at the beginning of the animation before accelerating halfway through the animation, then slows and moves past the end point before going back and setting into place.",
    },
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
    descriptions: {
      default:
        "The bounce ease mimics gravity. It hits the target then bounces several times until it settles.",
      in: "The element bounces a few times at the start of the animation, each time getting further away from the start point before accelerating towards the end.",
      out: "The element accelerates towards the end and bounces a few times at the end point before stopping.",
      inOut:
        "The element bounces a few times at the start and end of the animation, each time getting further away from the start point before accelerating and bouncing towards the end point.",
    },
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
    descriptions: {
      default:
        "The circular ease starts very slowly, accelerates quickly towards the middle, then eases sharply at the end.",
      in: "Animation is slow to start and grandually accelerates as the animation goes on.",
      out: "Animation is fast to start and gradually slows as the animation goes on.",
      inOut:
        "Animation is slow to start, accelerates halfway, then slows again towards the end.",
    },
    feeling:
      "Natural, rounded motion, similar to objects moving along a circular arc.",
    useCase: [
      "Natural-feeling movements",
      "Smooth entrances/exits that shouldn't feel too “techy”",
      "Softly accelerating animations like modals or hero text",
    ],
    examples: [],
    speedTypes: commonTypes,
  },
  {
    name: "elastic",
    descriptions: {
      default:
        "The elastic ease overshoots and oscillates back and forth multiple times like a rubber band or a string.",
      in: "The elastic.in ease begins slow, moving slightly back and forth before a big movement back and a big quick movement to the end.",
      out: "The elastic.out ease begins fast, moving far past the end point before coming back and moving slowly back and forth before it reaches the end.",
      inOut:
        "The elastic.inOut ease begins slow, moving back and forth, before a big movement back at the halfway point. It then moves far past the end point before coming back and moving slowly back and forth before it reaches the end.",
    },
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
    descriptions: {
      default:
        "Similar to the circular ease, the exponential ease start extremely slow, rapily accelerates, then slows sharply at the end.",
      in: "Similar to the circ.in ease, the element moves slowly before rapidly accelerating towards the end. This is a little less fluid than the circ.in ease, the acceleration is more linear.",
      out: "Similar to the circ.out ease, the element moves quickly towards the end point before slowly slowing down. This is a little less fluid than the circ.out ease, the deceleration is more linear.",
      inOut:
        "Similar to the circ.inOut ease, the element moves slowly before rapidly accelerating towards the end point, then slowly slowing down. This is a little less fluid than the circ.inOut ease, the acceleration and deceleration are more linear.",
    },
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
    descriptions: {
      default:
        "Power1.out is the default easing used by GSAP. It is a power based ease with mild acceleration / deceleration.",
      in: "This starts at a medium pace and accelerates just a little bit halfway through the animation.",
      out: "The default easing used by GSAP. This starts at a mild speed and slows down slightly midway through the animation. ",
      inOut:
        "This starts at a slightly fast pace before speeding up in the middle and decelerating back to its original pace at the end.",
    },
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
    descriptions: {
      default: "A power based ease with slight acceleration and deceleration.",
      in: "This starts slightly slowly and accelerates just at about 40% of the way through the animation.",
      out: "This starts at a mild speed and slows down slightly at about 50% of the way through the animation.",
      inOut:
        "This starts at a medium pace before speeding up in the middle and decelerating back to its original pace at the end.",
    },
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
    descriptions: {
      default:
        "A power based ease that goes faster in the middle and slower at the ends.",
      in: "This starts slowly and accelerates just at just over 50% of the way through the animation.",
      out: "This starts at quick pace and slows down slightly at about 40% of the way through the animation.",
      inOut:
        "This starts at a quite slow pace before speeding up in the middle and decelerating back to its original pace at the end.",
    },
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
    descriptions: {
      default:
        "A power based ease with fast acceleration and a very slow finish.",
      in: "This starts slowly and accelerates just at just over 60% of the way through the animation.",
      out: "This starts at quick pace and slows down slightly at just under 40% of the way through the animation.",
      inOut:
        "This starts at a very slow pace, speeding up sharply in the middle and decelerating back to its original pace at the end.",
    },
    feeling:
      "The strongest of the power eases — very fast acceleration and very slow start/finish.",
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
    descriptions: {
      default:
        "The sine ease is based on a sine wave curve with a smooth rise and a smooth fall.",
      in: "The sine.in ease is based on a sine wave curve with a smooth, slow rise and a smooth acceleration to the finish.",
      out: "The sine.out ease is based on a sine wave curve with a smooth rise and a smooth, slow finish.",
      inOut:
        "The sine ease is based on a sine wave curve with a smooth rise and a smooth fall.",
    },
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
