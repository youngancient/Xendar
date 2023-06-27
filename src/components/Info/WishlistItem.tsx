import { GotoCourse, WishlistItemStyle } from "@/styles/HeroStyles/Info";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import { Trash } from "../Icons/Icons";

export interface IWishlistItem{
      name: string;
      img: string;
      dollarPrice: number;
      nairaPrice: number;
      level: string;
}
export interface IExtWishlistItem extends IWishlistItem{
    isEndOfList : boolean;
}
const WishlistItem:FunctionComponent<IExtWishlistItem> = ({name, img, dollarPrice, nairaPrice, level, isEndOfList}) => {
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
                <GotoCourse>Go to Course</GotoCourse>
                <Trash name={name}/>
            </div>
            {!isEndOfList && <hr />}
        </WishlistItemStyle>
     );
}
 
export default WishlistItem;