import _ from "lodash";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetCocktailList } from "../../actions/cocktailActions";

import CocktailItem from "./CocktailItem";

import { ItemList } from "./CocktailList_Wrapper";

const CocktailList = () => {
    const dispatch = useDispatch();
    const cocktailList = useSelector((state) => state.CocktailList);

    const FetchData = (category = "Cocktail") => {
        dispatch(GetCocktailList(category));
    };

    React.useEffect(() => {
        FetchData("Cocktail");
    }, []);

    const ShowData = () => {
        if (!_.isEmpty(cocktailList.data)) {
            return cocktailList.data.drinks.map((el, k) => {
                return (
                    <CocktailItem
                        key={k}
                        idDrink={el.idDrink}
                        strDrinkThumb={el.strDrinkThumb}
                        strDrink={el.strDrink}
                    />
                );
            });
        }

        if (cocktailList.loading) {
            return <section>Loading...</section>;
        }

        if (cocktailList.errorMsg !== "") {
            return <section>{cocktailList.errorMsg}</section>;
        }

        return <section>Unable to get data :(</section>;
    };

    return <ItemList>{ShowData()}</ItemList>;
};

export default CocktailList;
