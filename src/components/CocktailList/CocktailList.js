import _ from "lodash";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetCocktailList } from "../../actions/cocktailActions";

import CocktailItem from "./CocktailItem";

import { ItemList } from "./CocktailList_Wrapper";

const CocktailList = ({ modalRef, setCocktailId }) => {
    const dispatch = useDispatch();
    const cocktailList = useSelector((state) => state.CocktailList);

    const FetchData = React.useCallback(
        (category = "Cocktail") => {
            dispatch(GetCocktailList(category));
        },
        [dispatch]
    );

    React.useEffect(() => {
        FetchData("Cocktail");
    }, [FetchData]);

    const ShowData = () => {
        if (!_.isEmpty(cocktailList.data)) {
            return cocktailList.data.drinks.map((el, k) => {
                return (
                    <CocktailItem
                        key={k}
                        idDrink={el.idDrink}
                        strDrinkThumb={el.strDrinkThumb}
                        strDrink={el.strDrink}
                        setCocktailId={setCocktailId}
                        modalRef={modalRef}
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
