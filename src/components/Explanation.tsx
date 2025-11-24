import Code from "./Code";
import { getSelectedEasingType } from "../utils/getSelectedEasingType";
import { useFilters } from "../hooks/useFilters";

const Explanation = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find the selected easing type from the easing types array
  const selectedEasingTypeName = filters.easingType;
  const selectedEasingType = getSelectedEasingType(selectedEasingTypeName);

  // Find the selected speed type
  const selectedSpeedType = filters.speedType;

  return (
    <aside>
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
      <h3>Feeling</h3>
      <p>{selectedEasingType?.feeling}</p>
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
      <Code />
    </aside>
  );
};

export default Explanation;
