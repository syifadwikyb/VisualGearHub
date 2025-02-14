export default function FormLabel({inputName, labelName, inputType, placeholder }) {
    return (
      <div className="mb-2">
        <label className="block text-back text-lg font-semibold mb-2">
          {labelName}
        </label>
        <input
          name={inputName} type={inputType}
          className="text-lg border rounded-md w-full py-2 px-3 text-back placeholder:opacity-50"
          placeholder={placeholder}
        />
      </div>
    );
  }
  