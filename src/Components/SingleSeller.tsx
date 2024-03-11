import React from "react";
import { Seller } from "../Models/Seller";

interface propsInterface {
    data:Seller
}

export function SingleSeller(props:propsInterface) {
    return (<>
    <h2>{props.data.name}</h2>
    <p style={{fontSize:12}}>{props.data.id}</p>
    </>)
}