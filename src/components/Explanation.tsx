import { easingTypes } from "../constants/easingTypes";
import { useFilters } from "../hooks/useFilters";

const Explanation = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find the selected easing type from the easing types array
  const selectedEasingTypeName = filters.easingType;
  const selectedEasingType = easingTypes.find(
    (easingType) => easingType.name === selectedEasingTypeName
  );

  // Find the selected speed type
  const selectedSpeedType = filters.speedType;

  return (
    <section>
      <h2>{selectedEasingType?.name}</h2>
      <p>{selectedEasingType?.description}</p>
      <p>{selectedSpeedType}</p>
      {selectedEasingType && selectedEasingType.speedTypes.length > 0 && (
        <>
          <p>Speed types for this easing type include:</p>
          <ul>
            {selectedEasingType?.speedTypes.map((speedType) => (
              <li key={`explanation-speed-type-${speedType}`}>{speedType}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Explanation;
