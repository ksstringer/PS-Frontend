import React from "react";
import { Link } from "react-router-dom";
export function NavigationBar() {
    return (<>
        <Link to="home">Home Page</Link>
        <Link to="sellers">Seller Page</Link>
    </>);
}