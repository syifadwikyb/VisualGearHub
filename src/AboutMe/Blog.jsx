import { BsFillCalendarDateFill } from "react-icons/bs";
import Title from "../Components/Title";

export default function Blog() {
  return (
    <div className="mt-28">
      <Title
        title="Blog/Artikel"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        arcu vitae purus elementum, a dignissim eros bibendum."
      />

      {/* Wrapper dengan overflow-x-auto */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max px-4">
          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />

          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />

          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />

          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />
          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />
          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />
          <CardBlog
            img="/img/Camera1.jpg"
            title="5 Tips Memilih Kamera Pertama untuk Pemula"
            date="15 Desember 2025"
          />
        </div>
      </div>
    </div>
  );
}

export function CardBlog({ img, title, date }) {
  return (
    <div>
      <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
        <img src={img} className="w-full h-44 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-black pb-4">{title}</h3>
          <div className="flex items-center mt-3">
            <BsFillCalendarDateFill className="text-lg" />
            <span className="ml-2 text-sm text-gray-700">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
