import { InfoStyles } from "@/styles/HeroStyles/Info";
import MobileNav from "../MobileNav/MobileNav";

const Info = () => {
  return (
    <InfoStyles>
      <h3>80% discount on all courses when you use a discount code.</h3>
      <div className="mobile">
       <MobileNav />
      </div>
    </InfoStyles>
  );
};

export default Info;
