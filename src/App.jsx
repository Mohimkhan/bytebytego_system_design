import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ZeroToMillion from "./zero_to_million";
import BackOfEnvelope from "./back_of_envelope";
import DesignRateLimiter from "./design_rate_limiter";
import DesignConsistentHashing from "./design_consistent_hashing";
import DesignKeyValuePair from "./design_key_value_pair";
import DesignUniqueIdGenerator from "./design_unique_id_generator";
import DesignUrlShortener from "./design_url_shortener";
import DesignWebCrawler from "./design_web_crawler";
import DesignNotificationSystem from "./design_a_notification_system";
import DesignNewsFeedSystem from "./design_a_news_feed_system";
import DesignChatSystem from "./design_a_chat_system";

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
      <Route
        path="/design_key_value_pair"
        element={<DesignKeyValuePair />}
      ></Route>
      <Route
        path="/design_unique_id_generator"
        element={<DesignUniqueIdGenerator />}
      ></Route>
      <Route
        path="/design_url_shortener"
        element={<DesignUrlShortener />}
      ></Route>
      <Route
        path="/design_web_crawler"
        element={<DesignWebCrawler />}
      ></Route>
      <Route
        path="/design_notification_system"
        element={<DesignNotificationSystem />}
      ></Route>
      <Route
        path="/design_news_feed_system"
        element={<DesignNewsFeedSystem />}
      ></Route>
      <Route
        path="/design_chat_system"
        element={<DesignChatSystem />}
      ></Route>
    </Routes>
  );
};

export default App;
