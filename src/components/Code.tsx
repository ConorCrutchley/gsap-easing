import { useEffect, useState } from "react";

import { generateGSAPToObject } from "../utils/generateGSAPToObject";
import { useFilters } from "../hooks/useFilters";

const Code = () => {
  // Get the filter values and functions from zustand
  const filters = useFilters();

  // Set the states
  const [copied, setCopied] = useState(false);
  const [gsapTo, setGsapTo] = useState(generateGSAPToObject(filters));
  useEffect(() => {
    setGsapTo(generateGSAPToObject(filters));
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
