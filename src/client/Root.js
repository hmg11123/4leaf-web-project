import React from "react";
import App from "../App";
import useTitle from "@4leaf.ysh/use-title";
import { HashRouter } from "react-router-dom";

const Root = () => {

    useTitle("4LEAF SOFEWARE");

    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}

export default Root;