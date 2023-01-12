function FilterReducer(state, action) {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return {
                ...state,
                FILTER_PRODUCTS: [...action.payload],
                ALL_PRODUCTS: [...action.payload]
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                GRID_VIEW: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                GRID_VIEW: false,
            };

        case "SET_SORT_VALUE":
            return {
                ...state,
                SORTING_VALUE: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            const { FILTER_PRODUCTS, SORTING_VALUE } = state;
            let TempSortData = [...FILTER_PRODUCTS];

            const sortingProducts = (a, b) => {
                if (SORTING_VALUE === "lowest") {
                    return a.price - b.price;
                }
                if (SORTING_VALUE === "Highest") {
                    return b.price - a.price;
                }
                if (SORTING_VALUE === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (SORTING_VALUE === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = TempSortData.sort(sortingProducts);
            return {
                ...state,
                FILTER_PRODUCTS: newSortData,
            }

        case "Update-Filter-Value":
            const { name, value } = action.payload;
            return {
                ...state,
                Filters: {
                    ...state.Filters,
                    [name]: value,
                },
            }
        case "Update-Filter_Product":
            let { ALL_PRODUCTS } = state;
            let SearchFilterProduct = [...ALL_PRODUCTS];
            const { text, category, company,color } = state.Filters;
            if (text) {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(text);
                })
            }
            if (category !== "All") {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.category === category;
                })
            }
            if (company !== "All") {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.company === company;
                })
            }
            if (color) {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.color.includes(color);
                })
            }
            return {
                ...state,
                FILTER_PRODUCTS: SearchFilterProduct,
            }
        default: return state;
    };
}

export default FilterReducer