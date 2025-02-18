import { FcGoogle } from "react-icons/fc";

export default function BorderButton({ text, type = "submit", loading, onGoogleSignIn }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Tombol Register */}
      <button
        className={`py-2 px-6 font-semibold rounded-xl text-white text-lg w-full mt-6 
          ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}
        type={type}
        disabled={loading}
      >
        {loading ? "Processing..." : text}
      </button>

      {/* Tombol Sign in with Google */}
      <button
        className="py-2 px-6 font-semibold rounded-xl text-black text-lg bg-white w-full flex items-center justify-center gap-4 border border-gray-300 hover:bg-gray-100"
        type="button"
        onClick={onGoogleSignIn}
      >
        <FcGoogle size={24} />
        Sign in with Google
      </button>
    </div>
  );
}
