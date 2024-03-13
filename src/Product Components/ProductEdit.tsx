import React, { SyntheticEvent, useState } from "react";
import { Product } from "../Models/Product";
import { updateProduct } from "../Services/ProductAPIService";

interface propsInterface {
    data:Product
}

export function ProductEdit(props:propsInterface) {

    const[updateShown, setUpdateShown] = useState(false);

    const [nameInput, setNameInput] = useState<string>("")
    function nameInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setNameInput(textBox.value);
    }
    
    const [priceInput, setPriceInput] = useState<number>(0)
    function priceInputHandler(event:SyntheticEvent){
        let priceBox = event.target as HTMLInputElement;
        setPriceInput(parseInt(priceBox.value));
    }

    const [sellerInput, setSellerInput] = useState<number>(0)
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
    <label htmlFor="productName">Product Name: </label><br />
    <input onChange={nameInputHandler} value={nameInput}></input><br />
    <label htmlFor="price">Price: </label><br />
    <input onChange={priceInputHandler} value={priceInput}></input><br />
    <label htmlFor="productId">Product ID: </label><br />
    <input value={props.data.id} readOnly={true}></input><br />
    <label htmlFor="seller">Seller Id: </label><br />
    <input onChange={sellerInputHandler} value={sellerInput}></input><br />
    <button onClick={saveClickHandler}>Save</button>
    </>)
}