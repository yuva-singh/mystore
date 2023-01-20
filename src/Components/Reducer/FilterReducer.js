function FilterReducer(state, action) {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);
            return {
                ...state,
                FILTER_PRODUCTS: [...action.payload],
                ALL_PRODUCTS: [...action.payload],
                Filters: { ...state.Filters, maxPrice, price: maxPrice },

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
            const { text, category, company, color, price } = state.Filters;
            if (text) {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.category === category;
                })
            }

            if (company !== "all") {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.company === company;
                })
            }

            if (color !== "all") {
                SearchFilterProduct = SearchFilterProduct.filter((currentElement) => {
                    return currentElement.colors.includes(color);
                })
            }
            if (price === 0) {
                SearchFilterProduct = SearchFilterProduct.filter(
                    (curElem) => curElem.price == price
                );
            } else {
                SearchFilterProduct = SearchFilterProduct.filter(
                    (curElem) => curElem.price <= price
                );
            }
            return {
                ...state,
                FILTER_PRODUCTS: SearchFilterProduct,
            }
            case "CLEAR_FILTERS":
                return {
                  ...state,
                  Filters: {
                    ...state.Filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice:state.Filters.maxPrice,
                    price:state.Filters.maxPrice,
                    minPrice: state.Filters.maxPrice,
                  },
                };
        default: return state;
    };
}

export default FilterReducer