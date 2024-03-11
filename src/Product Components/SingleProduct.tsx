import React from "react";
import { Product } from "../Models/Product";

interface propsInterface {
    data:Product
}

export function SingleProduct(props:propsInterface) {
    return (<>
    <h2>{props.data.name}</h2>
    <p style={{fontSize:12}}>{props.data.id}</p>
    <p>{props.data.price}</p>
    <p>{props.data.seller}</p>
    </>)
}