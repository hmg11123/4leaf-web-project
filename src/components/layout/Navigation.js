import React from "react";
import { Link } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link className="" to="">
        <FiberManualRecordIcon style={{ color: green[500] }} fontSize="large" />
      </Link>
      <Link className="" to="">
        <FiberManualRecordIcon />
      </Link>
      <Link className="" to="">
        <FiberManualRecordIcon />
      </Link>
      <Link className="" to="">
        <FiberManualRecordIcon />
      </Link>
      <Link className="" to="">
        <FiberManualRecordIcon />
      </Link>
      <Link className="" to="">
        <FiberManualRecordIcon />
      </Link>
    </div>
  );
}

export default Navigation;
