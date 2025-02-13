import { Link } from "react-router-dom";

export default function NavMain() {
  return (
    <div className="fixed top-0 w-full">
      <div className="container mx-auto flex justify-between bg-primary py-4 px-8 rounded-3xl">
        <p className="text-black font-bold">VisualGearHub</p>
        <div className="flex gap-6">
          <Content to="/" content="Home" />
          <Content to="/" content="About Me" />
          <Content to="/" content="Products" />
          <Content to="/" content="Categories" />
          <Content to="/" content="Contact" />
        </div>
      </div>
    </div>
  );
}

function Content({ to, content }) {
  return (
    <div>
      <Link
        to={to}
        className="font-bold text-black hover:bg-white hover:text-secondary px-5 py-2 rounded-xl transition"
      >
        {content}
      </Link>
    </div>
  );
}
