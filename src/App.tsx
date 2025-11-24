import AnimatedComponent from "./components/AnimatedComponent";
import Code from "./components/Code";
import Explanation from "./components/Explanation";
import Filters from "./components/Filters";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <>
      <Introduction />
      <Filters />
      <Explanation />
      <Code />
      <AnimatedComponent />
    </>
  );
};

export default App;
