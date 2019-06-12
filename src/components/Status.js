import React from "react";
import "./statusStyle.css";

class Status extends React.Component {
  render() {
    return (
      <span
        className={`status ${this.props.children != null && this.props.children.includes("Rejected") && 
        "rejected"} ${this.props.children != null && this.props.children.includes("Joiner") && 
        "accepted"} ${this.props.children != null && this.props.children.includes("Joined") && 
        "accepted"} ${this.props.children != null && this.props.children.includes("Application Received") &&
        "received"} ${this.props.children != null && this.props.children.includes("Offer Made") && 
        "offer"} ${this.props.children != null && this.props.children.includes("On hold") && 
        "hold"} ${this.props.children != null && this.props.children.includes("Offer Declined") && 
        "declined"}`}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Status;
