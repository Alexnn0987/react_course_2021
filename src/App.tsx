import React, { useEffect } from "react";
import "./App.css";
// import RegistrationPage from "./containers/RegistrationPage";
import MainPage from "./containers/MainPage";

const App = () => {
  // return <RegistrationPage />;
  useEffect(() => {
    console.log("app mount");
  }, []);
  return <MainPage />;
};

export default App;
