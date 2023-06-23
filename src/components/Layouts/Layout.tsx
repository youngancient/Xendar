import React, { FunctionComponent, ReactNode } from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";

export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Info />
      <main>
        {children}    
      </main>
      <Footer />
    </>
  );
};

export default Layout;
