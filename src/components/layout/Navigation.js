import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navs">
        <Link className="navs__info nav" to="info">
          <FiberManualRecordIcon className="nav-circle" />
        </Link>

        <Link className="navs__price nav" to="price">
          <FiberManualRecordIcon className="nav-circle" />
        </Link>

        <Link className="navs__request nav" to="request">
          <FiberManualRecordIcon className="nav-circle" />
        </Link>

        <Link className="navs__ask nav" to="ask">
          <FiberManualRecordIcon className="nav-circle" />
        </Link>
      </div>
    );
  }
}

export default Navigation;
