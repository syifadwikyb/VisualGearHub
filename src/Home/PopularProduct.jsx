import { Link } from "react-router-dom";
import Title from "../Components/Title";

export default function PopularProduct() {
  return (
    <div className="container mx-auto mb-24">
      <Title
        title="Produk Terpopuler"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        arcu vitae purus elementum, a dignissim eros bibendum."
      />

      <div className="flex justify-between">
        <ProductBig
          img="/img/Camera1.jpg"
          content="Kamera Mirolles Terbaru 2025"
          link="/"
        />
        <ProductSmall
          img="/img/Camera1.jpg"
          content="Kamera Mirolles Terbaru 2025"
          link="/"
        />
        <ProductSmall
          img="/img/Camera1.jpg"
          content="Kamera Mirolles Terbaru 2025"
          link="/"
        />
      </div>
      <div className="flex justify-between mt-10">
        <ProductSmall
          img="/img/Camera1.jpg"
          content="Kamera Mirolles Terbaru 2025"
          link="/"
        />
        <ProductSmall
          img="/img/Camera1.jpg"
          content="Kamera Mirolles Terbaru 2025"
          link="/"
        />
        <ProductBig
          img="/img/Camera1.jpg"
          content="Kamera Mirolles Terbaru 2025"
          link="/"
        />
      </div>
    </div>
  );
}

function ProductBig({ img, content, link }) {
  return (
    <div className="w-[600px] h-auto p-6 bg-primary shadow-xl rounded-2xl">
      <div className="flex justify-between gap-4">
        <img src={img} className="w-[300px] h-[300px] rounded-xl" alt="" />
        <div className="flex flex-col justify-between">
          <p className="font-bold text-black text-3xl">{content}</p>
          <div className="bg-white px-6 py-2 rounded-xl">
            <Link to={link} className="text-black font-semibold">
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSmall({ img, content, link }) {
  return (
    <div className="relative w-[348px] h-[348px]">
      <img className="w-full h-full rounded-2xl shadow-xl" src={img} />
      <div className="absolute bottom-4 left-6 right-6 text-white font-bold text-3xl bg-black bg-opacity-50 px-2 py-1 rounded-md">
        {content}
        <div className="bg-white px-6 py-2 rounded-xl mt-6 flex items-center">
          <Link to={link} className="text-black font-semibold text-lg">
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
