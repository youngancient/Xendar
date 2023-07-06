import { ErrorStyles } from "@/styles/ContactpageStyles/Contact";
import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import { DesktopMobile, ImprovedDesktopMobile } from "@/styles/HeroStyles/Hero";
import { FormButton, SubscribeButton } from "@/styles/HeroStyles/HeroSearch";
import { SubscribeStyles } from "@/styles/HomepageStyles/Homepage";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { Checked } from "../Icons/Icons";

interface ISubscribeMail {
  email: string;
}
const SubscribeComp: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISubscribeMail>({ mode: "onBlur", defaultValues: { email: "" } });

  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = (data: ISubscribeMail) => {
    // pass the data probably to a backend server
    // console.log(data);
    setIsSubscribed(true);
    reset();
  };
  // later: i am not done here, allow users to fill form over and over again but prevent them from entering in the same emails
  return (
    <CenterItemStyle>
      <form onSubmit={handleSubmit(handleSubscribe)}>
        <ImprovedDesktopMobile>
          <SubscribeStyles>
            <div className="input">
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="mobile error">
              <ErrorStyles>{errors?.email && errors.email.message}</ErrorStyles>
            </div>
            <SubscribeButton $submitted={isSubscribed} disabled={isSubscribed}>
              {isSubscribed ? (
                <>
                  <p>Subscribed</p> <Checked />
                </>
              ) : (
                "Subscribe"
              )}
            </SubscribeButton>
          </SubscribeStyles>
          <div className="desktop error">
            <ErrorStyles>{errors?.email && errors.email.message}</ErrorStyles>
          </div>
        </ImprovedDesktopMobile>
      </form>
    </CenterItemStyle>
  );
};

export default SubscribeComp;
