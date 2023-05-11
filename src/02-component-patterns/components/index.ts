import { ProductCardHOCProps } from './../interfaces/interfaces';
import { ProductCart as ProductCardHOC } from "./ProductCart";

import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";

export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage,
});

export default ProductCard