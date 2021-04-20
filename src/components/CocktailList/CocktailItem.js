import * as React from "react";

import {
    CocktailTile,
    TileLink,
    TileImage,
    TileLabel,
    TileTitle,
    TileButton,
} from "./CocktailList_Wrapper";

const CocktailItem = (props) => {
    return (
        <CocktailTile>
            <TileLink to={`/cocktail/`} state={{ id: props.idDrink }}>
                <TileImage
                    src={props.strDrinkThumb}
                    alt={`${props.strDrink} drink`}
                />
                <TileLabel>
                    <TileTitle>{props.strDrink}</TileTitle>
                    <TileButton>See Recipe</TileButton>
                </TileLabel>
            </TileLink>
        </CocktailTile>
    );
};

export default CocktailItem;
