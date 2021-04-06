import { createGlobalStyle } from "styled-components";

export const theme1 = {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#3494E6",
    accent2: "#EC6EAD",
    light: "#E5E5E5",
    dark: "#161616",
};

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Pridi&display=swap');

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: ${theme1.primary};
    }

    h1, h2, h3 {
        font-family: 'Pridi', serif;
    }
    `;

export default GlobalStyle;
