import * as React from "react";

import {
    StyledHeader,
    Line,
    Triangle,
    HeadImage,
    HeadTitle,
    ImgContainer,
} from "./Head_Wrapper";

import Img from "../../assets/images/head-photo.jpg";

const Head = () => {
    return (
        <StyledHeader>
            <Triangle />
            <Line />
            <ImgContainer>
                <HeadImage src={Img} alt="A cocktail with rosemary and lemon" />
            </ImgContainer>
            <HeadTitle>
                Sed a feugiat turpis. Quisque vitae ante odio.
            </HeadTitle>
        </StyledHeader>
    );
};

export default Head;
