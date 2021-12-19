import React, { useState } from "react";

const Input: React.FC = () => {
  const [value, setValue] = useState("Пустой инпут");
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ fontSize: "24px" }}>
      <span>{`VALUE = ${value} : `}</span>
      <input
        onChange={ChangeHandler}
        style={{ fontSize: "24px", marginBottom: "20px" }}
        value={value}
      />
    </div>
  );
};
export default Input;
