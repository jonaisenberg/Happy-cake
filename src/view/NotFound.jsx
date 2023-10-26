// eslint-disable-next-line no-unused-vars
import React from "react";
import Error from "../gif/404.gif"

const NotFound = () => {
    return (
        <div className="imagen">
            <img src={Error} alt="imagen de error 404" />
        </div>
    )
};

export default NotFound;
