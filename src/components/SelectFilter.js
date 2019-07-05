import React from "react";
import Select from "react-select";

class FilterComponent extends React.Component {
  handleChange = selectedOptions => {
    this.props.filterProfiles(selectedOptions);
  };

  render() {
    return (
      <Select
        isMulti
        name="multiSelectFilter"
        options={this.props.statusSelected}
        getOptionLabel={option => `${option}`}
        getOptionValue={option => `${option}`}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={e => this.handleChange(e)}
      />
    );
  }
}

export default FilterComponent;
