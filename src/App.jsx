import Appheading from "./components/Appheading";
import AppData from "./components/Appdata";
import AppTime from "./components/Apptime";
import "./App.css";

function AppName() {
  return (
    <center className="container w-100 clock_app my-3">
      <Appheading></Appheading>
      <AppData></AppData>
      <AppTime></AppTime>
    </center>
  );
}

export default AppName;
