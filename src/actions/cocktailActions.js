import axios from "axios";
import _ from "lodash";

export const GetSearch = (val, crit) => (dispatch) => {
    dispatch({ type: "CHANGE_INFO", criteria: crit, value: val });
};

export const GetSelect = (criteria) => async (dispatch) => {
    try {
        dispatch({
            type: "COCKTAIL_SELECT_LOADING",
        });

        let URL = ``;

        switch (criteria) {
            case "Glass":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`;
                break;
            case "Ingredient":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
                break;
            case "Alcoholic":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`;
                break;
            default:
                URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
                break;
        }

        const res = await axios.get(URL);

        dispatch({
            type: "COCKTAIL_SELECT_SUCCESS",
            payload: res.data.drinks,
            criterium: criteria,
        });
    } catch (e) {
        dispatch({
            type: "COCKTAIL_SELECT_FAIL",
        });
    }
};

export const GetCocktailList = (value, criteria) => async (dispatch) => {
    try {
        dispatch({
            type: "COCKTAIL_LIST_LOADING",
        });

        let URL = ``;

        switch (criteria) {
            case "Category":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
                break;
            case "Name":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
                break;
            case "First Letter":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;
                break;
            case "Ingredient":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
                break;
            case "Alcoholic":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${value}`;
                break;
            case "Glass":
                URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${value}`;
                break;
            default:
                URL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
                break;
        }

        let res;

        const fetchData = (address) => axios.get(address);
        if (criteria === "Random") {
            const randoms = _.fill(Array(+value), URL).map(fetchData);
            res = await Promise.all(randoms).then((data) => data);
            res = res.reduce((a, b) => {
                console.log(a);
                a.data.drinks.push(b.data.drinks[0]);
                return a;
            });
        } else {
            res = await axios.get(URL);
        }

        console.log(res);

        dispatch({
            type: "COCKTAIL_LIST_SUCCESS",
            payload: res.data,
            crit: criteria,
            val: value,
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
