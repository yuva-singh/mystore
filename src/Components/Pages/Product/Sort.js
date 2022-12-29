import React from "react";
import { useFilterContext } from "../../Context/FilterContext";

function Sort() {
  const { FILTER_PRODUCTS,GRID_VIEW, setGridView,setListView } = useFilterContext();
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
          <div class="btn-group">
            <button
              class="btn btn-light btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sort;
