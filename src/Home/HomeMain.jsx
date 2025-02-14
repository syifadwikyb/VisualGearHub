import Container from "../NavFooter/Container";
import Hero from "./Hero";
import PopularProduct from "./PopularProduct";
import Rating from "./Rating";

export default function HomeMain() {
  return (
    <Container>
      <Hero />
      <PopularProduct/>
      <Rating/>
    </Container>
  );
}
