import React from "react";
import { useFilterContext } from "../../Context/FilterContext";
import FormatPrice from "../../FormatPrice/FormatPrice";

function FilterSection() {
  const {
    Filters: { text, color, price, maxPrice, minPrice },
    ALL_PRODUCTS,
    UpdateFilterValue,
    clearFilters
  } = useFilterContext();
  // get filter unique data
  const getUniqueData = (data, property) => {
    let NewValue = data.map((currentElement) => {
      return currentElement[property];
    });
    if (property === "colors") {
      NewValue = NewValue.flat();
    }
    return (NewValue = ["all", ...new Set(NewValue)]);
  };
  //unique data
  const categoryFilterData = getUniqueData(ALL_PRODUCTS, "category");
  const CompanyFilterData = getUniqueData(ALL_PRODUCTS, "company");
  const ColorFilterData = getUniqueData(ALL_PRODUCTS, "colors");

  return (
    <>
      <section>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="text"
            value={text}
            onChange={UpdateFilterValue}
          />
        </form>
      </section>
      <section className="my-3">
        <h5>Category</h5>
        {categoryFilterData.map((data, index) => {
          return (
            <p key={index}>
              <button
                className="filterButton"
                type="button"
                name="category"
                onClick={UpdateFilterValue}
                value={data}
              >
                {data.toUpperCase()}
              </button>
            </p>
          );
        })}
      </section>
      <section>
        <h5>Company</h5>
        <select
          name="company"
          onClick={UpdateFilterValue}
          className="form-select"
        >
          {CompanyFilterData.map((data, index) => {
            return (
              <option key={index} value={data} name="company">
                {data.toUpperCase()}
              </option>
            );
          })}
        </select>
      </section>
      <section className="my-3 ">
        <h5>Color</h5>
        <div className="d-flex">
          {ColorFilterData.map((data, index) => {
            if (data === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={data}
                  name="color"
                  className="filterButton"
                  onClick={UpdateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={data}
                name="color"
                style={{ backgroundColor: data }}
                className={color === data ? "btnstyle btnactive" : "btnstyle"}
                onClick={UpdateFilterValue}
              >
                {color === data ? (
                  <span className="bi bi-check-lg text-white text-center" />
                ) : null}
              </button>
            );
          })}
        </div>
      </section>
      <section>
        <div className="my-3">
          <h5>Price</h5>
          <div>
            <FormatPrice price={price} />
          </div>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={UpdateFilterValue}
          />
        </div>
      </section>
      <section className="my-3">
        <button className="btn btn-danger" onClick={clearFilters}>
          Clear
        </button>
      </section>
    </>
  );
}

export default FilterSection;
