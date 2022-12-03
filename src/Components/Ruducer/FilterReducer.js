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
            }

        default: return state;
    };
}

export default FilterReducer