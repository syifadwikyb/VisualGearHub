import { app } from "../Config/Firebase";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Container from "../NavFooter/Container";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

export default function ContactMain() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);
  return (
    <Container>
      <div className="container mx-auto mb-24 mt-28">
        <h2 className="font-bold text-center text-4xl text-black mb-6">
          Alasan Memlih Kami
        </h2>
        <p className="font-semibold text-center text-xl text-black mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          lacinia arcu vitae purus elementum, a dignissim eros bibendum.
        </p>

        <div className="flex justify-between gap-6">
          <LeftContact/>

          <RightContact/>
        </div>
      </div>
    </Container>
  );
}
