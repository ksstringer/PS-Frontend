import React from "react";
import { Seller } from "../Models/Seller";

interface propsInterface {
    data:Seller
}

export function SingleSeller(props:propsInterface) {
    return (<>
    <span><b>{props.data.name}</b></span><br/>
    <span>ID: {props.data.id}</span><br/>
    <br/>
    </>)
}