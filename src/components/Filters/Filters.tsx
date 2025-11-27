import AnimationFilters from "./AnimationFilters";
import CommonFilters from "./CommonFilters";

/**
 * A component that renders a section containing both common and
 * animation filters.
 */
const Filters = () => {
  return (
    <section className="flex-col">
      <CommonFilters />
      <AnimationFilters />
    </section>
  );
};

export default Filters;
