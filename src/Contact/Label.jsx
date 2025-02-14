export default function Label({ labelName, inputType }) {
  return (
    <div className="mb-2">
      <label className="block text-black text-lg font-semibold mb-2">
        {labelName}
      </label>
      <input
        type={inputType}
        className="text-lg border rounded-md w-full py-2 px-3 text-back placeholder:opacity-50"
      />
    </div>
  );
}

export function LabelNum({ labelName, inputType }) {
  return (
    <div className="mb-2">
      <label className="block text-black text-lg font-semibold mb-2">
        {labelName}
      </label>
      <input
        type={inputType === "number" ? "tel" : inputType} // Gunakan tel untuk input angka
        className="text-lg border rounded-md w-full py-2 px-3 text-black"
        maxLength={inputType === "tel" ? 13 : undefined} // Maksimal 13 angka
        inputMode={inputType === "tel" ? "numeric" : undefined} // Keyboard angka di mobile
        pattern={inputType === "tel" ? "[0-9]*" : undefined} // Hanya angka
        onInput={(e) => {
          e.target.value = e.target.value.replace(/\D/g, ""); // Hapus semua karakter non-angka
          if (inputType === "tel" && e.target.value.length > 13) {
            e.target.value = e.target.value.slice(0, 13);
          }
        }}
      />
    </div>
  );
}
