import AnimatedComponent from "./components/AnimatedComponent";
import Explanation from "./components/Explanation";
import Filters from "./components/Filters/Filters";
import Introduction from "./components/Introduction";

/**
 * The App component is the main component of the application.
 * It renders a header with an Introduction and Filters components,
 * and a main section with an AnimatedComponent and an Explanation component.
 */
const App = () => {
  return (
    <>
      <header className="flex-col">
        <Introduction />
        <Filters />
      </header>
      <main className="flex-row">
        <AnimatedComponent />
        <Explanation />
      </main>
    </>
  );
};

export default App;
