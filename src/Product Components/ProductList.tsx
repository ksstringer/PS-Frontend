import React, { useEffect, useState } from "react";
import { Product } from "../Models/Product";
import { getAllProducts } from "../Services/ProductAPIService";
import { SingleProduct } from "./SingleProduct";

export function ProductList() {
    const [allProducts, setAllProducts] = useState<Product[]>([])

    useEffect(()=>{
        getAllProducts()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllProducts(json);
        });
    
    }, []);

    return (<>
    {allProducts.map(product =>{return <SingleProduct key={product.id} data={product}></SingleProduct>})}
    </>);

}