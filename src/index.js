import React from "react";
import ReactDOM from "react-dom/client";
import RoutesRoot from "./route";
import 'alertifyjs/build/css/alertify.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <RoutesRoot />
    </>
);
