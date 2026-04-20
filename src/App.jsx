import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ZeroToMillion from "./zero_to_million";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      ></Route>
      <Route
        path="/zero_to_million"
        element={<ZeroToMillion />}
      ></Route>
    </Routes>
  );
};

export default App;
