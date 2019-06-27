import React from "react";
import Pagination from "react-js-pagination";
import { constants } from "../utility/constants";
import "./PaginationComponent.css";

class PaginationComponent extends React.Component {
  //used locally
  pageRange = 0;

  handlePageChange = pageNumber => {
    this.props.applyPagination(pageNumber);
  };

  componentWillMount() {
    this.pageRange = Math.ceil(this.props.totalItemsCount / constants.pageSize);
  }

  render() {
    return (
      <Pagination
        class="pagination"
        activePage={this.props.activePage}
        itemsCountPerPage={constants.pageSize}
        totalItemsCount={this.props.totalItemsCount}
        pageRangeDisplayed={this.pageRange}
        onChange={pageNumber => this.handlePageChange(pageNumber)}
      />
    );
  }
}

export default PaginationComponent;
