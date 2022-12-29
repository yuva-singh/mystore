import React from 'react';
import { useFilterContext } from '../../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

function ProductList() {
  const {FILTER_PRODUCTS,GRID_VIEW} = useFilterContext();
  if(GRID_VIEW === true){
    return <GridView products ={FILTER_PRODUCTS}/>
  }
  if(GRID_VIEW === false){
    return <ListView products ={FILTER_PRODUCTS}/>
  }
}

export default ProductList