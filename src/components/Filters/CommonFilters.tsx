import type { EasingSpeedType } from "../../models/easingType";
import { easingTypes } from "../../constants/easingTypes";
import { getSelectedEasingType } from "../../utils/getSelectedEasingType";
import { useFilters } from "../../hooks/useFilters";

const CommonFilters = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find what the speed types are for the selected easing type
  const selectedEasingTypeName = filters.easingType;
  const speedTypes = getSelectedEasingType(selectedEasingTypeName)?.speedTypes;

  return (
    <div className="flex-row flex-wrap">
      {/* Easing Type */}
      <div className="filter">
        <label htmlFor="filters-easing-type">Easing Type</label>
        <select
          id="filters-easing-type"
          onChange={(e) => filters.setEasingType(e.target.value)}
          value={filters.easingType}
        >
          {easingTypes.map((easingType) => (
            <option
              key={`filters-easing-type-${easingType.name}`}
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
          <label htmlFor="filters-speed-type">Speed</label>
          <select
            id="filters-speed-type"
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

      {/* Duration */}
      <div className="filter">
        <label htmlFor="filters-duration">Duration (in seconds)</label>
        <input
          id="filters-duration"
          type="number"
          name="duration"
          min="0"
          step="0.5"
          max="15"
          onChange={(e) => filters.setDuration(+e.target.value)}
          value={filters.duration}
        />
      </div>
    </div>
  );
};

export default CommonFilters;
