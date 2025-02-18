import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";
import Title from "../Components/Title";

export default function Rating() {
  return (
    <div className="container mx-auto mb-24">
      <Title
        title="Produk Terpopuler"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
      arcu vitae purus elementum, a dignissim eros bibendum."
      />

      <Swiper
        slidesPerView={3} // Menampilkan 3 kartu dalam satu tampilan
        spaceBetween={10} // Jarak antar kartu
        freeMode={true} // Mode geser bebas
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Geser otomatis
        modules={[FreeMode, Autoplay]} // Gunakan fitur FreeMode dan Autoplay
        className="w-full"
      >
        <SwiperSlide>
          <CardRating
            img="/img/Camera1.jpg"
            name="Syifa Dwiky Basamala"
            content="Sangat puas dengan layanan VisualGearHub! Peralatan lengkap dan proses sewa mudah."
            rating="💖💖💖💖💖"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardRating
            img="/img/Camera1.jpg"
            name="Syifa Dwiky Basamala"
            content="Sangat puas dengan layanan VisualGearHub! Peralatan lengkap dan proses sewa mudah."
            rating="💖💖💖💖💖"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardRating
            img="/img/Camera1.jpg"
            name="Syifa Dwiky Basamala"
            content="Sangat puas dengan layanan VisualGearHub! Peralatan lengkap dan proses sewa mudah."
            rating="💖💖💖💖💖"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardRating
            img="/img/Camera1.jpg"
            name="Syifa Dwiky Basamala"
            content="Sangat puas dengan layanan VisualGearHub! Peralatan lengkap dan proses sewa mudah."
            rating="💖💖💖💖💖"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardRating
            img="/img/Camera1.jpg"
            name="Syifa Dwiky Basamala"
            content="Sangat puas dengan layanan VisualGearHub! Peralatan lengkap dan proses sewa mudah."
            rating="💖💖💖💖💖"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export function CardRating({ img, name, content, rating }) {
  return (
    <div className="w-[500px] h-auto bg-primary p-6 mb-3 rounded-2xl shadow-xl">
      <div className="flex items-center gap-3">
        <img className="rounded-full w-24 h-24" src={img} alt="" />
        <p className="text-xl font-semibold text-black">{name}</p>
      </div>
      <div className="text-black text-lg text-center mb-2">“ {content} ”</div>
      <div className="text-center leading-loose">
        <p>{rating}</p>
      </div>
    </div>
  );
}
