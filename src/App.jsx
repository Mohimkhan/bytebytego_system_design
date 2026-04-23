import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ZeroToMillion from "./zero_to_million";
import BackOfEnvelope from "./back_of_envelope";
import DesignRateLimiter from "./design_rate_limiter";
import DesignConsistentHashing from "./design_consistent_hashing";

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
      <Route
        path="/design_rate_limiter"
        element={<DesignRateLimiter />}
      ></Route>
      <Route
        path="/design_consistent_hashing"
        element={<DesignConsistentHashing />}
      ></Route>
    </Routes>
  );
};

export default App;
