import type { EasingSpeedType } from "../models/easingType";
import { easingTypes } from "../constants/easingTypes";
import { getSelectedEasingType } from "../utils/getSelectedEasingType";
import { useFilters } from "../hooks/useFilters";
import { useState, type ChangeEvent } from "react";

const Filters = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Find what the speed types are for the selected easing type
  const selectedEasingTypeName = filters.easingType;
  const speedTypes = getSelectedEasingType(selectedEasingTypeName)?.speedTypes;

  // States
  const [animationX, setAnimationX] = useState(300);
  const [animationY, setAnimationY] = useState(300);
  const [animationRotate, setAnimationRotate] = useState(360);
  const [animationScale, setAnimationScale] = useState(100);
  const [animationOpacity, setAnimationOpacity] = useState(0);
  const [animationSkewX, setAnimationSkewX] = useState(45);
  const [animationSkewY, setAnimationSkewY] = useState(45);

  const onAnimationXCheckboxChange = () => {
    const newValue = filters.animation.x !== null ? null : animationX;
    filters.setAnimationX(newValue);
  };
  const onAnimationYCheckboxChange = () => {
    const newValue = filters.animation.y !== null ? null : animationY;
    filters.setAnimationY(newValue);
  };
  const onAnimationRotateCheckboxChange = () => {
    const newValue = filters.animation.rotate !== null ? null : animationRotate;
    filters.setAnimationRotate(newValue);
  };
  const onAnimationScaleCheckboxChange = () => {
    const newValue = filters.animation.scale !== null ? null : animationScale;
    filters.setAnimationScale(newValue);
  };
  const onAnimationOpacityCheckboxChange = () => {
    const newValue =
      filters.animation.opacity !== null ? null : animationOpacity;
    filters.setAnimationOpacity(newValue);
  };
  const onAnimationSkewXCheckboxChange = () => {
    const newValue = filters.animation.skewX !== null ? null : animationSkewX;
    filters.setAnimationSkewX(newValue);
  };
  const onAnimationSkewYCheckboxChange = () => {
    const newValue = filters.animation.skewY !== null ? null : animationSkewY;
    filters.setAnimationSkewY(newValue);
  };
  const onAnimationXRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "ltr" ? 300 : -300;
    setAnimationX(newValue);
    filters.setAnimationX(newValue);
  };
  const onAnimationYRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "ttb" ? 300 : -300;
    setAnimationY(newValue);
    filters.setAnimationY(newValue);
  };
  const onAnimationRotateNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    setAnimationRotate(newValue);
    filters.setAnimationRotate(newValue);
  };
  const onAnimationScaleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    setAnimationScale(newValue);
    filters.setAnimationScale(newValue);
  };
  const onAnimationOpacityNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    setAnimationOpacity(newValue);
    filters.setAnimationOpacity(newValue);
  };
  const onAnimationSkewXNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    setAnimationSkewX(newValue);
    filters.setAnimationSkewX(newValue);
  };
  const onAnimationSkewYNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    setAnimationSkewY(newValue);
    filters.setAnimationSkewY(newValue);
  };

  return (
    <section className="filters-section">
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

      {/* Animation Filters */}
      <div className="animation-filters">
        {/* Translate X */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-translate-x">Translate X</label>
            <input
              id="filters-translate-x"
              type="checkbox"
              value="true"
              checked={filters.animation.x !== null}
              onChange={onAnimationXCheckboxChange}
            />
          </div>
          {filters.animation.x !== null && (
            <div className="filter">
              <input
                id="filters-translate-x-ltr"
                name="filters-translate-x-direction"
                type="radio"
                value="ltr"
                checked={filters.animation.x > 0}
                onChange={onAnimationXRadioChange}
              />
              <label htmlFor="filters-translate-x-ltr">Left to Right</label>
              <input
                id="filters-translate-x-rtl"
                name="filters-translate-x-direction"
                type="radio"
                value="rtl"
                checked={filters.animation.x < 0}
                onChange={onAnimationXRadioChange}
              />
              <label htmlFor="filters-translate-x-rtl">Right to Left</label>
            </div>
          )}
        </div>

        {/* Translate Y */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-tranlate-y">Tranlate Y</label>
            <input
              id="filters-tranlate-y"
              type="checkbox"
              value="true"
              checked={filters.animation.y !== null}
              onChange={onAnimationYCheckboxChange}
            />
          </div>
          {filters.animation.y !== null && (
            <div className="filter">
              <input
                id="filters-translate-y-ttb"
                name="filters-translate-y-direction"
                type="radio"
                value="ttb"
                checked={filters.animation.y > 0}
                onChange={onAnimationYRadioChange}
              />
              <label htmlFor="filters-translate-y-ttb">Top to Bottom</label>
              <input
                id="filters-translate-y-btt"
                name="filters-translate-y-direction"
                type="radio"
                value="btt"
                checked={filters.animation.y < 0}
                onChange={onAnimationYRadioChange}
              />
              <label htmlFor="filters-translate-y-btt">Bottom to Top</label>
            </div>
          )}
        </div>

        {/* Rotate */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-rotate">Rotate</label>
            <input
              id="filters-rotate"
              type="checkbox"
              value="true"
              checked={filters.animation.rotate !== null}
              onChange={onAnimationRotateCheckboxChange}
            />
          </div>
          {filters.animation.rotate !== null && (
            <div className="filter">
              <label htmlFor="filters-rotate-degrees">Degrees</label>
              <input
                id="filters-rotate-degrees"
                type="number"
                min="-360"
                max="360"
                step="1"
                value={filters.animation.rotate}
                onChange={onAnimationRotateNumberChange}
              />
            </div>
          )}
        </div>

        {/* Scale */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-scale">Scale</label>
            <input
              id="filters-scale"
              type="checkbox"
              value="true"
              checked={filters.animation.scale !== null}
              onChange={onAnimationScaleCheckboxChange}
            />
          </div>
          {filters.animation.scale !== null && (
            <div className="filter">
              <label htmlFor="filters-scale-percentage">Percentage</label>
              <input
                id="filters-scale-percentage"
                type="number"
                min="0"
                step="1"
                value={filters.animation.scale}
                onChange={onAnimationScaleNumberChange}
              />
            </div>
          )}
        </div>

        {/* Opacity */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-opacity">Opacity</label>
            <input
              id="filters-opacity"
              type="checkbox"
              value="true"
              checked={filters.animation.opacity !== null}
              onChange={onAnimationOpacityCheckboxChange}
            />
          </div>
          {filters.animation.opacity !== null && (
            <div className="filter">
              <label htmlFor="filters-opacity-percentage">Percentage</label>
              <input
                id="filters-opacity-percentage"
                type="number"
                min="0"
                max="100"
                step="1"
                value={filters.animation.opacity}
                onChange={onAnimationOpacityNumberChange}
              />
            </div>
          )}
        </div>

        {/* Skew X */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-skew-x">Skew X</label>
            <input
              id="filters-skew-x"
              type="checkbox"
              value="true"
              checked={filters.animation.skewX !== null}
              onChange={onAnimationSkewXCheckboxChange}
            />
          </div>
          {filters.animation.skewX !== null && (
            <div className="filter">
              <label htmlFor="filters-skew-x-degrees">Degrees</label>
              <input
                id="filters-skew-x-degrees"
                type="number"
                min="-360"
                max="360"
                step="1"
                value={filters.animation.skewX}
                onChange={onAnimationSkewXNumberChange}
              />
            </div>
          )}
        </div>

        {/* Skew Y */}
        <div className="animation-filter">
          <div className="filter">
            <label htmlFor="filters-skew-y">Skew Y</label>
            <input
              id="filters-skew-y"
              type="checkbox"
              value="true"
              checked={filters.animation.skewY !== null}
              onChange={onAnimationSkewYCheckboxChange}
            />
          </div>
          {filters.animation.skewY !== null && (
            <div className="filter">
              <label htmlFor="filters-skew-y-degrees">Degrees</label>
              <input
                id="filters-skew-y-degrees"
                type="number"
                min="-360"
                max="360"
                step="1"
                value={filters.animation.skewY}
                onChange={onAnimationSkewYNumberChange}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filters;
