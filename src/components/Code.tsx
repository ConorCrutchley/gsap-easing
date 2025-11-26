import type { GSAPFrom, GSAPTo } from "../models/gsapFromTo";
import { useEffect, useState } from "react";

import { generateGSAPFromObject } from "../utils/generateGSAPFromObject";
import { generateGSAPToObject } from "../utils/generateGSAPToObject";
import { useFilters } from "../hooks/useFilters";

const Code = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Set the states
  const [copied, setCopied] = useState(false);
  const [gsapTo, setGsapTo] = useState<Partial<GSAPTo>>(
    generateGSAPToObject(filters)
  );

  useEffect(() => {
    const updateGsapTo = async () => {
      // At the moment, the gsapFrom object will always be the same.
      // I'm keeping it here though as I may pass the filters into the
      // generateGSAPFromObject function in the future so the user
      // can control how the animation begins
      const gsapFrom = generateGSAPFromObject();

      // Generate the gsapTo object which includes values that are
      // the same as in the gsapFrom object
      const updatedGsapTo = generateGSAPToObject(filters);

      // Create a new object which only contain values that are different
      // from the gsapFrom object
      const newGsapTo = Object.entries(updatedGsapTo).reduce<Partial<GSAPTo>>(
        (acc, [key, value]) => {
          if (value !== gsapFrom[key as keyof GSAPFrom]) {
            acc[key as keyof GSAPTo] = value;
          }
          return acc;
        },
        {}
      );
      setGsapTo(newGsapTo);
    };

    updateGsapTo();
  }, [filters]);

  const onCopyClick = () => {
    // Get the code element's inner text and return if it doesn't exist
    const code = document.getElementById("code");
    if (!code) return;
    const codeText = code.innerText;

    // Copy the code to the clipboard
    navigator.clipboard.writeText(codeText);

    // Set the copied state to true
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="code-section">
      <pre>
        <code id="code">
          gsap.to(".box", {JSON.stringify(gsapTo, null, 2)} );
        </code>
      </pre>
      <button onClick={onCopyClick} disabled={copied} aria-label="Copy">
        {copied ? "Copied!" : "Copy"}
      </button>
    </section>
  );
};

export default Code;
