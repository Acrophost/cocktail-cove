import * as React from "react";

import {
    NavContainer,
    NavLogo,
    NavLanguage,
    NavLabel,
    NavForm,
    NavOption,
} from "./NavBar_Wrapper";

import Logo from "../../assets/svgs/title1.svg";

const NavBar = () => {
    const [language, setLanguage] = React.useState("english");

    return (
        <NavContainer>
            <NavLogo src={Logo} alt="Cocktail Cove text written with marker" />
            <NavForm>
                <NavLabel htmlFor="lang-select">Language</NavLabel>
                <NavLanguage
                    id="lang-select"
                    value={language}
                    onChange={setLanguage}
                >
                    <NavOption value="english">English</NavOption>
                    <NavOption value="french">French</NavOption>
                    <NavOption value="german">German</NavOption>
                </NavLanguage>
            </NavForm>
        </NavContainer>
    );
};

export default NavBar;
