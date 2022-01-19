import React, { useEffect, useState } from "react";
import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/common/PageWrapper";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false); // useState создается один раз. Один раз проинициализируется на этапе инициализации, он так и останется пока компонент не удалим из DOM.
  // const [stateSecond, setStateSecond] = useState(0);
  // console.log("main page container"); // седующий код одинаковые,т.к. не имеют ни каких зависимостей.При обновлениии компонента, вызывает заново.

  useEffect(() => {
    console.log("main page container mount");
  }, []); // данный useEffect делаем монтированным, передаем на пустой массив зависимостей.Отработает единожды только вовремя первой отрисовки. Смонтированно один раз.

  // useEffect(() => {
  //   console.log(`companent updatestateSecond=${stateSecond}`);
  // }, [stateSecond]);

  return (
    <PageWrapper>
      {contentVisibility && <MainContent />}
      <button
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скрыть текст" : "Показать текст"}
      </button>
      {/* <button type="button" onClick={() => setStateSecond((prev) => prev + 1)}>
        UPDATE SECOND STATE
      </button> */}
    </PageWrapper>
  );
};

export default MainPage;
