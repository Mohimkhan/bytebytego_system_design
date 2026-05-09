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
import DesignSearchAutocompleteSystem from "./design_a_search_autocomplete_system";
import DesignYoutube from "./design_youtube";
import DesignGoogleDrive from "./design_google_drive";
import DesignProximityService from "./design_proximity_service";
import DesignNearbyFriends from "./design_nearby_friends";
import DesignGoogleMaps from "./design_google_maps";
import DesignDistributedMessageQueue from "./design_distributed_message_queue";
import DesignMetricsMonitoringAndAlertingSystem from "./design_metrics_monitoring_and_alerting_system";
import DesignAdClickEventAggregation from "./design_ad_click_event_aggregation";
import DesignHotelReservationSystem from "./design_hotel_reservation_system";
import DesignDistributedEmailService from "./design_distributed_email_service";
import DesignS3LikeObjectStorage from "./design_s3_like_object_storage";
import DesignRealTimeGamingLeaderboard from "./design_real_time_gaming_leaderboard";

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
      <Route
        path="/design_search_autocomplete_system"
        element={<DesignSearchAutocompleteSystem />}
      ></Route>
      <Route
        path="/design_youtube"
        element={<DesignYoutube />}
      ></Route>
      <Route
        path="/design_google_drive"
        element={<DesignGoogleDrive />}
      ></Route>
      <Route
        path="/design_proximity_service"
        element={<DesignProximityService />}
      ></Route>
      <Route
        path="/design_nearby_friends"
        element={<DesignNearbyFriends />}
      ></Route>
      <Route
        path="/design_google_maps"
        element={<DesignGoogleMaps />}
      ></Route>
      <Route
        path="/design_distributed_message_queue"
        element={<DesignDistributedMessageQueue />}
      ></Route>
      <Route
        path="/design_metrics_monitoring_and_alerting_system"
        element={<DesignMetricsMonitoringAndAlertingSystem />}
      ></Route>
      <Route
        path="/design_ad_click_event_aggregation"
        element={<DesignAdClickEventAggregation />}
      ></Route>
      <Route
        path="/design_hotel_reservation_system"
        element={<DesignHotelReservationSystem />}
      ></Route>
      <Route
        path="/design_distributed_email_service"
        element={<DesignDistributedEmailService />}
      ></Route>
      <Route
        path="/design_s3_like_object_storage"
        element={<DesignS3LikeObjectStorage />}
      ></Route>
      <Route
        path="/design_real_time_gaming_leaderboard"
        element={<DesignRealTimeGamingLeaderboard />}
      ></Route>
    </Routes>
  );
};

export default App;
