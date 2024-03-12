import React from "react";
import { SellerList } from "../Seller Components/SellerList";
import { SellerSubmit } from "../Seller Components/SellerSubmit";
import { getAllSellers, postSeller } from "../Services/SellerAPIService";

export function SellerPage(){
    function logAllSeller(){
        getAllSellers()
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }
    function postSellers(){
        postSeller({name: "New Seller", id:0 })
        .then(response => {return response.json()})
        .then(json => {console.log(json)})
        .catch(error => {console.log(error)})
    }
    return (
    <>
    <SellerList></SellerList>
    <SellerSubmit></SellerSubmit>
    <button onClick={postSellers}>test if i can post a seller</button>
    <button onClick={logAllSeller}>test i can get all seller</button>
    </>
        )
    }