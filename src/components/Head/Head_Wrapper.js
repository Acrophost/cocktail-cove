import styled from "styled-components";

import { theme1 } from "./../../styles/GlobalStyle";

export const StyledHeader = styled.header`
    min-height: 100vh;
    margin-bottom: 5em;
`;

export const Line = styled.div`
    height: 100%;
    position: fixed;
    top: 0;
    width: 0.5px;
    left: 4em;
    background-color: ${theme1.secondary};
    z-index: 50;

    @media (max-width: 320px) {
        display: none;
    }
`;

export const Triangle = styled.div`
    clip-path: polygon(0 0, 0 81%, 100% 0);
    height: 65em;
    width: 100vw;
    background-color: ${theme1.dark};
`;

export const ImgContainer = styled.div`
    width: 50vw;
    height: clamp(20rem, 80vh, 55rem);
    position: absolute;
    display: block;
    left: 38vw;
    top: 10em;
    overflow: hidden;

    @media (max-width: 1024px) and (min-height: 1366px), (max-width: 768px) {
        width: 65vw;
        left: 30vw;
        top: 18em;
    }

    @media (max-width: 420px) {
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
    }
`;

export const HeadImage = styled.img`
    filter: saturate(0%);
    object-fit: cover;
    width: 100%;

    @media (max-width: 1024px) and (min-height: 1366px), (max-width: 768px) {
        width: 200%;
        margin-left: -30%;
    }

    @media (max-width: 420px) {
        width: 300%;
        mask-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 20%,
            rgba(0, 0, 0, 1) 70%
        );
        -webkit-mask-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 20%,
            rgba(0, 0, 0, 1) 70%
        );

        margin-left: -60%;
    }
`;

export const HeadTitle = styled.h1`
    position: absolute;
    top: 3.5em;
    left: 4em;
    width: clamp(30rem, 37vw, 55rem);
    font-style: normal;
    font-weight: normal;
    font-size: clamp(4em, 4vw, 6em);
    line-height: 1.8em;
    color: ${theme1.secondary};

    @media (max-width: 1024px) {
        top: 3.5em;
        left: 3em;
    }

    @media (max-width: 768px) {
        top: 3em;
        left: 2.5em;
    }

    @media (max-width: 420px) {
        top: 7em;
        width: 65vw;
        font-size: 2.3rem;
    }

    @media (max-width: 375px) {
        width: 66vw;
        font-size: 2rem;
    }
`;
