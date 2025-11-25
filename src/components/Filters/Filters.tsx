import AnimationFilters from "./AnimationFilters";
import CommonFilters from "./CommonFilters";

const Filters = () => {
  return (
    <section className="flex-col">
      <CommonFilters />
      <AnimationFilters />
    </section>
  );
};

export default Filters;
