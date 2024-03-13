import React, { SyntheticEvent, useState } from "react";
import { Product } from "../Models/Product";
import { deleteProduct, updateProduct } from "../Services/ProductAPIService";
import { ProductEdit } from "./ProductEdit";

interface propsInterface {
    data:Product
}

export function SingleProduct(props:propsInterface) {

    const[voEnabled, setVoEnabled] = useState(true);
    const[editShown, setEditShown] = useState(false);
    const[saveShown, setSaveShown] = useState(false);
    const[deleteShown, setDeleteShown] = useState(false);

    function buttonClickHandler(){
       setEditShown((editShown) => !editShown);
       setDeleteShown((deleteShown) => !deleteShown);
    }
 
    function deleteClickHandler(){
        let productDeletion = props.data.id
        deleteProduct(productDeletion);
    }

    const[nameInputShown, setNameInputShown] = useState(false);
    const[priceInputShown, setPriceInputShown] = useState(false);
    const[idInputShown, setIdInputShown] = useState(false);
    const[sellerInputShown, setSellerInputShown] = useState(false);

    function editClickHandler(){
        setEditShown((editShown) => !editShown);
        setDeleteShown((deleteShown) => !deleteShown);
        setSaveShown((saveShown) => !saveShown);
        setVoEnabled((voEnabled) => !voEnabled);
        setNameInputShown((nameInputShown) => !nameInputShown);
        setPriceInputShown((priceInputShown) => !priceInputShown);
        setIdInputShown((idInputShown) => !idInputShown);
        setSellerInputShown((sellerInputShown) => !sellerInputShown);
    }
    const [nameInput, setNameInput] = useState<string>("");
    function nameInputHandler(event:SyntheticEvent){
    let textBox = event.target as HTMLTextAreaElement;
    setNameInput(textBox.value);
    }
    
    const [priceInput, setPriceInput] = useState<number>(0);
    function priceInputHandler(event:SyntheticEvent){
        let priceBox = event.target as HTMLInputElement;
        setPriceInput(parseInt(priceBox.value));
    }

    const [sellerInput, setSellerInput] = useState<number>(0);
    function sellerInputHandler(event:SyntheticEvent){
        let sellerBox = event.target as HTMLInputElement;
        setSellerInput(parseInt(sellerBox.value));
    }

    function saveClickHandler(){
       let product : Product = {
            name:nameInput,
            id:props.data.id,
            price:priceInput,
            seller:sellerInput
        }
        let productId = props.data.id;
        updateProduct(product, productId);
    }

    return (<>
    <span><b>Product Name: {props.data.name}</b></span><br/>
    <span>Product Price: ${props.data.price}</span><br/>
    <span><i>Product ID: {props.data.id}</i></span><br/>
    <span>Seller ID: {props.data.seller}</span><br/>
    {nameInputShown && <label htmlFor="productName">Product Name: </label>}<br />
    {nameInputShown && <input onChange={nameInputHandler} value={nameInput}></input>}<br />
    {priceInputShown && <label htmlFor="price">Price: </label>}<br />
    {priceInputShown && <input onChange={priceInputHandler} value={priceInput}></input>}<br />
    {idInputShown && <label htmlFor="productId">Product ID: </label>}<br />
    {idInputShown && <input value={props.data.id} readOnly={true}></input>}<br />
    {sellerInputShown && <label htmlFor="seller">Seller Id: </label>}<br />
    {sellerInputShown && <input onChange={sellerInputHandler} value={sellerInput}></input>}<br />
    {voEnabled && <button onClick={buttonClickHandler}>View Options</button>}<br/>
    {editShown && <button onClick={editClickHandler}>Edit</button>}
    {saveShown && <button onClick={saveClickHandler}>Save</button>}
    {deleteShown && <button onClick={deleteClickHandler}>Delete</button>}
    <br/><br/>
    </>)
}



/*
export function SingleProduct(props:propsInterface) {

    const[voEnabled, setVoEnabled] = useState(true);
    const[editShown, setEditShown] = useState(false);
    const[deleteShown, setDeleteShown] = useState(false);

    function buttonClickHandler(){
       setEditShown((editShown) => !editShown);
       setDeleteShown((deleteShown) => !deleteShown);
    }
 
    function deleteClickHandler(){
        let productDeletion = props.data.id
        deleteProduct(productDeletion);
    }

    function editClickHandler(){
        setEditShown((editShown) => !editShown);
        setDeleteShown((deleteShown) => !deleteShown);
        setVoEnabled((voEnabled) => !voEnabled);
    }

    return (<>
    <span><b>Product Name: {props.data.name}</b></span><br/>
    <span>Product Price: ${props.data.price}</span><br/>
    <span><i>Product ID: {props.data.id}</i></span><br/>
    <span>Seller ID: {props.data.seller}</span><br/>
    {voEnabled && <button onClick={buttonClickHandler}>View Options</button>}<br/>
    {editShown && <button onClick={editClickHandler}>Edit</button>}
    {deleteShown && <button onClick={deleteClickHandler}>Delete</button>}
    <br/><br/>
    </>)
} */