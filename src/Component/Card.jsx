export default function Card() {
  return (
    <div>
      {/* Card */}
      <div className="relative w-72 h-72 bg-white rounded-[40px] shadow-lg overflow-hidden transition-all duration-500 hover:h-[420px] group">
        {/* Image */}
        <div className="relative w-full h-64 bg-cover bg-center transition-all duration-700 blur-[25px] group-hover:blur-0 group-hover:scale-110">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src="/img/Camera1.jpg"
            alt=""
          />
        </div>

        {/* White bottom shape */}
        <div className="absolute bottom-0 w-full h-20 bg-white rounded-b-[40px]"></div>

        {/* Content */}
        <div className="relative px-8 -top-10 transition-all duration-500">
          <h3 className="text-lg font-semibold text-gray-800">
            Ai Flower <br />
            <span className="text-xs opacity-75 absolute -bottom-4">
              1 Hour ago
            </span>
          </h3>
          <p className="mt-6 text-gray-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            saepe incidunt suscipit et voluptas fugit!
          </p>
        </div>
      </div>
    </div>
  );
}
