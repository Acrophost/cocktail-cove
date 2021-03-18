import React from "react";
import { Provider } from "react-redux";

import Store from "../Store";

export default function ReduxWrapper({ element }) {
    return <Provider store={Store}>{element}</Provider>;
}
