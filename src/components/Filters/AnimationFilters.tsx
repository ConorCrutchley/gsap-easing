import { useState, type ChangeEvent } from "react";
import { useFilters } from "../../hooks/useFilters";

/**
 * Animation filters component.
 * This component renders a form with checkboxes and number inputs
 * for each animation filter property.
 *
 * These filters are used to control what happens to the element
 * at the end of the animation.
 * @returns {JSX.Element} - The rendered animation filters form.
 */
const AnimationFilters = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // States
  const [animationX, setAnimationX] = useState(300);
  const [animationY, setAnimationY] = useState(300);
  const [animationRotate, setAnimationRotate] = useState(360);
  const [animationScale, setAnimationScale] = useState(100);
  const [animationOpacity, setAnimationOpacity] = useState(0);
  const [animationSkewX, setAnimationSkewX] = useState(45);
  const [animationSkewY, setAnimationSkewY] = useState(45);

  /**
   * Toggles the animation filter property between the current state
   * and null.
   * If the current state is null, sets the filter property to the
   * current state. If the current state is not null, sets the filter
   * property to null.
   * @param {number} currentState - The current state of the animation filter
   * @param {number|null} filterAnimationProp - The animation filter property to toggle
   * @param {(filterAnimationProp: number | null) => void} filterAnimationStateSetter - The setter function for the animation filter property
   */
  const onAnimationCheckboxChange = (
    currentState: number,
    filterAnimationProp: number | null,
    filterAnimationStateSetter: (filterAnimationProp: number | null) => void
  ) => {
    const newValue = filterAnimationProp !== null ? null : currentState;
    filterAnimationStateSetter(newValue);
  };

  /**
   * Updates the state of an animation filter property and the
   * corresponding filter state in the zustand store.
   * @param {number} newValue - The new value of the animation filter property.
   * @param {(newState: number) => void} stateSetter - The setter function for the animation filter property state.
   * @param {(filterAnimationProp: number | null) => void} filterAnimationStateSetter - The setter function for the animation filter property in the zustand store.
   */
  const onAnimationNumberChange = (
    newValue: number,
    stateSetter: (newState: number) => void,
    filterAnimationStateSetter: (filterAnimationProp: number | null) => void
  ) => {
    stateSetter(newValue);
    filterAnimationStateSetter(newValue);
  };

  /**
   * Handles a change event for the Translate X radio buttons.
   * If the value of the changed radio button is "ltr", sets the
   * animation X value to 200, otherwise sets it to -200.
   * Calls onAnimationNumberChange with the new value.
   * @param {ChangeEvent<HTMLInputElement>} e - The change event for the radio button
   */
  const onAnimationXRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "ltr" ? 200 : -200;
    onAnimationNumberChange(newValue, setAnimationX, filters.setAnimationX);
  };

  /**
   * Handles a change event for the Translate Y radio buttons.
   * If the value of the changed radio button is "ttb", sets the
   * animation Y value to 200, otherwise sets it to -200.
   * Calls onAnimationNumberChange with the new value.
   * @param {ChangeEvent<HTMLInputElement>} e - The change event for the radio button
   */
  const onAnimationYRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "ttb" ? 200 : -200;
    onAnimationNumberChange(newValue, setAnimationY, filters.setAnimationY);
  };

  return (
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationX,
                filters.animation.x,
                filters.setAnimationX
              )
            }
          />
        </div>
        {filters.animation.x !== null && (
          <div className="animation-filter-radio">
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
            </div>
            <div className="filter">
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationY,
                filters.animation.y,
                filters.setAnimationY
              )
            }
          />
        </div>
        {filters.animation.y !== null && (
          <div className="animation-filter-radio">
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
            </div>
            <div className="filter">
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationRotate,
                filters.animation.rotate,
                filters.setAnimationRotate
              )
            }
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
              onChange={(e) => {
                onAnimationNumberChange(
                  +e.target.value,
                  setAnimationRotate,
                  filters.setAnimationRotate
                );
              }}
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationScale,
                filters.animation.scale,
                filters.setAnimationScale
              )
            }
          />
        </div>
        {filters.animation.scale !== null && (
          <div className="filter">
            <label htmlFor="filters-scale-percentage">Percentage</label>
            <input
              id="filters-scale-percentage"
              type="number"
              min="0"
              max="500"
              step="1"
              value={filters.animation.scale}
              onChange={(e) => {
                onAnimationNumberChange(
                  +e.target.value,
                  setAnimationScale,
                  filters.setAnimationScale
                );
              }}
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationOpacity,
                filters.animation.opacity,
                filters.setAnimationOpacity
              )
            }
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
              onChange={(e) => {
                onAnimationNumberChange(
                  +e.target.value,
                  setAnimationOpacity,
                  filters.setAnimationOpacity
                );
              }}
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationSkewX,
                filters.animation.skewX,
                filters.setAnimationSkewX
              )
            }
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
              onChange={(e) => {
                onAnimationNumberChange(
                  +e.target.value,
                  setAnimationSkewX,
                  filters.setAnimationSkewX
                );
              }}
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
            onChange={() =>
              onAnimationCheckboxChange(
                animationSkewY,
                filters.animation.skewY,
                filters.setAnimationSkewY
              )
            }
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
              onChange={(e) => {
                onAnimationNumberChange(
                  +e.target.value,
                  setAnimationSkewY,
                  filters.setAnimationSkewY
                );
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationFilters;
