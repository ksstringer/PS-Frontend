import React from "react";
import { SellerList } from "../Components/SellerList";
import { SellerSubmit } from "../Components/SellerSubmit";
import { getAllSellers, postSeller } from "../Services/SellerAPIService";

export function SellerPage(){
    function logAllSeller(){
        getAllSellers()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    function postSellers(){
        postSeller()
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }
    return (
    <>
    <SellerList></SellerList>
    <SellerSubmit></SellerSubmit>
    <button onClick={postSeller}>test if i can post a seller</button>
    <button onClick={logAllSeller}>test i can get all seller</button>
    </>
        )
    }