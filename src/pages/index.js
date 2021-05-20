import * as React from "react";

import CocktailList from "../components/CocktailList/CocktailList";
import Layout from "./../components/Layout";
import Modal from "./../components/Modal/Modal";
import Cocktail from "./../components/Cocktail/Cocktail";

const IndexPage = () => {
    const [cocktailId, setCocktailId] = React.useState(0);
    const modalRef = React.useRef();

    return (
        <Layout>
            <CocktailList modalRef={modalRef} setCocktailId={setCocktailId} />
            <Modal ref={modalRef}>
                <Cocktail cocktailId={cocktailId} />
            </Modal>
        </Layout>
    );
};

export default IndexPage;
