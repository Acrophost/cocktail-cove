import styled from "styled-components";
import { theme1 } from "./../../styles/GlobalStyle";

export const DetailTitle = styled.h2`
    color: ${theme1.secondary};
    background: ${theme1.accent};
    display: inline-block;
    min-width: 30%;
    max-width: 70%;
    padding: 3px 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 45px;
    font-weight: normal;
`;

export const DetailImageContainer = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
`;

export const DetailImage = styled.img`
    object-fit: cover;
    width: 130%;
    margin-left: -15%;
`;

export const DetailContainer = styled.article`
    padding: 0 40px;
`;

export const DetailSubtitle = styled.h3`
    color: ${theme1.accent2};
    font-weight: normal;
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    margin-bottom: 0;
    padding-bottom: 0;
`;

export const DetailSection = styled.section`
    width: 45%;
`;
