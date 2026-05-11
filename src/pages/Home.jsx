import { useLocalStorage } from "../hooks";

const links = [
  { name: "Zero to Million", path: "/zero_to_million" },
  { name: "Back Of Envelope", path: "/back_of_envelope" },
  { name: "Design Rate Limiter", path: "/design_rate_limiter" },
  { name: "Design Consistent Hashing", path: "/design_consistent_hashing" },
  { name: "Design Key Value Pair", path: "/design_key_value_pair" },
  { name: "Design Unique Id Generator", path: "/design_unique_id_generator" },
  { name: "Design Url Shortener", path: "/design_url_shortener" },
  { name: "Design Web Crawler", path: "/design_web_crawler" },
  { name: "Design Notification System", path: "/design_notification_system" },
  { name: "Design News Feed System", path: "/design_news_feed_system" },
  { name: "Design Chat System", path: "/design_chat_system" },
  { name: "Design Search Autocomplete System", path: "/design_search_autocomplete_system" },
  { name: "Design Youtube", path: "/design_youtube" },
  { name: "Design Google Drive", path: "/design_google_drive" },
  { name: "Design Proximity Service", path: "/design_proximity_service" },
  { name: "Design Nearby Friends", path: "/design_nearby_friends" },
  { name: "Design Google Maps", path: "/design_google_maps" },
  { name: "Design Distributed Message Queue", path: "/design_distributed_message_queue" },
  { name: "Design Metrics Monitoring and Alerting System", path: "/design_metrics_monitoring_and_alerting_system" },
  { name: "Design Ad Click Event Aggregation", path: "/design_ad_click_event_aggregation" },
  { name: "Design Hotel Reservation System", path: "/design_hotel_reservation_system" },
  { name: "Design Distributed Email Service", path: "/design_distributed_email_service" },
  { name: "Design S3-like Object Storage", path: "/design_s3_like_object_storage" },
  { name: "Design Real-time Gaming Leaderboard", path: "/design_real_time_gaming_leaderboard" },
];

const Home = () => {
  const [completed, setCompleted] = useLocalStorage("bbg_completed_chapters", {});
  const [visited, setVisited] = useLocalStorage("bbg_visited_chapters", {});

  const toggleComplete = (path) => {
    setCompleted((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const handleLinkClick = (path) => {
    setVisited((prev) => ({ ...prev, [path]: true }));
  };

  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-1 tracking-tight">
          ByteByteGo
        </h1>
        <p className="text-gray-500 text-sm mb-4">System Design Interview — Alex Xu</p>

        {/* Progress bar */}
        <div className="flex items-center gap-3 justify-center">
          <span className="text-sm text-gray-500">
            {completedCount}/{links.length} completed
          </span>
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / links.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapter list */}
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {links.map((link, index) => {
          const isDone = !!completed[link.path];
          const isVisited = !!visited[link.path];

          return (
            <div
              key={link.path}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 shadow-sm
                ${isDone
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
            >
              {/* Chapter number */}
              <span
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
                  ${isDone ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}
              >
                {isDone ? "✓" : index + 1}
              </span>

              {/* Link button */}
              <a
                href={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium text-left transition-all duration-200 border
                  ${isVisited
                    ? "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
                    : "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  }
                  hover:shadow-sm active:scale-[0.98]`}
              >
                {link.name}
              </a>

              {/* Mark as complete button */}
              <button
                onClick={() => toggleComplete(link.path)}
                title={isDone ? "Mark as incomplete" : "Mark as complete"}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200
                  ${isDone
                    ? "bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600"
                  }
                  active:scale-95`}
              >
                {isDone ? "✓ Done" : "Mark done"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-gray-400 mt-10">
        Progress is saved in your browser automatically.
      </p>
    </div>
  );
};

export default Home;
