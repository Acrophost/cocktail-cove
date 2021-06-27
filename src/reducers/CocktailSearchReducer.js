const DefaultState = {
    criteria: "Category",
    value: "Cocktail",
};

const CocktailSearchReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "CHANGE_INFO":
            return {
                ...state,
                criteria: action.criteria,
                value: action.value,
            };
        default:
            return state;
    }
};

export default CocktailSearchReducer;
