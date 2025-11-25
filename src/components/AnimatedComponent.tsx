import { generateGSAPFromObject } from "../utils/generateGSAPFromObject";
import { generateGSAPToObject } from "../utils/generateGSAPToObject";
import { gsap } from "gsap";
import { useFilters } from "../hooks/useFilters";
import { useState } from "react";

const AnimatedComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Get the filter values and functions from zustand
  const filters = useFilters();

  const onClickHandler = () => {
    setIsPlaying(true);
    const gsapFrom = generateGSAPFromObject();
    const gsapTo = generateGSAPToObject(filters);
    const durationMs = filters.duration * 1000;
    gsap.fromTo(".box", gsapFrom, gsapTo);

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
      </div>
    </section>
  );
};

export default AnimatedComponent;
