import React from "react";
import { ProductList } from "../Product Components/ProductList";
import { ProductSubmit } from "../Product Components/ProductSubmit";
import { getAllProducts, postProduct } from "../Services/ProductAPIService";

export function ProductPage(){
    function logAllProduct(){
        getAllProducts()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    function postProducts(){
        postProduct()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }
    return (
    <>
    <ProductList></ProductList>
    <ProductSubmit></ProductSubmit>
    <button onClick={postProducts}>test if i can post a seller</button>
    <button onClick={logAllProduct}>test i can get all seller</button>
    </>
        )
    }