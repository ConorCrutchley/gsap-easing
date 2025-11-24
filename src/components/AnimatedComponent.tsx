import { getSelectedEasingType } from "../utils/getSelectedEasingType";
import { gsap } from "gsap";
import { useFilters } from "../hooks/useFilters";
import { useState } from "react";

const AnimatedComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Get the filter values and functions from zustand
  const filters = useFilters();

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

  const durationMs = filters.duration * 1000;

  const onClickHandler = () => {
    setIsPlaying(true);
    gsap.fromTo(
      ".box",
      {
        x: 0,
      },
      {
        x: 300,
        duration: filters.duration,
        ease: easingType,
      }
    );

    setTimeout(() => {
      setIsPlaying(false);
    }, durationMs);
  };

  return (
    <>
      <button onClick={onClickHandler} disabled={isPlaying}>
        Play
      </button>
      <section className="animated-area">
        <div className="box"></div>
      </section>
    </>
  );
};

export default AnimatedComponent;
