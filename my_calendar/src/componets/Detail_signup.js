import React from "react";
import { ReactDOM } from "react";

const Detail_signup = ({children}) => {
    return ReactDOM.createPortal(children,'1');
}

export default Detail_signup