export default function VisionMission() {
  return (
    <div className="mt-20">
      <h2 className="font-bold text-center text-4xl text-black">
        Produk Terpopuler
      </h2>
      <p className="font-semibold text-center text-xl text-black mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        arcu vitae purus elementum, a dignissim eros bibendum.
      </p>
      <div className="flex justify-between">
        <ContentVisonMission
          name="Visi"
          content="“Menjadi platform terdepan dalam menyediakan solusi peralatan
            videografi dan fotografi yang ber kualitas, terjangkau, dan mudah
            diakses oleh semua kalangan, baik profesional maupun pemula, di
            seluruh Indonesia.”"
        />

        <ContentVisonMission
          name="Misi"
          content={
            <ul className="list-disc">
              <li>Menyediakan Peralatan Berkualitas Tinggi</li>
              <li>Memberikan Layanan Terbaik</li>
              <li>Mendukung Komunitas Kreatif</li>
              <li>Inovasi Berkelanjutan</li>
              <li>Membangun Kepercayaan</li>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export function ContentVisonMission({ name, content }) {
  return (
    <div>
      <div className="flex gap-6 justify-between w-[672px] shadow-xl">
        <div className="rounded-xl h-16 w-1/2 bg-secondary flex flex-col justify-center items-center">
          <p className="font-bold text-black text-2xl">{name}</p>
        </div>
        <div className="rounded-t-xl h-20 w-1/2 bg-primary"></div>
      </div>
      <div className="max-w-2xl h-52 rounded-xl rounded-tr-none overflow-hidden shadow-lg bg-primary p-10 flex flex-col justify-center items-center">
        <p className="text-black text-xl font-semibold">{content}</p>
      </div>
    </div>
  );
}
