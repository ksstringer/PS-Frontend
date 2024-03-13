import React from "react";
import { SellerList } from "../Seller Components/SellerList";
import { SellerSubmit } from "../Seller Components/SellerSubmit";
import { getAllSellers, postSeller } from "../Services/SellerAPIService";

export function SellerPage(){

    return (
    <>
    <h1>Your Seller List</h1>
    <SellerList></SellerList>
    <SellerSubmit></SellerSubmit>
    </>
        )
    }