const links = [
  {
    name: "Zero to Million",
    path: "/zero_to_million",
  },
  {
    name: "Back Of Envelope",
    path: "/back_of_envelope",
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
