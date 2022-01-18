import React from "react";
import MainContent from "../../components/MainContent";
import PageWrapper from "../../components/common/PageWrapper";

const MainPage: React.FC = () => {
  return (
    <PageWrapper>
      <MainContent />
    </PageWrapper>
    // <div className="page_wrapper">
    //   <Header />
    //   <main className="main">
    //     <MainContent />
    //   </main>
    //   <Footer />
    // </div>
  );
};

export default MainPage;
