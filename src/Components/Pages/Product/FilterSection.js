import React from "react";
import { useFilterContext } from "../../Context/FilterContext";

function FilterSection() {
  const {
    Filters: { text, color },
    ALL_PRODUCTS,
    UpdateFilterValue,
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
        <h6>Category</h6>
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
        <h6>Company</h6>
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
        <h6>Color</h6>
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
                className={color === data ?  "btnstyle btnactive" : "btnstyle"}
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
    </>
  );
}

export default FilterSection;
