import React from "react";
import { NavLink } from "react-router-dom";

class footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/celeb">셀럽</NavLink>
          <NavLink to="/call">제휴문의</NavLink>
        </div>
      </div>
    );
  }
}

export default footer;
