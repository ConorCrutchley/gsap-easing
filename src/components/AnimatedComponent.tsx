import { generateGSAPFromObject } from "../utils/generateGSAPFromObject";
import { generateGSAPToObject } from "../utils/generateGSAPToObject";
import { gsap } from "gsap";
import { useFilters } from "../hooks/useFilters";
import { useState } from "react";

/**
 * A component that renders a play button and an animation area.
 * The play button triggers the animation when clicked.
 * The animation is played using GSAP's fromTo method and is based
 * on the filters provided by the user.
 * The animation is played for the duration specified by the user in seconds,
 * and the play button is disabled until the animation is complete.
 */
const AnimatedComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Get the filter values and functions from zustand
  const filters = useFilters();

  /**
   * Handles the click event of the play button.
   * Sets the isPlaying state to true to disable the play button,
   * generates the from and to objects based on the filters,
   * converts the duration from seconds to milliseconds,
   * plays the animation using gsap.fromTo,
   * and sets the isPlaying state to false after the animation is complete
   * so the user can play the animation again.
   */
  const onClickHandler = () => {
    // Set the isPlaying state to true to disable the play button
    setIsPlaying(true);

    // Get the from and to objects
    const gsapFrom = generateGSAPFromObject();
    const gsapTo = generateGSAPToObject(filters);

    // Convert the duration from seconds to milliseconds
    const durationMs = filters.duration * 1000;

    // Play the animation
    gsap.fromTo(".box", gsapFrom, gsapTo);

    // Once the animation is complete, set the isPlaying state to
    // false so the user can play the animation again
    setTimeout(() => {
      setIsPlaying(false);
    }, durationMs);
  };

  return (
    <section className="flex-col animation-section">
      <button onClick={onClickHandler} disabled={isPlaying}>
        Play
      </button>
      <div className="animation-area">
        <div className="box"></div>
        <ul className="animation-area-x-axis">
          <li>-250</li>
          <li>-200</li>
          <li>-150</li>
          <li>-100</li>
          <li>-50</li>
          <li>0</li>
          <li>50</li>
          <li>100</li>
          <li>150</li>
          <li>200</li>
          <li>250</li>
        </ul>
        <ul className="animation-area-y-axis">
          <li>-250</li>
          <li>-200</li>
          <li>-150</li>
          <li>-100</li>
          <li>-50</li>
          <li>0</li>
          <li>50</li>
          <li>100</li>
          <li>150</li>
          <li>200</li>
          <li>250</li>
        </ul>
      </div>
    </section>
  );
};

export default AnimatedComponent;
