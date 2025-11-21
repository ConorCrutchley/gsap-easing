import { easingTypes, type EasingSpeedType } from "../constants/easingTypes";
import { useFilters } from "../hooks/useFilters";
import { getSelectedEasingType } from "../utils/getSelectedEasingType";
const Filters = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find what the speed types are for the selected easing type
  const selectedEasingTypeName = filters.easingType;
  const speedTypes = getSelectedEasingType(selectedEasingTypeName)?.speedTypes;

  return (
    <section>
      {/* Easing Type */}
      <label>Easing Type</label>
      <select
        onChange={(e) => filters.setEasingType(e.target.value)}
        value={filters.easingType}
      >
        {easingTypes.map((easingType) => (
          <option
            key={`fileters-easing-type-${easingType.name}`}
            value={easingType.name}
          >
            {easingType.name}
          </option>
        ))}
      </select>

      {/* Easing Speed, only displayed if easing type has speed types */}
      {speedTypes && speedTypes.length > 0 && (
        <>
          <label>Speed</label>
          <select
            onChange={(e) =>
              filters.setSpeedType(e.target.value as EasingSpeedType)
            }
            value={filters.speedType}
          >
            {speedTypes.map((speedType) => (
              <option key={`filters-speed-type-${speedType}`} value={speedType}>
                {speedType}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Duration */}
      <label>Duration (in seconds)</label>
      <input
        type="number"
        name="duration"
        min="0"
        step="0.5"
        max="15"
        onChange={(e) => filters.setDuration(+e.target.value)}
        value={filters.duration}
      />
    </section>
  );
};

export default Filters;
