import React from "react";
import { Link } from "react-router-dom";
export function NavigationBar() {
    return (<>
        <Link to="home">Home Page</Link>
        <Link to="sellers">Seller Page</Link>
        <Link to="products">Product Page</Link>

    </>);
    //put space between each link on display
    //make the links prettier (more like buttons?)
}