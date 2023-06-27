import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import { FormButton } from "@/styles/HeroStyles/HeroSearch";
import { SubscribeStyles } from "@/styles/HomepageStyles/Homepage";
import { FunctionComponent } from "react";

const SubscribeComp: FunctionComponent = () => {
  return (
    <CenterItemStyle>
      <form>
        <SubscribeStyles>
          <div className="input">
            <input type="text" name="course" placeholder="Product design" />
          </div>
          <FormButton>Subscribe</FormButton>
        </SubscribeStyles>
      </form>
    </CenterItemStyle>
  );
};

export default SubscribeComp;
