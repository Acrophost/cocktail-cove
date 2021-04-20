import * as React from "react";
import { Helmet } from "react-helmet";

import CocktailList from "../components/CocktailList/CocktailList";
import Layout from "./../components/Layout";

const IndexPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cocktail Cove</title>
            </Helmet>
            <CocktailList />
        </Layout>
    );
};

export default IndexPage;
