import _ from "lodash";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "gatsby";

import { GetCocktailList } from "../actions/cocktailActions";

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
            return cocktailList.data.drinks.map((el) => {
                return (
                    <section>
                        <Link to={`/cocktail/`} state={{ id: el.idDrink }}>
                            <img
                                src={el.strDrinkThumb}
                                alt={`${el.strDrink} drink`}
                            />
                            <p>{el.strDrink}</p>
                        </Link>
                    </section>
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

    return (
        <article>
            <h1>Cocktail List</h1>
            {ShowData()}
        </article>
    );
};

export default CocktailList;
