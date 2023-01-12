import React from "react";
import { useFilterContext } from "../../Context/FilterContext";

function Sort() {
  const { FILTER_PRODUCTS, GRID_VIEW, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <>
      <div className="d-flex justify-content-between">
        <div style={{ cursor: "pointer" }}>
          <i
            className={
              GRID_VIEW
                ? "bi bi-grid-fill mx-1 fs-4 text-primary"
                : "bi bi-grid-fill mx-1 fs-4"
            }
            onClick={setGridView}
          ></i>
          <i
            className={
              GRID_VIEW
                ? "bi bi-list mx-1 fs-4"
                : "bi bi-list mx-1 fs-4 text-primary"
            }
            onClick={setListView}
          ></i>
        </div>
        <div>
          <p> {FILTER_PRODUCTS.length} Product Available</p>
        </div>
        <div>
          <select className="form-select" id="sort" onClick={sorting}>
            <option value="All">All</option>
            <option value="a-z">Price (a to z)</option>
            <option value="lowest">Price (low to high)</option>
            <option value="Highest">Price (Hight to low)</option>
            <option value="z-a">Price (z to a)</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Sort;
