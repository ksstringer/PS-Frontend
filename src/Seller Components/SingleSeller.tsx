import React from "react";
import { Seller } from "../Models/Seller";

interface propsInterface {
    data:Seller
}

export function SingleSeller(props:propsInterface) {
    return (<>
    <h2>{props.data.name}</h2>
    <p>{props.data.id}</p>
    </>)
}