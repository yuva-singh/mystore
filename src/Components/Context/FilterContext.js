import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContect";
import reducer from '../Ruducer/FilterReducer'

const FilterContext = createContext();
const initialState = {
    FILTER_PRODUCTS: [],
    ALL_PRODUCTS: [],
    GRID_VIEW: false
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

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products })
    }, [products]);
    return <FilterContext.Provider value={{ ...state, setGridView,setListView }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}; 