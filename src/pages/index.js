import * as React from "react";

import CocktailList from "../components/CocktailList/CocktailList";
import Layout from "./../components/Layout";
import Search from "./../components/Search/Search";
import Modal from "./../components/Modal/Modal";
import Cocktail from "./../components/Cocktail/Cocktail";
import Head from "./../components/Head/Head";

const IndexPage = () => {
    const [cocktailId, setCocktailId] = React.useState(0);
    const modalRef = React.useRef();

    return (
        <Layout>
            <Head />
            <Search />
            <CocktailList modalRef={modalRef} setCocktailId={setCocktailId} />
            <Modal ref={modalRef}>
                <Cocktail cocktailId={cocktailId} />
            </Modal>
        </Layout>
    );
};

export default IndexPage;
