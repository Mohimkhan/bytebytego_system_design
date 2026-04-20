const links = [
  {
    name: "Zero to Million",
    path: "/zero_to_million",
  },
];

const Home = () => {
  return (
    <div>
      <p className="text-red-600 font-bold">Hello React</p>

      {links.map((link) => {
        return (
          <a
            className="text-blue-600 underline"
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
