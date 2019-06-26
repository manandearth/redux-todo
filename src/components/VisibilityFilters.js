import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

function VisibilityFilters({ list, visibilityFilter, setFilter, activeFilter }) {
        
        return (
            <div className="visibility-filters">
              {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                  const currentFilter = VISIBILITY_FILTERS[filterKey];
                  const activeFilter = visibilityFilter[list];
                  return (
                      <span
                        key={`visibility-filter-${currentFilter}`}
                        className={
                            cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active")}
                        onClick={() =>
                            (setFilter(list, currentFilter))
                        }>
                        {currentFilter}
                      </span>
                  );
              })}
            </div>
        );
    };



const mapStateToProps = ( state, ownProps ) => {
    const list = ownProps.list;
    const visibilityFilter = state.visibilityFilter;
    return {
        visibilityFilter: visibilityFilter,
        list: list
     
    };
};

const mapDispatchToProps = {
    setFilter
};

// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);
