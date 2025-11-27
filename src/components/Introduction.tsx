/**
 * A component that displays an introduction to the project.
 * It contains a heading and two paragraphs of text that describe
 * the project's goals and provide a link to the original
 * easing visualizer on the GSAP website.
 */
const Introduction = () => {
  return (
    <section>
      <h1>GSAP Easing</h1>
      <p>
        This project aims to clearly define and demonstrate the easing
        properties of GSAP.
      </p>
      <p>
        You can find the original easing visualizer{" "}
        <a
          href="https://gsap.com/docs/v3/Eases/"
          target="_blank"
          rel="noreferrer"
        >
          on the GSAP easing page
        </a>
        .
      </p>
    </section>
  );
};

export default Introduction;
