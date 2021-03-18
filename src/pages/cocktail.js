import * as React from "react";

import Cocktail from "../components/Cocktail";
import Layout from "../components/Layout";

const CocktailPage = ({ location }) => {
    return (
        <Layout>
            <Cocktail cocktailId={location.state.id} />
        </Layout>
    );
};

export default CocktailPage;
