import { FormButton, HeroSearchStyles } from "@/styles/HeroStyles/HeroSearch";
import { HeroMagnifyingGlass } from "../Icons/Icons";

const HeroSearch = () => {
  // not done here, this component should lead to the courses page
  return (
    <HeroSearchStyles>
      <div className="input">
        <HeroMagnifyingGlass />
        <input type="text" name="course" placeholder="Product design" />
      </div>
      <FormButton>Search</FormButton>
    </HeroSearchStyles>
  );
};

export default HeroSearch;
