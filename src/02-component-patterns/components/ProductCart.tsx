import defaultStyles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement, CSSProperties } from "react";
import { ProductContextProps, Product } from "../interfaces/interfaces";

export const productContext = createContext({} as ProductContextProps);

const { Provider } = productContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties
}

export const ProductCart = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${defaultStyles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
