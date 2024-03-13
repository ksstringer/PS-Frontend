import React from "react";
import { ProductList } from "../Product Components/ProductList";
import { ProductSubmit } from "../Product Components/ProductSubmit";
import { getAllProducts, postProduct } from "../Services/ProductAPIService";

export function ProductPage(){

    return (
    <>
    <h1>Your Product List</h1>
    <ProductList></ProductList>
    <ProductSubmit></ProductSubmit>
    </>
        )
    }