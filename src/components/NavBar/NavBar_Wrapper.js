import styled from "styled-components";

import { theme1 } from "./../../styles/GlobalStyle";

export const NavContainer = styled.nav`
    position: absolute;
    z-index: 100;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 4em 0 6em;

    @media (max-width: 420px) {
        padding: 1em;
    }
`;

export const NavLogo = styled.img`
    width: 15em;

    @media (max-width: 420px) {
        width: 10em;
    }
`;

export const NavLanguage = styled.select`
    color: ${theme1.secondary};
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid ${theme1.secondary};
    font-family: inherit;
    font-size: 1.2em;
    margin: 0 0.5em;
    cursor: pointer;
    transition: all 0.3s ease-in;
    padding-bottom: 1px;

    &:hover {
        padding-bottom: 0;
        border-bottom: 2px solid ${theme1.accent};
    }
`;

export const NavLabel = styled.label`
    margin-left: 10px;
    font-size: 0.7em;
    color: ${theme1.accent};
`;

export const NavForm = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 0.8rem;
`;

export const NavOption = styled.option`
    background: ${theme1.primary};
    color: ${theme1.secondary};
`;
