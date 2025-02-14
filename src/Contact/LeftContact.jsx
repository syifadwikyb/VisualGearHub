import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LeftContact() {
  return (
    <div>
      <h1 className="text-black font-bold text-3xl mb-3">Get In Touch</h1>
      <p className="text-black text-xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
        arcu vitae purus elementum, a dignissim eros bibendum.
      </p>

      <Icon
        link="/"
        icon={<FaInstagramSquare size={46} />}
        name="Instagram"
      />
    </div>
  );
}

export function Icon({ link, icon, name }) {
  return (
    <Link to={link}>
      <div className="flex items-center gap-3">
        {icon}
        <p className="font-semibold text-black text-xl">{name}</p>
      </div>
    </Link>
  );
}
