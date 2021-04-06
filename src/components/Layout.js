import * as React from "react";

import GlobalStyle, { theme1 } from "../styles/GlobalStyle";

import NavBar from "./NavBar/NavBar";
import Head from "./Head/Head";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle theme={theme1} />
            <NavBar />
            <Head />
            <main>{children}</main>
        </>
    );
};

export default Layout;
