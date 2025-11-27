import Code from "./Code";
import { getSelectedEasingType } from "../utils/getSelectedEasingType";
import { useFilters } from "../hooks/useFilters";

/**
 * A component that displays an explanation of the currently
 * selected easing type as well as the code for the animation.
 */
const Explanation = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find the selected easing type from the easing types array
  const selectedEasingTypeName = filters.easingType;
  const selectedEasingType = getSelectedEasingType(selectedEasingTypeName);

  // Find the selected speed type
  const selectedSpeedType = filters.speedType;

  // Check if the easing type has speed types
  const hasSpeedTypes =
    selectedEasingType && selectedEasingType.speedTypes.length > 0;

  // Find the description for the selected easing type
  const selectedDescription =
    hasSpeedTypes && selectedEasingType.descriptions[selectedSpeedType]
      ? selectedEasingType.descriptions[selectedSpeedType]
      : selectedEasingType?.descriptions.default;

  return (
    <aside>
      {/* Name and speed type */}
      <h2>
        {selectedEasingType?.name}
        {hasSpeedTypes && `.${selectedSpeedType}`}
      </h2>

      {/* Description */}
      <p>{selectedDescription}</p>

      {/* Speed types if the easing type has them */}
      {hasSpeedTypes && (
        <>
          <p>Speed types for this easing type include:</p>
          <ul>
            {selectedEasingType?.speedTypes.map((speedType) => (
              <li key={`explanation-speed-type-${speedType}`}>{speedType}</li>
            ))}
          </ul>
        </>
      )}

      {/* Feeling */}
      <h3>Feeling</h3>
      <p>{selectedEasingType?.feeling}</p>

      {/* Use cases and examples if the easing type has them */}
      {selectedEasingType &&
        selectedEasingType.useCase.length > 0 && (
          <>
            <h3>Use Cases</h3>
            <ul>
              {selectedEasingType?.useCase.map((useCase, i) => (
                <li key={`explanation-use-case-${i}`}>{useCase}</li>
              ))}
            </ul>
          </>
        ) &&
        selectedEasingType.examples.length > 0 && (
          <>
            <h3>Examples</h3>
            {selectedEasingType?.examples.map((example, i) => (
              <p key={`explanation-example-${i}`}>
                {example.description} <br />
                <a href={example.link.href} target="_blank" rel="noreferrer">
                  {example.link.text}
                </a>
              </p>
            ))}
          </>
        )}

      {/* Code */}
      <Code />
    </aside>
  );
};

export default Explanation;
