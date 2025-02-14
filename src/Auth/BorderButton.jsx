import { FcGoogle } from "react-icons/fc";

export default function BorderButton({
  text,
  onClick = () => {},
  type = "button",
}) {
  return (
    <div className="flex flex-col gap-3">
      <button
        className="py-2 px-6 font-semibold rounded-xl text-white text-lg bg-blue-700 w-full mt-6"
        type={type}
        onClick={onClick}
      >
        {text}
      </button>

      <button
        className="py-2 px-6 font-semibold rounded-xl text-black text-lg bg-white w-full flex items-center justify-center gap-4"
        type="submit"
        onClick={onClick}>
            <FcGoogle size={24} />
        Sign in with Google
      </button>
    </div>
  );
}
