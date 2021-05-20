import styled from "styled-components";
import { theme1 } from "./../../styles/GlobalStyle";

const ModalBack = styled.div`
    width: 100vw;
    height: 100vh;
    background: hsla(0, 0%, 90%, 0.62);
    position: fixed;
    z-index: 150;
    top: 0;
    left: 0;
`;

const ModalContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 155;
`;

const ModalBox = styled.div`
    width: 80rem;
    height: 50rem;
    background: ${theme1.light};
    color: ${theme1.dark};
    position: relative;
    display: block;
`;

const ModalCloseButton = styled.button`
    background: ${theme1.dark};
    border: 0;
    position: absolute;
    display: inline-block;
    top: 20px;
    left: 10px;
    height: 5px;
    width: 30px;
    transform: rotate(45deg);
    cursor: pointer;
    z-index: 160;

    &::after {
        background: ${theme1.dark};
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        height: 5px;
        width: 30px;
        transform: rotate(-90deg);
        content: "";
    }
`;

export { ModalBack, ModalContainer, ModalBox, ModalCloseButton };
