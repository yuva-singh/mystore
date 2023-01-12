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
    return (NewValue = ["All", ...new Set(NewValue)]);
  };
  //unique data
  const categoryFilterData = getUniqueData(ALL_PRODUCTS, "category");
  const CompanyFilterData = getUniqueData(ALL_PRODUCTS, "company");
  const ColorFilterData = getUniqueData(ALL_PRODUCTS, "colors");
  console.log(ColorFilterData)

  return (
    <>
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
          className="form-select"
          onClick={UpdateFilterValue}
          name="company"
        >
          {CompanyFilterData.map((companyName, indexValue) => {
            return (
              <option key={indexValue} value={companyName} name="company">
                {companyName}
              </option>
            );
          })}
        </select>
      </section>
      <section className="my-3 ">
        <h6>Color</h6>
        <div className="d-flex">
          {ColorFilterData.map((data, index) => {
                                console.log(data)
            return (
              <div
                key={index}
                className="btnstyle"
                name="color"
                value={data}
                onClick={UpdateFilterValue}
                style={{ backgroundColor: data }}
              >
                {color === data ? (
                  <span className="bi bi-check-lg text-white text-center" />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FilterSection;
