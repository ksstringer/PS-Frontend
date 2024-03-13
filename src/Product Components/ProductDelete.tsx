import { prependOnceListener } from "process";
import React from "react";
import { Product } from "../Models/Product";
import { deleteProduct } from "../Services/ProductAPIService";

interface propsInterface {
    data:Product
    SelectProductHandler:Function;
}

//commented out as were getting issues with the SingleProduct map on Product Page & it requiring the "deleteClickHandler" function to be included

/**
export function ProductDelete(props:propsInterface){
    function deleteClickHandler(){
        let deletionId = props.SelectProductHandler(props.data.id);
        deleteProduct(deletionId);
    }

} **/