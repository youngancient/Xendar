import React, { FunctionComponent, ReactNode } from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
import { LayoutStyles } from "@/styles/LayoutStyles/Layout";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
    const { isNavOpen } = useAppSelector((state:RootState) => state.data);
  return (
    <LayoutStyles $isNavOpen={isNavOpen}>
      <Header />
      <Info />
      <main>
        {children}    
      </main>
      <Footer />
    </LayoutStyles>
  );
};

export default Layout;
