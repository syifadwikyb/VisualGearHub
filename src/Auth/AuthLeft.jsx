export default function AuthLeft() {
  return (
    <div className="relative w-[800px] h-[720px]">
      <div className="absolute bg-primary px-6 py-2 rounded-xl mt-10 items-center w-auto ml-20 ">
        <p className="text-black text-xl text-center font-bold">VisualGearHub</p>
      </div>
      <img
        className="w-full h-full rounded-3xl shadow-xl object-cover"
        src="/img/Camera2.jpg"
      />
      <div className="absolute bottom-4 p-20 text-white font-bold text-4xl rounded-md w-full">
        Masuk atau Daftar untuk Mulai Jelajahi
        <div className="bg-primary px-6 py-2 rounded-xl mt-6 items-center w-72">
          <p className="text-black text-xl text-center">Jelajahi Sekarang</p>
        </div>
      </div>
    </div>
  );
}
