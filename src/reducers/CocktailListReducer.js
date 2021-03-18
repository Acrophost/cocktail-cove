const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
};

const CocktailListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "COCKTAIL_LIST_LOADING": {
            return {
                ...state,
                loading: true,
                errorMsg: "",
            };
        }

        case "COCKTAIL_LIST_SUCCESS": {
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: "",
            };
        }

        case "COCKTAIL_LIST_FAIL": {
            return {
                ...state,
                loading: false,
                errorMsg: "no cocktails :(",
            };
        }

        default:
            return state;
    }
};

export default CocktailListReducer;
