import React, { useState } from "react";
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
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Product Name:
            <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
            />
            </label>
            <label>Enter Product Price:
            <input
                type="number"
                name="price"
                value={formData.price || ""}
                onChange={handleInputChange}
            />
            </label>
            <label>Enter Seller ID:
            <input
                type="number"
                name="seller"
                value={formData.seller || ""}
                onChange={handleInputChange}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

/**const [userInput, setUserInput] = useState<string>("")
function userInputHandler(event:SyntheticEvent){
    let textBox = event.target as HTMLTextAreaElement;
    setUserInput(textBox.value);
}

function buttonClickHandler(){
    let product : Product = {
        name:userInput,
        id:1,
        price:1,
        seller:1
    }
    postProduct(product);
}

return (<>
<h1>Submit a new product</h1>
<input onChange={userInputHandler} value={userInput}></input>
<button onClick={buttonClickHandler}>submit</button>
</>)
**/