import React from 'react'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Sort from './Sort'
// import {useFilterContext} from '../../Context/FilterContext'

function Products() {
  // const {FILTER_PRODUCTS} = useFilterContext();
  return (
    <>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <FilterSection />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <Sort />
            </div>
            <div className="row">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;