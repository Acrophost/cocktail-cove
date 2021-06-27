import styled from "styled-components";

import { theme1 } from "./../../styles/GlobalStyle";

export const SearchContainer = styled.div`
    color: ${theme1.secondary};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    margin-bottom: 40px;

    @media (max-width: 815px) {
        flex-flow: column nowrap;
    }
`;

export const SearchSelect = styled.select`
    color: ${theme1.secondary};
    background: none;
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

export const SearchInputLabel = styled.label`
    margin-left: 10px;
    font-size: 0.7em;
    color: ${theme1.accent};
`;

export const SearchText = styled.input`
    font-size: 1.2em;
    color: ${theme1.secondary};
    background: none;
    border: none;
    border-bottom: 1px solid ${theme1.secondary};
    padding: 5px 0;
    padding-left: 5px;

    &:hover {
        padding-bottom: 4px;
        border-bottom: 2px solid ${theme1.accent};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: 0 0 0 30px ${theme1.primary} inset !important;
        -webkit-text-fill-color: ${theme1.secondary} !important;
    }
`;

export const SearchCurrent = styled.div`
    width: 100%;
    text-align: center;

    span {
        color: ${theme1.accent2};
        margin-left: 10px;
    }

    @media (max-width: 645px) {
        margin-top: 40px;
    }

    @media (max-width: 815px) {
        display: flex;
        flex-flow: column nowrap;
    }
`;

export const SearchForm = styled.form`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 645px) {
        flex-flow: column nowrap;
    }
`;

export const SearchField = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 0.8rem;
`;

export const SearchOption = styled.option`
    background: ${theme1.primary};
    color: ${theme1.secondary};
`;

export const SearchApplyButton = styled.input`
    border: none;
    background: ${theme1.accent};
    color: ${theme1.secondary};
    padding: 0.5em 1.5em;
    font-size: 1.2em;
    margin-left: 1em;
    border-radius: 10px;
`;
