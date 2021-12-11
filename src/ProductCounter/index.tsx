import React from "react";

type ProductCounterPropsType = {
  product: {
    productName: string;
    count?: number;
  };
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const {
    product: { productName, count = "Нет информации" },
  } = props;
  // const productName = props.productName;  //тоже самое

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <span>{count}</span>
    </div>
  );
};

export default ProductCounter;
