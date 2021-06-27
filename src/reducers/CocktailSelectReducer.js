const DefaultState = {
    loading: false,
    data: {},
    errorMsg: "",
};

const CocktailSelectReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "COCKTAIL_SELECT_LOADING": {
            return {
                ...state,
                loading: true,
                errorMsg: "",
            };
        }

        case "COCKTAIL_SELECT_SUCCESS": {
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.criterium]: action.payload,
                },
                errorMsg: "",
            };
        }

        case "COCKTAIL_SELECT_FAIL": {
            return {
                ...state,
                loading: false,
                errorMsg: "no values :(",
            };
        }

        default:
            return state;
    }
};

export default CocktailSelectReducer;
