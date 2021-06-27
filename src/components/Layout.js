import * as React from "react";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

import GlobalStyle, { theme1 } from "../styles/GlobalStyle";

import NavBar from "./NavBar/NavBar";

Modal.setAppElement(`#___gatsby`);

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle theme={theme1} />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cocktail Cove</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&family=Pridi&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <NavBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
