import Title from "../Component/Title";
import Container from "../NavFooter/Container";

export default function CategoriesMain() {
  return (
    <Container>
      <div className="container mx-auto mb-24 mt-28">
        <Title
          title="Pilih Kategori"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
            arcu vitae purus elementum, a dignissim eros bibendum."
        />

        <NameCategories name="Kamera" />

        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max px-4">
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
            <ContentCategories img="/img/Camera1.jpg" name="Kamera" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export function NameCategories({ name }) {
  return (
    <div class="flex items-center mb-10">
      <div class="flex-grow border-t border-black"></div>
      <span class="px-4 font-bold text-3xl text-black">{name}</span>
      <div class="flex-grow border-t border-black"></div>
    </div>
  );
}

function ContentCategories({ img, name }) {
  return (
    <div className="relative w-64 h-64">
      <img className="w-full h-full rounded-2xl shadow-xl" src={img} />
      <div className="absolute bottom-4 left-6 right-6 text-center text-white font-bold text-3xl bg-black bg-opacity-50 px-2 py-1 rounded-md">
        {name}
      </div>
    </div>
  );
}
