import Container from "../NavFooter/Container";
import Feature from "./Feature";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import VisionMission from "./VisionMission";

export default function AboutMain() {
  return (
    <Container>
      <div className="container mx-auto mb-24 mt-28">
        <div className="flex justify-center items-center">
          <LeftAbout />
          <RightAbout />
        </div>
          <Feature />
          <VisionMission />
      </div>
    </Container>
  );
}
