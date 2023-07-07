import { GotoCourse, WishlistItemStyle } from "@/styles/HeroStyles/Info";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Trash } from "../Icons/Icons";
import { useRouter } from "next/router";

export interface IWishlistItem{
      name: string;
      id: number | null;
      img: string;
      dollarPrice: number;
      nairaPrice: number;
      level: string;
}
export interface IExtWishlistItem extends IWishlistItem{
    isEndOfList : boolean;
}
const WishlistItem:FunctionComponent<IExtWishlistItem> = ({name, img, dollarPrice, nairaPrice, level, isEndOfList, id}) => {
    const router = useRouter();
    const goToCourse = () => {
      const slug = name.replaceAll("/", "-");
      const path = `/courses/${slug}`;
      // push the id
      router.push({
        pathname : path,
        query : {id: id}
      },path);
    };
    return ( 
        <WishlistItemStyle>
            <div className="one">
                <Image src={img} width={48} height={48} alt={name} />
                <div className="one-deet">
                    <h4>{name}</h4>
                    <p>{level}</p>
                    <div className="prices">
                        <h5>&#8358;{nairaPrice.toLocaleString()}</h5>
                        <span>${dollarPrice}</span>
                    </div>
                </div>
            </div>
            <div className="two">
                <GotoCourse onClick={goToCourse}>Go to Course</GotoCourse>
                <Trash name={name}/>
            </div>
            {!isEndOfList && <hr />}
        </WishlistItemStyle>
     );
}
 
export default WishlistItem;