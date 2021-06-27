import styled from "styled-components";

import { theme1 } from "./../../styles/GlobalStyle";

export const CocktailTile = styled.section`
    width: 23%;
    height: auto;
    margin: 1%;
    position: relative;
    display: block;
    cursor: pointer;

    @media (max-width: 1024px) {
        width: 31%;
    }

    @media (max-width: 768px) {
        width: 48%;
    }

    @media (max-width: 540px) {
        width: 98%;
    }
`;

export const TileLink = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border: none;
    border-radius: 0;
    background: none;
    z-index: 55;
`;

export const TileImage = styled.img`
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
`;

export const TileLabel = styled.div`
    position: absolute;
    width: 70%;
    height: 10rem;
    padding: 2%;
    background: ${theme1.light};
    bottom: 2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    text-align: center;

    @media (max-width: 540px) {
        height: 6rem;
    }
`;

export const TileTitle = styled.h3`
    color: ${theme1.accent};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export const TileButton = styled.input`
    && {
        background: none;
        border: 2px solid ${theme1.dark};
        color: ${theme1.dark};
        border-radius: 10px;
        padding: 5px 25px;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: "Pridi", serif;
        cursor: pointer;
        margin-top: -1rem;
        margin-bottom: 1rem;
        outline: ${theme1.accent2};

        @media (max-width: 1024px) {
            font-size: 1rem;
        }

        @media (max-width: 540px) {
            display: none;
        }
    }
`;

export const ItemList = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    padding: 1rem 1rem 3rem 4.5rem;
    min-height: 50vh;

    @media (max-width: 645px) {
        margin-top: 120px;
    }

    @media (max-width: 540px) {
        padding: 2rem;
    }
`;

export const ListError = styled.div`
    color: ${theme1.accent};
`;
