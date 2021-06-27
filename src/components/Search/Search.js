import * as React from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

import { GetSearch, GetSelect } from "../../actions/cocktailActions";
import {
    SearchContainer,
    SearchSelect,
    SearchCurrent,
    SearchInputLabel,
    SearchText,
    SearchForm,
    SearchField,
    SearchOption,
    SearchApplyButton,
} from "./Search_Wrapper";

const Search = () => {
    const cocktailInfo = useSelector((state) => state.Search);
    const selectList = useSelector((state) => state.Select);
    const dispatch = useDispatch();

    const selectInputCriteria = [
        "Category",
        "Ingredient",
        "Alcoholic",
        "Glass",
    ];

    const [value, setValue] = React.useState(cocktailInfo.value);
    const [criteria, setCriteria] = React.useState(cocktailInfo.criteria);

    const FetchData = (criterium = "Category") => {
        dispatch(GetSelect(criterium));
    };

    React.useEffect(() => {
        FetchData(criteria);
    }, [criteria]);

    React.useEffect(() => {
        if (selectList.data[criteria] && selectInputCriteria.includes(criteria))
            setValue(selectVal(selectList.data[criteria][0]));
    }, [selectList]);

    const selectVal = (val) => {
        return criteria === "Ingredient"
            ? val[`strIngredient1`]
            : val[`str${criteria}`];
    };

    const handleCriteriaChange = (e) => {
        setCriteria(e.target.value);
        setValue("");
    };

    const handleValueChange = (e) => {
        if (criteria === "First Letter") {
            setValue(e.target.value.charAt(0));
        } else if (criteria === "Random") {
            if (!isNaN(+e.target.value) && +e.target.value <= 25)
                setValue(e.target.value);
        } else {
            setValue(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(GetSearch(value, criteria));
    };

    const ShowData = () => {
        if (!_.isEmpty(selectList.data[criteria])) {
            return selectList.data[criteria].map((val, k) => (
                <SearchOption key={k} value={selectVal(val)}>
                    {selectVal(val)}
                </SearchOption>
            ));
        } else {
            <SearchOption value="Cocktail">Cocktail</SearchOption>;
        }
    };

    const CurrentCriteria = () => {
        return (
            <SearchCurrent>
                Current search:
                <span>
                    {cocktailInfo.criteria} - {cocktailInfo.value}
                </span>
            </SearchCurrent>
        );
    };

    return (
        <SearchContainer>
            <h2>Search drinks:</h2>
            <SearchForm onSubmit={handleSubmit}>
                <SearchField>
                    <SearchInputLabel htmlFor="search-criteria">
                        Criterium
                    </SearchInputLabel>
                    <SearchSelect
                        id="search-criteria"
                        value={criteria}
                        onChange={handleCriteriaChange}
                    >
                        <SearchOption value="Category">Category</SearchOption>
                        <SearchOption value="Name">Name</SearchOption>
                        <SearchOption value="First Letter">
                            First Letter
                        </SearchOption>
                        <SearchOption value="Ingredient">
                            Ingredient
                        </SearchOption>
                        <SearchOption value="Alcoholic">Alcoholic</SearchOption>
                        <SearchOption value="Glass">Glass</SearchOption>
                        <SearchOption value="Random">Random</SearchOption>
                    </SearchSelect>
                </SearchField>
                <SearchField>
                    <SearchInputLabel htmlFor="search-value">
                        {criteria !== "Random"
                            ? `Value`
                            : `Number of Drinks (max 25)`}
                    </SearchInputLabel>
                    {selectList.data[criteria] &&
                    selectInputCriteria.includes(criteria) ? (
                        <SearchSelect
                            id="search-value"
                            value={value}
                            onChange={handleValueChange}
                        >
                            {ShowData()}
                        </SearchSelect>
                    ) : (
                        <SearchText
                            type="text"
                            id="search-value"
                            value={value}
                            onChange={handleValueChange}
                        />
                    )}
                </SearchField>
                <SearchApplyButton type="submit" value="Apply" />
            </SearchForm>
            {CurrentCriteria()}
        </SearchContainer>
    );
};

export default Search;
