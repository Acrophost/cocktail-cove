import axios from "axios";

export const GetCocktailList = (category) => async (dispatch) => {
    try {
        dispatch({
            type: "COCKTAIL_LIST_LOADING",
        });

        const res = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
        );

        dispatch({
            type: "COCKTAIL_LIST_SUCCESS",
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: "COCKTAIL_LIST_FAIL",
        });
    }
};

export const GetCocktail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "COCKTAIL_MULTIPLE_LOADING",
        });

        const res = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        dispatch({
            type: "COCKTAIL_MULTIPLE_SUCCESS",
            payload: res.data.drinks[0],
            cocktailId: id,
        });
    } catch (e) {
        dispatch({
            type: "COCKTAIL_MULTIPLE_FAIL",
        });
    }
};
