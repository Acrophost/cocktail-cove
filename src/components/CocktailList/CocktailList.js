import _ from "lodash";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetCocktailList, GetSearch } from "../../actions/cocktailActions";

import CocktailItem from "./CocktailItem";

import { ItemList, ListError } from "./CocktailList_Wrapper";

const CocktailList = ({ modalRef, setCocktailId }) => {
    const dispatch = useDispatch();
    const cocktailList = useSelector((state) => state.CocktailList);
    const cocktailInfo = useSelector((state) => state.Search);

    const FetchData = React.useCallback(
        (value = "Cocktail", criteria = "Category") => {
            dispatch(GetCocktailList(value, criteria));
        },
        [dispatch]
    );

    const FetchCocktails = React.useCallback(() => {
        if (!cocktailInfo.value) dispatch(GetSearch("Cocktail", "Category"));
    });

    React.useEffect(() => {
        FetchCocktails();
    }, [FetchCocktails]);

    React.useEffect(() => {
        FetchData(cocktailInfo.value, cocktailInfo.criteria);
    }, [FetchData, cocktailInfo]);

    const ShowData = () => {
        if (
            !_.isEmpty(
                cocktailList.data[
                    _.findIndex(cocktailList.data, {
                        type: `${cocktailInfo.criteria}=${cocktailInfo.value}`,
                    })
                ]
            )
        ) {
            const drinks =
                cocktailList.data[
                    _.findIndex(cocktailList.data, {
                        type: `${cocktailInfo.criteria}=${cocktailInfo.value}`,
                    })
                ].values.drinks;

            if (!_.isEmpty(drinks))
                return drinks.map((el, k) => {
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
            else return <ListError>No drinks meeting up criteria</ListError>;
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
