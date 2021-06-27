import { combineReducers } from "redux";
import CocktailListReducer from "./CocktailListReducer";
import CocktailMultipleReducer from "./CocktailMultipleReducer";
import CocktailSearchReducer from "./CocktailSearchReducer";
import CocktailSelectReducer from "./CocktailSelectReducer";

const RootReducer = combineReducers({
    CocktailList: CocktailListReducer,
    Cocktail: CocktailMultipleReducer,
    Search: CocktailSearchReducer,
    Select: CocktailSelectReducer,
});

export default RootReducer;
