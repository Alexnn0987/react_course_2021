import React, { useEffect, useState } from "react";
import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/common/PageWrapper";

const MainPage: React.FC = () => {
  const [state, setState] = useState(0); // useState создается один раз. Один раз проинициализируется на этапе инициализации, он так и останется пока компонент не удалим из DOM.
  const [stateSecond, setStateSecond] = useState(0);

  console.log(
    "main page container",
    `state=${state}`,
    `stateSecond=${stateSecond}`
  ); // седующий код одинаковые,т.к. не имеют ни каких зависимостей.При обновлениии компонента, вызывает заново.

  // useEffect(() => {
  //   console.log("USE EFFECT", `state=${state}`);
  // }); // на каждом render будет выполняться, т.к. он не потпасана на массив зависимостей, он не пустой, он содержит console.log("USE EFFECT"), на каждый rendr будет обновляться и постоянно вызываться.При обновлениии компонента, вызывает заново.

  useEffect(() => {
    console.log(
      "main page container mount",
      `state=${state}`,
      `stateSecond=${stateSecond}`
    );
  }, []); // данный useEffect делаем монтированным, передаем на пустой массив зависимостей.Отработает единожды только вовремя первой отрисовки. Смонтированно один раз.

  useEffect(() => {
    console.log(`companent update stateSecond=${stateSecond}`);
  }, [stateSecond]);

  return (
    <PageWrapper>
      <MainContent />
      <button type="button" onClick={() => setState((prev) => prev + 1)}>
        UPDATE STATE
      </button>
      <button type="button" onClick={() => setStateSecond((prev) => prev + 1)}>
        UPDATE SECOND STATE
      </button>
    </PageWrapper>
  );
};

export default MainPage;
