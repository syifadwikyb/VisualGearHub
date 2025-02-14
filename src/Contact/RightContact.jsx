import Label, { LabelNum } from "./Label";

export default function RightContact() {
  return (
    <div className="bg-primary w-[1000px] h-auto rounded-3xl">
      <div className="p-10">
        <Label labelName="Email" inputType="email" />
        <Label labelName="Name" inputType="text" />
        <LabelNum labelName="Phone" inputType="tel" />
        <Label labelName="Message" inputType="text" />
      </div>
    </div>
  );
}
