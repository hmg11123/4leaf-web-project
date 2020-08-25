import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navs">
        <Link className="navs__siginIn nav" to="signIn">
          <FiberManualRecordIcon />
        </Link>

        <Link className="navs__signUp nav" to="signUp">
          <FiberManualRecordIcon />
        </Link>

        <Link className="navs__info nav" to="info">
          <FiberManualRecordIcon />
        </Link>

        <Link className="navs__price nav" to="price">
          <FiberManualRecordIcon />
        </Link>

        <Link className="navs__request nav" to="request">
          <FiberManualRecordIcon />
        </Link>

        <Link className="navs__ask nav" to="ask">
          <FiberManualRecordIcon />
        </Link>
      </div>
    );
  }
}

export default Navigation;
