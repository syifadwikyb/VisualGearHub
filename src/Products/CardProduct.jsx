export default function CardProduct({ img, name, li1, li2, li3, price }) {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg relative">
      <div className="relative">
        <img
          src={img}
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="absolute bottom-2 right-2 cursor-pointer">
          <div className="w-32 py-2 text-sm font-semibold text-black shadow-md relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary blur-sm rounded-full"></div>
            <p className="relative">See Detail</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md mt-2">
        <h3 className="font-bold text-xl text-black">
          {name}
        </h3>
        <ul className="text-lg mt-2 list-disc list-inside text-slate-800">
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
        <button className="mt-3 bg-primary text-lg hover:bg-secondary text-black font-bold text-center py-2 w-full rounded-full shadow-md">
          {price}
        </button>
      </div>
    </div>
  );
}
