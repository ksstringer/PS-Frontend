import React, { SyntheticEvent, useState } from "react";
import { Product } from "../Models/Product";
import { postProduct } from "../Services/ProductAPIService";

export function ProductSubmit() {
    
    const [nameInput, setNameInput] = useState<string>("")
    function nameInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setNameInput(textBox.value);
    }
/**
    const [idInput, setIdInput] = useState<number>(0)
    function idInputHandler(event:SyntheticEvent){
        let idBox = event.target as HTMLInputElement;
        setIdInput(parseInt(idBox.value));
    }
**/
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

    function buttonClickHandler(){
        let product : Product = {
            name:nameInput,
            //id:idInput,
            price:priceInput,
            seller:sellerInput
        }
        postProduct(product);
    }

    return (<>
    <h2>Submit a new product</h2>
    <label htmlFor="productName">Product Name: </label><br />
    <input onChange={nameInputHandler} value={nameInput}></input><br />
    <label htmlFor="price">Price: </label><br />
    <input onChange={priceInputHandler} value={priceInput}></input><br />
    <label htmlFor="seller">Seller Id: </label><br />
    <input onChange={sellerInputHandler} value={sellerInput}></input><br />
    <button onClick={buttonClickHandler}>Submit</button>
    </>)
}

//<input onChange={idInputHandler} value={idInput}></input>