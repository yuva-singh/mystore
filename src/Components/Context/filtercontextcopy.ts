import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContect";
import reducer from '../Reducer/FilterReducer'

const FilterContext = createContext();
const initialState = {
    FILTER_PRODUCTS: [],
    ALL_PRODUCTS: [],
    GRID_VIEW: true,
    SORTING_VALUE: "lowest",
    Filters: {
        text: "",
        category:"all",
        company:"all",
        color:"all"
    }
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
        return dispatch({ type: "SET_SORT_VALUE", payload: userValue })
    };

    const UpdateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value
        dispatch({ type: "Update-Filter-Value", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({type:"Update-Filter_Product"})
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.SORTING_VALUE,state.Filters])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products]);
    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, UpdateFilterValue }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}; 