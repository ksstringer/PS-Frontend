import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export function NavigationBar() {
    return (<>
    <ul>
        <li><Link to="home">Home Page</Link></li>
        <li><Link to="sellers">Seller Page</Link></li>
        <li><Link to="products">Product Page</Link></li>
    </ul>
    </>);
    //put space between each link on display
    //make the links prettier (more like buttons?)
}