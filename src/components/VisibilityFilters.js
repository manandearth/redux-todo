import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

class VisibilityFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = "";
    }

    handleSetFilter = ( filter ) => {
        this.props.setFilter(this.props.list, filter);
        }

    render() {
        const activeFilter = this.props.activeFilter;
        return (
            <div className="visibility-filters">
              {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                  const currentFilter = VISIBILITY_FILTERS[filterKey];
                  return (
                      <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active")}
                        onClick={() =>
                            (this.handleSetFilter(currentFilter)) }>
                        {currentFilter}
                      </span>
                  );
              })}
            </div>
        );
    };
}


const mapStateToProps = ( state, ownProps ) => {
    const list = ownProps.list;
    const visibilityFilter = state.visibilityFilter;
    return {
        activeFilter: visibilityFilter[list]
     
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
