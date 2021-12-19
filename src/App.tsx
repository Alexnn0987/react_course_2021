import React, { useState } from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";
import Form from "./Form/index";

const App = () => {
  const [orangeCounter, setOrangeCounter] = useState(0);
  const [appleCount, setAppleCount] = useState(0);
  return (
    <div className="App">
      <ProductCounter
        productName="Апельсин"
        count={orangeCounter}
        setCount={setOrangeCounter}
      />
      <ProductCounter
        productName="Яблоко"
        count={appleCount}
        setCount={setAppleCount}
      />
      <ProductCounter
        productName="Апельсин"
        count={orangeCounter}
        setCount={setOrangeCounter}
      />
      <Form />
    </div>
  );
};

export default App;
