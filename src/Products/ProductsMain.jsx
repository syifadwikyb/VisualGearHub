import { FaSearch } from "react-icons/fa";
import Container from "../NavFooter/Container";
import CardProduct from "./CardProduct";
import { app } from "../Config/Firebase";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ProductsMain() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);
  return (
    <Container>
      <div className="container mx-auto mb-24 mt-28">
        <div className="relative w-full shadow-xl mb-10">
          <input
            name="search"
            type="text"
            className="text-lg border rounded-xl w-full py-4 px-3 text-back placeholder:opacity-50"
            placeholder="Cari..."
          />
          <button className="absolute right-1 top-1 bottom-1 w-auto hover:bg-secondary bg-primary rounded-xl font-semibold text-black flex items-center flex-row-reverse gap-4 p-4">
            Seacrh
            <FaSearch />
          </button>
        </div>

        <div className="grid grid-cols-4 mx-auto place-items-center gap-12">
          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

<CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />

          <CardProduct
            img="/img/Camera1.jpg"
            name="Sony Alpha A7 IV Mirrorless Camera"
            li1="Sensor: 33MP Full-Frame"
            li2="Resolusi Video: 4K 60fps"
            li3="Fitur: Stabilisasi 5-Axis, Autofokus Cepat"
            price="Rp 25.000.000"
          />
        </div>
      </div>
    </Container>
  );
}
