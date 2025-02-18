export default function BorderButton({ text, type = "submit", loading }) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      {/* Tombol Register */}
      <button
        className={`py-2 px-6 font-semibold rounded-xl text-white text-lg w-full mt-6 
          ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}
        type={type}
        disabled={loading}
      >
        {loading ? "Processing..." : text}
      </button>    
    </div>
  );
}
