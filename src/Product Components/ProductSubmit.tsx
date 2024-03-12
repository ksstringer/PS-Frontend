import React, { SyntheticEvent, useState } from "react";
import { createInputFiles } from "typescript";
import { Product } from "../Models/Product";
import { postProduct } from "../Services/ProductAPIService";

export function ProductSubmit() {
    const [formData, setFormData] = useState({
        name: "",
        id: null,
        price: null,
        seller: null,
      });
    
    const [nameInput, setNameInput] = useState<string>("")
    function nameInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setNameInput(textBox.value);
    }

    const [idInput, setIdInput] = useState<number>(0)
    function idInputHandler(event:SyntheticEvent){
        let idBox = event.target as HTMLInputElement;
        setIdInput(parseInt(idBox.value));
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

    function buttonClickHandler(){
        let product : Product = {
            name:nameInput,
            id:idInput,
            price:priceInput,
            seller:sellerInput
        }
        postProduct(product);
    }

    return (<>
    <h1>Submit a new product</h1>
    <input onChange={nameInputHandler} value={nameInput}></input>
    <input onChange={idInputHandler} value={idInput}></input>
    <input onChange={priceInputHandler} value={priceInput}></input>
    <input onChange={sellerInputHandler} value={sellerInput}></input>
    <button onClick={buttonClickHandler}>Submit</button>
    </>)
}

    //ID -- change to be a read-only display of the auto generated id? (hidden "type"??)
    //seller -- change to be a dropdown of existing sellers for selection?
    //have each field display on its own line
    //add a $ in front of the price display?

    /**
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        //add validation
        //ADD THE ACTUAL PRODUCT THAT WAS CREATED AND SEND IT TO THE API
      };

   /** return (
        <form onSubmit={handleSubmit}>
            <label>Enter Product Name:
            <input
                type="text"
                name="name"
                placeholder="Please enter product name"
                value={formData.name || ""}
                onChange={handleInputChange}
            />
            </label>
            <label>Product ID:
            <input
                type="number"
                name="id"
                value={formData.id || ""}
                onChange={handleInputChange}
            />
            </label>
            <label>Enter Product Price:
            <input
                type="number"
                name="price"
                placeholder="Please enter product price"
                value={formData.price || ""}
                onChange={handleInputChange}
            />
            </label>
            <label>Enter Seller ID:
            <input
                type="number"
                name="seller"
                placeholder="Please enter seller ID"
                value={formData.seller || ""}
                onChange={handleInputChange}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
**/