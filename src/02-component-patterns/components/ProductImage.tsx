import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCart";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"

export interface Props{
  img?:string
  className?:string
  style?: CSSProperties
}

export const ProductImage = ({ img , className, style }:Props) => {
    const { product } = useContext(productContext);
  
    let imageToShow: string;
  
    if (img) {
      imageToShow = img;
    } else if (product.img) {
      imageToShow = product.img;
    } else {
      imageToShow = noImage;
    }
  
    return (
      <img src={imageToShow} alt={imageToShow} className={`${styles.productImg} ${className}`} style={style}/>
    );
  };