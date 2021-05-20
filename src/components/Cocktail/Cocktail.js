import _ from "lodash";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { GetCocktail } from "../../actions/cocktailActions";

import {
    DetailTitle,
    DetailImageContainer,
    DetailImage,
    DetailContainer,
    DetailSubtitle,
    DetailSection,
} from "./Cocktail_Wrapper";

const Cocktail = ({ cocktailId }) => {
    const dispatch = useDispatch();
    const cocktailState = useSelector((state) => state.Cocktail);

    const FetchData = React.useCallback(() => {
        dispatch(GetCocktail(cocktailId));
    }, [dispatch, cocktailId]);

    React.useEffect(() => {
        FetchData();
    }, [FetchData]);

    const ShowData = () => {
        if (!_.isEmpty(cocktailState.data[cocktailId])) {
            const measures = _.compact(
                _.values(
                    _.pickBy(cocktailState.data[cocktailId], (val, key) => {
                        return _.startsWith(key, "strMeasure");
                    })
                )
            );

            const ingredients = _.compact(
                _.values(
                    _.pickBy(cocktailState.data[cocktailId], (val, key) => {
                        return _.startsWith(key, "strIngredient");
                    })
                )
            );

            return (
                <>
                    <DetailImageContainer>
                        <DetailImage
                            src={cocktailState.data[cocktailId].strDrinkThumb}
                            alt={`${cocktailState.data[cocktailId].strDrink} drink`}
                        />
                    </DetailImageContainer>
                    <DetailTitle>
                        {cocktailState.data[cocktailId].strDrink}
                    </DetailTitle>
                    <DetailContainer>
                        <DetailSection>
                            <DetailSubtitle>
                                Prepare in{" "}
                                {cocktailState.data[
                                    cocktailId
                                ].strGlass.toLowerCase()}
                            </DetailSubtitle>
                        </DetailSection>
                        <DetailSection>
                            <DetailSubtitle>Ingredients</DetailSubtitle>
                            <ul>
                                {ingredients.map((el, key) => {
                                    return (
                                        <li key={key}>
                                            {el}{" "}
                                            {!_.isEmpty(measures[key]) &&
                                                `- ${measures[
                                                    key
                                                ].toLowerCase()}`}
                                        </li>
                                    );
                                })}
                            </ul>
                        </DetailSection>
                        <DetailSection>
                            <DetailSubtitle>Instructions</DetailSubtitle>
                            <p>
                                {cocktailState.data[cocktailId].strInstructions}
                            </p>
                        </DetailSection>
                    </DetailContainer>
                </>
            );
        }

        if (cocktailState.loading) {
            return <section>Loading...</section>;
        }

        if (cocktailState.errorMsg !== "") {
            return <section>{cocktailState.errorMsg}</section>;
        }

        return <p>error getting cocktail :(</p>;
    };

    return <>{ShowData()}</>;
};

export default Cocktail;
