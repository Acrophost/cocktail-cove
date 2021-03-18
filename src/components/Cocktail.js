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
            let measures = [];
            let ingredients = [];

            for (let i = 1; i <= 15; i++) {
                if (
                    !_.isEmpty(
                        cocktailState.data[cocktailId][`strIngredient${i}`]
                    )
                )
                    ingredients.push(
                        cocktailState.data[cocktailId][`strIngredient${i}`]
                    );
                if (
                    !_.isEmpty(cocktailState.data[cocktailId][`strMeasure${i}`])
                )
                    measures.push(
                        cocktailState.data[cocktailId][`strMeasure${i}`]
                    );
            }

            measures.reverse();
            ingredients.reverse();

            return (
                <>
                    <img
                        src={cocktailState.data[cocktailId].strDrinkThumb}
                        alt={`${cocktailState.data[cocktailId].strDrink} drink`}
                    />
                    <h2>{cocktailState.data[cocktailId].strDrink}</h2>
                    <section>
                        <h3>
                            Glass -{" "}
                            <span>
                                {cocktailState.data[cocktailId].strGlass}
                            </span>
                        </h3>
                    </section>
                    <section>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients.map((el, key) => {
                                return (
                                    <li key={key}>
                                        {el} - {measures[key]}
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
