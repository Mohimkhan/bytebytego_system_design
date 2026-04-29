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
];

const Home = () => {
  return (
    <div>
      <p className="text-red-600 font-bold">Hello React</p>

      {links.map((link) => {
        return (
          <a
            className="block text-blue-600 underline"
            href={link.path}
            key={link.path}
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
};
export default Home;
