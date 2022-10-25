import "./index.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Slider } from "./components/Slider/Slider";

export const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Slider />
    </div>
  );
};
