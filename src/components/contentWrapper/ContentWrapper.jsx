
import React from "react";

import "./style.scss";

//this component will center all the elt in website.
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;