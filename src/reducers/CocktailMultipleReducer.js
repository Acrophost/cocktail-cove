const DefaultState = {
    loading: false,
    data: {},
    errorMsg: "",
};

const CocktailMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "COCKTAIL_MULTIPLE_LOADING": {
            return {
                ...state,
                loading: true,
                errorMsg: "",
            };
        }
        case "COCKTAIL_MULTIPLE_SUCCESS": {
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.cocktailId]: action.payload,
                },
                errorMsg: "",
            };
        }
        case "COCKTAIL_MULTIPLE_FAIL": {
            return {
                ...state,
                loading: false,
                errorMsg: "no such cocktail",
            };
        }
        default:
            return state;
    }
};

export default CocktailMultipleReducer;
