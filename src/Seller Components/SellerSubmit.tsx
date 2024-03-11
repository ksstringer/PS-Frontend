import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../Models/Seller";
import { postSeller } from "../Services/SellerAPIService";

export function SellerSubmit() {
    const [userInput, setUserInput] = useState<string>("")
    function userInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    function buttonClickHandler(){
        let seller : Seller = {
            name:userInput,
            id:1
        }
        postSeller();
    }
    
    return (<>
    <h1>Submit a new seller</h1>
    <input onChange={userInputHandler} value={userInput}></input>
    <button onClick={buttonClickHandler}>submit</button>
    </>)
}