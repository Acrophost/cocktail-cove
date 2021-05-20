import * as React from "react";

import {
    CocktailTile,
    TileLink,
    TileImage,
    TileLabel,
    TileTitle,
    TileButton,
} from "./CocktailList_Wrapper";

const CocktailItem = ({
    idDrink,
    strDrink,
    strDrinkThumb,
    setCocktailId,
    modalRef,
}) => {
    const handleOpenModal = (e) => {
        e.preventDefault();
        setCocktailId(idDrink);
        modalRef.current.openModal();
    };

    return (
        <CocktailTile>
            <TileLink
                aria-label="See cocktail details"
                onClick={handleOpenModal}
            >
                <TileImage src={strDrinkThumb} alt={`${strDrink} drink`} />
                <TileLabel>
                    <TileTitle>{strDrink}</TileTitle>
                    <TileButton variant="outlined">See Recipe</TileButton>
                </TileLabel>
            </TileLink>
        </CocktailTile>
    );
};

export default CocktailItem;
