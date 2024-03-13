import React from "react";
import { ProductList } from "../Product Components/ProductList";
import { ProductSubmit } from "../Product Components/ProductSubmit";
import './ProductPage.css';

export function ProductPage(){

    return (
    <>
    <h1>Your Product List</h1>
    <div className="container">
    <div className="left-component"><ProductList></ProductList></div>
    <div className="bottom-component"><ProductSubmit></ProductSubmit></div>
    </div>
    </>
        )
    }