import _ from "lodash";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { GetCocktail } from "../actions/cocktailActions";

const Cocktail = ({ cocktailId }) => {
    const dispatch = useDispatch();
    const cocktailState = useSelector((state) => state.Cocktail);

    React.useEffect(() => {
        dispatch(GetCocktail(cocktailId));
    }, []);

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
                    <img
                        src={cocktailState.data[cocktailId].strDrinkThumb}
                        alt={`${cocktailState.data[cocktailId].strDrink} drink`}
                    />
                    <h2>{cocktailState.data[cocktailId].strDrink}</h2>
                    <section>
                        <h3>
                            Prepare in{" "}
                            {cocktailState.data[
                                cocktailId
                            ].strGlass.toLowerCase()}
                        </h3>
                    </section>
                    <section>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients.map((el, key) => {
                                return (
                                    <li key={key}>
                                        {el}{" "}
                                        {!_.isEmpty(measures[key]) &&
                                            `- ${measures[key].toLowerCase()}`}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                    <section>
                        <h3>Instructions</h3>
                        <p>{cocktailState.data[cocktailId].strInstructions}</p>
                    </section>
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

    return <article>{ShowData()}</article>;
};

export default Cocktail;
