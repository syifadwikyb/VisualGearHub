import NavMain from "./NavMain";
import FooterMain from "./FooterMain";

export default function Container({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavMain />
      <main className="flex-grow">{children}</main>
      <FooterMain />
    </div>
  );
}
