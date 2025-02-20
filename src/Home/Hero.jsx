import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mx-auto h-screen flex flex-col lg:flex-row-reverse items-center justify-between">
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
        <div className="max-w-xl py-6 bg-white shadow-md rounded-full flex justify-between items-center px-8">
          <p className="text-black font-semibold text-xl">Mau Akses Semuanya?</p>
          <Link
            to="/login"
            className="text-white hover:text-white text-lg py-4 w-44 rounded-full text-center bg-secondary hover:bg-primary"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
