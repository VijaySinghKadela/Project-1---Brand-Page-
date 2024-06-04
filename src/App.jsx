import Navber from "./components/Navber";
import Content from "./components/Content";
import Shoe from "./components/Shoe";
const App = () => {
  return (
    <div className="w-full ">
      <Navber />
      <div className="flex ">
        <Content />
        <Shoe />
      </div>
    </div>
  );
};

export default App;
