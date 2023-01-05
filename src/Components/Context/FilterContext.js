import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContect";
import reducer from '../Reducer/FilterReducer'

const FilterContext = createContext();
const initialState = {
    FILTER_PRODUCTS: [],
    ALL_PRODUCTS: [],
    GRID_VIEW: true,
    SORTING_VALUE: "lowest",
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState);
    // to grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    }
    // list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    }
    // sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        return dispatch({ type: "SET_SORT_VALUE", payload:userValue})
    };

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS"})
    }, [state.SORTING_VALUE])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products]);
    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}; 