export default function Feature() {
  return (
    <div className="mt-28">
      <h2 className="font-bold text-center text-4xl text-black mb-6">
        Alasan Memlih Kami
      </h2>
      <p className="font-semibold text-center text-xl text-black mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        arcu vitae purus elementum, a dignissim eros bibendum.
      </p>

      <div className="flex justify-between w-full">
        <CardFeature content="Barang Berkualitas Tinggi" />
        <CardFeature content="Barang Berkualitas Tinggi" />
        <CardFeature content="Barang Berkualitas Tinggi" />
      </div>
    </div>
  );
}

export function CardFeature({ content }) {
  return (
    <div className="relative w-80 h-72 mt-6 ml-6 flex items-center justify-center bg-primary rounded-3xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-110">
      <div className="absolute -top-6 -left-6 w-60 h-32 bg-secondary rounded-l-2xl rounded-br-2xl"></div>
      <p className="text-black font-bold text-center text-2xl p-6 mt-10">
        {content}
      </p>
    </div>
  );
}
