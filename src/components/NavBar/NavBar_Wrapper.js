import styled from "styled-components";
import { Select } from "@material-ui/core";

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

export const StyledLogo = styled.img`
    width: 15em;

    @media (max-width: 420px) {
        width: 10em;
    }
`;

export const StyledSelect = styled(Select)`
    && {
        color: white;
        border-bottom-color: white;
        font-family: inherit;
        font-size: 1.5em;
        margin-top: -0.5em;

        &::before {
            border-bottom-color: white;
        }

        & > svg {
            & > path {
                fill: white;
            }
        }
    }
`;
