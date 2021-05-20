import * as React from "react";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";

import { NavContainer, StyledLogo, StyledSelect } from "./NavBar_Wrapper";

import Logo from "../../assets/svgs/title1.svg";

const NavBar = () => {
    const [language, setLanguage] = React.useState("english");

    return (
        <NavContainer>
            <StyledLogo
                src={Logo}
                alt="Cocktail Cove text written with marker"
            />
            <FormControl>
                <InputLabel id="lang-select-label">Language</InputLabel>
                <StyledSelect
                    labelId="lang-select-label"
                    id="lang-select"
                    value={language}
                    onChange={setLanguage}
                >
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="german">German</MenuItem>
                </StyledSelect>
            </FormControl>
        </NavContainer>
    );
};

export default NavBar;
