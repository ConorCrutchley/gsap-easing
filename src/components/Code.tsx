import { getSelectedEasingType } from "../utils/getSelectedEasingType";
import { useFilters } from "../hooks/useFilters";
import { useState } from "react";

const Code = () => {
  const [copied, setCopied] = useState(false);

  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Get the selected easing speed types
  const selectedSpeedTypes = getSelectedEasingType(
    filters.easingType
  )?.speedTypes;

  // Produce a string for the easing type based on the filters
  // and whether the easing has speed types
  const easingType = `${filters.easingType}${
    selectedSpeedTypes && selectedSpeedTypes?.length > 0
      ? `.${filters.speedType}`
      : ""
  }`;

  const onCopyClick = () => {
    // Get the code element's inner text and return if it doesn't exist
    const code = document.getElementById("code");
    if (!code) return;
    const codeText = code.innerText;

    // Remove non-breaking spaces
    const cleanCodeText = codeText.replace(/\u00A0/g, " ");

    // Copy the code to the clipboard
    navigator.clipboard.writeText(cleanCodeText);

    // Set the copied state to true
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <code id="code">
        gsap.to(target, &#123; <br />
        &nbsp;&nbsp;ease: "{easingType}", <br />
        &nbsp;&nbsp;duration: {filters.duration}, <br />
        &nbsp;&nbsp;x: 500 <br />
        &#125;);
      </code>
      <button onClick={onCopyClick} disabled={copied} aria-label="Copy">
        {copied ? "Copied!" : "Copy"}
      </button>
    </section>
  );
};

export default Code;
