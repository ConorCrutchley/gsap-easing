import AnimatedComponent from "./components/AnimatedComponent";
import Explanation from "./components/Explanation";
import Filters from "./components/Filters/Filters";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <>
      <header className="flex-col">
        <Introduction />
        <Filters />
      </header>
      <main className="flex-col">
        <section className="flex-row">
          <AnimatedComponent />
          <Explanation />
        </section>
      </main>
    </>
  );
};

export default App;
