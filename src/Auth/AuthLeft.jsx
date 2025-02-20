import { useNavigate } from "react-router-dom";

export default function AuthLeft() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="relative w-[800px] h-[720px]">
      <button
        onClick={handleLogin}
        className="absolute bg-primary px-6 py-2 rounded-xl mt-10 items-center w-auto ml-20 text-black text-xl text-center font-bold"
      >
        VisualGearHub
      </button>
      <img
        className="w-full h-full rounded-3xl shadow-xl object-cover"
        src="/img/Camera2.jpg"
      />
      <div className="absolute px-20 bottom-10 text-white font-bold text-4xl rounded-md w-full">
        <p>Masuk atau Daftar untuk Mulai Jelajahi</p>
        <button
          onClick={handleLogin}
          className="bg-primary px-6 py-2 rounded-xl mt-6 items-center w-72 text-black text-xl text-center"
        >
          Jelajahi Sekarang
        </button>
      </div>
    </div>
  );
}
