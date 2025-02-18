export default function Title({ title, subtitle }) {
  return (
    <div>
      <h2 className="font-bold text-center text-4xl text-black mb-4">
        {title}
      </h2>
      <p className="font-semibold text-center text-xl text-black mb-10">
        {subtitle}
      </p>
    </div>
  );
}
