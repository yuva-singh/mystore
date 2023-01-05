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
                // if (state.SORTING_VALUE === "All") {
                //     return newSortData = TempSortData;
                //  };

            }
            newSortData = TempSortData.sort(sortingProducts);
            return {
                ...state,
                FILTER_PRODUCTS: newSortData,
            }
        default: return state;
    };
}

export default FilterReducer