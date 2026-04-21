import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ZeroToMillion from "./zero_to_million";
import BackOfEnvelope from "./back_of_envelope";

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
      <Route
        path="/back_of_envelope"
        element={<BackOfEnvelope />}
      ></Route>
    </Routes>
  );
};

export default App;
