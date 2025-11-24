import AnimatedComponent from "./components/AnimatedComponent";
import Explanation from "./components/Explanation";
import Filters from "./components/Filters";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <main className="flex-col">
      <section className="flex-col">
        <Introduction />
        <Filters />
      </section>
      <section className="split-section">
        <AnimatedComponent />
        <Explanation />
      </section>
    </main>
  );
};

export default App;
