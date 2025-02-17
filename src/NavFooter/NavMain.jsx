import { Link, useLocation } from "react-router-dom";

export default function NavMain() {
  return (
    <div className="sticky top-0 w-screen z-50 overflow-hidden">
      <div className="container mx-auto flex justify-between bg-primary py-4 px-8 rounded-3xl shadow-xl">
        <p className="text-black font-bold">VisualGearHub</p>
        <div className="flex gap-6">
          <Content to="/" content="Home" />
          <Content to="/aboutme" content="About Me" />
          <Content to="/products" content="Products" />
          <Content to="/categories" content="Categories" />
          <Content to="/contact" content="Contact" />
        </div>
      </div>
    </div>
  );
}

function Content({ to, content }) {
  const location = useLocation(); // Dapatkan path saat ini
  const isActive = location.pathname === to; // Cek apakah path saat ini sama dengan 'to'

  return (
    <div>
      <Link
        to={to}
        className={`text-lg font-semibold px-5 py-2 rounded-xl transition ${
          isActive ? "bg-white text-secondary" : "text-black hover:bg-white hover:text-secondary"
        }`}
      >
        {content}
      </Link>
    </div>
  );
}
