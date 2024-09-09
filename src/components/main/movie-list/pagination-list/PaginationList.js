// src/PaginationList.js
import React, { Component } from "react";
import "./PaginationList.css"; // Ensure the CSS file exists and is correctly linked

class PaginationList extends Component {
  state = {
    currentPage: this.props.currentPage || 1,
  };

  componentDidUpdate() {
    if (this.state.currentPage !== this.props.currentPage) {
      this.setState({ currentPage: this.props.currentPage });
    }
  }
  // Render pagination controls dynamically based on current page and total pages
  renderPagination = () => {
    const { totalPages } = this.props;
    const { currentPage } = this.state;

    const pages = [];

    if (totalPages > 5) {
      if (currentPage < 4) {
        // When selected page < 4 1=2=3=4=...=totalPage
        for (let i = 1; i <= 4; i++) {
          pages.push(this.paginationItem(i, currentPage));
        }
        pages.push(this.paginationItem("...", currentPage, true, "right"));
        pages.push(this.paginationItem(totalPages, currentPage));
      } else if (currentPage > totalPages - 3) {
        // When selected page > totalPages-3 1==...==tP-3==tp-2==tp-1==tp
        pages.push(this.paginationItem(1, currentPage));
        pages.push(this.paginationItem("...", currentPage, true, "left"));
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(this.paginationItem(i, currentPage));
        }
      } else {
        // 1== cp-2 == cp-1 == cp == cp+1 == cp+2 == tp
        pages.push(this.paginationItem(1, currentPage));
        pages.push(this.paginationItem("...", currentPage, true, "left"));
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(this.paginationItem(i, currentPage));
        }
        pages.push(this.paginationItem("...", currentPage, true, "right"));
        pages.push(this.paginationItem(totalPages, currentPage));
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(this.paginationItem(i, currentPage));
      }
    }

    return pages;
  };

  paginationItem = (i, currentPage, disabled = false, keyForDots) => {
    return (
      <li
        key={disabled ? keyForDots : i}
        className={`page-item ${currentPage === i ? "active" : ""} ${
          disabled && "disabled"
        }`}
        onClick={() => disabled || this.handlePageClick(i)}
      >
        {i}
      </li>
    );
  };

  // Method to handle page click and update state
  handlePageClick = (page) => {
    if (page < 1 || page > this.props.totalPages) return;
    this.setState({ currentPage: page }, () => {
      this.onPageChange();
    });
  };
  // Method to handle the onChange of the current page
  onPageChange = () => {
    const { currentPage } = this.state;
    this.props.onPageChange(currentPage);
  };

  render() {
    const { totalPages } = this.props;
    const { currentPage } = this.state;

    return (
      <div className="pagination-bar-container text-center">
        {/* <ul className="pagination-bar">{this.renderPagination()}</ul> */}
        <ul className="pagination-bar">
          <li
            key="prev"
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => this.handlePageClick(currentPage - 1)}
          >
            Previous
          </li>
          {this.renderPagination()}
          <li
            key="next"
            className={`next ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => this.handlePageClick(currentPage + 1)}
          >
            Next
          </li>
        </ul>
      </div>
    );
  }
}

export default PaginationList;
