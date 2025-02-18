import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Config/Firebase"; // pastikan pathnya benar

export default function NavMain() {
  const navigate = useNavigate();

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect ke halaman login setelah logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

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

          <div>
            <button
              onClick={handleLogout}
              className="text-lg font-semibold px-5 py-2 rounded-xl transition text-black hover:bg-white hover:text-secondary"
            >
              Logout
            </button>
          </div>
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
          isActive
            ? "bg-white text-secondary"
            : "text-black hover:bg-white hover:text-secondary"
        }`}
      >
        {content}
      </Link>
    </div>
  );
}
