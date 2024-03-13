import React, { useState } from "react";
import { Product } from "../Models/Product";
import { deleteProduct } from "../Services/ProductAPIService";

interface propsInterface {
    data:Product
}

export function SingleProduct(props:propsInterface) {

    const[editShown, setEditShown] = useState(false);
    const[deleteShown, setDeleteShown] = useState(false);

    function buttonClickHandler(){
       setEditShown((editShown) => !editShown);
       setDeleteShown((deleteShown) => !deleteShown);
    }

//currently getting a NumberFormatException: For input string: "{id}" on the backend
//but a 500 on the front end console?
//need to understand how to fix those
    function deleteClickHandler(){
        let productDeletion = props.data.id
        deleteProduct(productDeletion);
    }

    return (<>
    <span><b>Product Name: {props.data.name}</b></span><br/>
    <span>Product ID: {props.data.id}</span><br/>
    <span>Product Price: ${props.data.price}</span><br/>
    <span>Seller ID: {props.data.seller}</span><br/>
    <button onClick={buttonClickHandler}>View Options</button><br/>
    <br/>
    {editShown && <button>Edit</button>}
    {deleteShown && <button onClick={deleteClickHandler}>Delete</button>}
    </>)
}



/**interface propsInterface {
    data:Product
    deleteClickHandler:Function
}

export function SingleProduct(props:propsInterface) {

    const[editShown, setEditShown] = useState(false);
    const[deleteShown, setDeleteShown] = useState(false);

    function buttonClickHandler(){
       setEditShown((editShown) => !editShown);
       setDeleteShown((deleteShown) => !deleteShown);
    }

    function selectProductHandler(id:number){
        setSelectedProduct(id);
    }
    const [selectedProduct, setSelectedProduct] = useState(0);

    return (<>
    <h2>Product Name: {props.data.name}</h2>
    <p>Product ID: {props.data.id}</p>
    <p>Product Price: ${props.data.price}</p>
    <p>Seller ID: {props.data.seller}</p>
    <button onClick={buttonClickHandler}>View Options</button><br/>
    {editShown && <button>Edit</button>}
    {deleteShown && <button onClick={()=>props.deleteClickHandler}>Delete</button>}
    </>) */