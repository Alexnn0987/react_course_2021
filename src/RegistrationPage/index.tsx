import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Form from "../Form";

const RegistrationPage: React.FC = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">
        <div>
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
