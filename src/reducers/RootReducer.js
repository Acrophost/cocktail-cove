import { combineReducers } from "redux";
import CocktailListReducer from "./CocktailListReducer";
import CocktailMultipleReducer from "./CocktailMultipleReducer";

const RootReducer = combineReducers({
    CocktailList: CocktailListReducer,
    Cocktail: CocktailMultipleReducer,
});

export default RootReducer;
