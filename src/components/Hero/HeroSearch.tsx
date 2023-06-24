import { HeroSearchButton, HeroSearchStyles } from "@/styles/HeroStyles/HeroSearch";
import { HeroMagnifyingGlass } from "../Icons/Icons";

const HeroSearch = () => {
  return (
    <HeroSearchStyles>
      <div className="input">
        <HeroMagnifyingGlass />
        <input type="text" name="course" placeholder="Product design" />
      </div>
      <HeroSearchButton>Search</HeroSearchButton>
    </HeroSearchStyles>
  );
};

export default HeroSearch;
