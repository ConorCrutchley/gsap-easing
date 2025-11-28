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
  const [isReset, setIsReset] = useState(true);

  // Get the filter values and functions from zustand
  const filters = useFilters();

  /**
   * Plays the animation by getting the to object from the filters
   * and converting the duration from seconds to milliseconds.
   * Then, it plays the animation using GSAP's to method.
   * Once the animation is complete, it sets the isPlaying state to
   * false so the user can play the animation again.
   * @returns {void}
   */
  const playAnimation = () => {
    // Get the to object
    const gsapTo = generateGSAPToObject(filters);

    // Convert the duration from seconds to milliseconds
    const durationMs = filters.duration * 1000;

    // Play the animation
    gsap.to(".box", gsapTo);

    // Once the animation is complete, set the isPlaying state to
    // false so the user can play the animation again
    setTimeout(() => {
      setIsReset(false);
      setIsPlaying(false);
    }, durationMs);
  };

  /**
   * Handles the play button click event by setting the isPlaying state to true
   * and checking if the animation is already reset. If the animation is already
   * reset, it plays the animation immediately. If not, it resets the animation
   * before playing and waits for 0.5 seconds before playing the animation so the
   * user can clearly see where the animation starts from.
   */
  const onPlayHandler = () => {
    // Set the isPlaying state to true to disable the play button
    setIsPlaying(true);

    // If the animation is already reset, play the animation immediately
    if (isReset) playAnimation();
    else {
      // Reset the animation before playing
      onResetHandler();

      // Wait for 0.5 seconds before playing the animation so the user
      // can clearly see where the animation starts from
      setTimeout(() => {
        playAnimation();
      }, 500);
    }
  };

  /**
   * Resets the animation before playing by setting the from object.
   * It sets the isReset state to true after resetting the animation.
   */
  const onResetHandler = () => {
    // Reset the animation before playing by setting the from object
    const gsapFrom = generateGSAPFromObject();
    gsap.set(".box", gsapFrom);
    setIsReset(true);
  };

  return (
    <section className="flex-col animation-section">
      <div className="flex-row">
        <button onClick={onPlayHandler} disabled={isPlaying}>
          Play
        </button>
        <button onClick={onResetHandler} disabled={isPlaying}>
          Reset
        </button>
      </div>
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
