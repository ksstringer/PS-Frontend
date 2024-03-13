import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../Models/Seller";
import { postSeller } from "../Services/SellerAPIService";

export function SellerSubmit() {
    const [userInput, setUserInput] = useState<string>("")
    function userInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }

    const [idInput, setIdInput] = useState<number>(0)
    function idInputHandler(event:SyntheticEvent){
        let idBox = event.target as HTMLInputElement;
        setIdInput(parseInt(idBox.value));
    }

    function buttonClickHandler(){
        let seller : Seller = {
            name:userInput,
            id:idInput
        }
        postSeller(seller);
    }
    
    return (<>
    <h2>Submit a new seller</h2>
    <label htmlFor="sellerName">Seller Name: </label>
    <input onChange={userInputHandler} value={userInput}></input> <br/>
    <label htmlFor="sellerId">Seller ID: </label>
    <input onChange={idInputHandler} value={idInput}></input><br/>
    <button onClick={buttonClickHandler}>Submit</button>
    </>)
}