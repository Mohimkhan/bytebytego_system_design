const links = [
  {
    name: "Zero to Million",
    path: "/zero_to_million",
  },
  {
    name: "Back Of Envelope",
    path: "/back_of_envelope",
  },
  {
    name: "Design Rate Limiter",
    path: "/design_rate_limiter",
  },
  {
    name: "Design Consistent Hashing",
    path: "/design_consistent_hashing",
  },
  {
    name: "Design Key Value Pair",
    path: "/design_key_value_pair",
  },
  {
    name: "Design Unique Id Generator",
    path: "/design_unique_id_generator",
  },
  {
    name: "Design Url Shortener",
    path: "/design_url_shortener",
  },
  {
    name: "Design Web Crawler",
    path: "/design_web_crawler",
  },
  {
    name: "Design Notification System",
    path: "/design_notification_system",
  },
  {
    name: "Design News Feed System",
    path: "/design_news_feed_system",
  },
  {
    name: "Design Chat System",
    path: "/design_chat_system",
  },
  {
    name: "Design Search Autocomplete System",
    path: "/design_search_autocomplete_system",
  },
  {
    name: "Design Youtube",
    path: "/design_youtube",
  },
  {
    name: "Design Google Drive",
    path: "/design_google_drive",
  },
  {
    name: "Design Proximity Service",
    path: "/design_proximity_service",
  },
  {
    name: "Design Nearby Friends",
    path: "/design_nearby_friends",
  },
  {
    name: "Design Google Maps",
    path: "/design_google_maps",
  },
  {
    name: "Design Distributed Message Queue",
    path: "/design_distributed_message_queue",
  },
  {
    name: "Design Metrics Monitoring and Alerting System",
    path: "/design_metrics_monitoring_and_alerting_system",
  },
  {
    name: "Design Ad Click Event Aggregation",
    path: "/design_ad_click_event_aggregation",
  },
  {
    name: "Design Hotel Reservation System",
    path: "/design_hotel_reservation_system",
  },
];

const Home = () => {
  return (
    <div>
      <p className="text-red-600 font-bold text-center text-3xl mb-5">
        Byte Byte Go
      </p>
      <ol className="ml-5 border px-9 py-3">
        {links.map((link) => {
          return (
            <li className="list-decimal">
              <a
                className="block text-blue-600 underline"
                href={link.path}
                key={link.path}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Home;
