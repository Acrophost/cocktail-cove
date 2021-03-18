import * as React from "react";
import { Link } from "gatsby";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Index page</Link>
            <div>Search will be here</div>
        </nav>
    );
};

export default NavBar;
