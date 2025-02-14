import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between my-24">
      <img
        src="/img/Hero.png"
        className="w-[1280px] max-w-full h-auto"
        alt="Hero Image"
      />

      <div className="mr-24">
        <h1 className="font-bold text-5xl text-black">
          Temukan Peralatan{" "}
          <span className="text-primary">Videografi & Fotografi</span> Terbaik
          untuk Karya Anda!
        </h1>
        <p className="mt-3 text-3xl text-black">
          Beli Peralatan Berkualitas Tinggi dengan Mudah dan Cepat.
        </p>
        <div className="w-full py-6 bg-white shadow-md rounded-full flex justify-end">
          <div className="py-4 w-44 rounded-full text-center mr-8 bg-primary hover:bg-secondary">
            <Link to="/login" className="text-white text-lg">
              Daftar Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
