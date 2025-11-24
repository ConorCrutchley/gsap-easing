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
    const gsapTo = generateGSAPToObject(filters);
    const durationMs = filters.duration * 1000;
    gsap.fromTo(
      ".box",
      {
        x: 0,
      },
      gsapTo
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
