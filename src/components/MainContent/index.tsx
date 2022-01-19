import React, { useEffect } from "react";

const MainContent = () => {
  const handler = () => {
    console.log("click");
  };
  useEffect(() => {
    console.log("main content mount");
    document.body.addEventListener("click", handler);
    return () => {
      console.log("main content unmount!!");
      document.body.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div>
      <h1>Main Page Content </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt
        adipisci deleniti quasi amet nisi officiis non ad praesentium distinctio
        facere, voluptatibus sit incidunt illum, mollitia, iste doloribus
        similique excepturi?
      </p>
    </div>
  );
};

export default MainContent;