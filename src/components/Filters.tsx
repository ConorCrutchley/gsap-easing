import type { EasingSpeedType } from "../models/easingType";
import { easingTypes } from "../constants/easingTypes";
import { getSelectedEasingType } from "../utils/getSelectedEasingType";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find what the speed types are for the selected easing type
  const selectedEasingTypeName = filters.easingType;
  const speedTypes = getSelectedEasingType(selectedEasingTypeName)?.speedTypes;

  return (
    <section className="filters-section">
      {/* Easing Type */}
      <div className="filter">
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
      </div>

      {/* Easing Speed, only displayed if easing type has speed types */}
      {speedTypes && speedTypes.length > 0 && (
        <div className="filter">
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
        </div>
      )}

      <div className="filter">
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
      </div>
    </section>
  );
};

export default Filters;
