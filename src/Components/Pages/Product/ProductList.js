import React from 'react';
import { useFilterContext } from '../../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

function ProductList() {
  const {FILTER_PRODUCTS,setGridView} = useFilterContext();
  if(setGridView){
    return <GridView products ={FILTER_PRODUCTS}/>
  }
  // if(setGridView === false){
  //   return <ListView products ={FILTER_PRODUCTS}/>
  // }
}

export default ProductList