import { Product } from "../Models/Product";

const apiBaseURL = "http://localhost:9017/"
export function getAllProducts() {
    return fetch(apiBaseURL+"product",{
        method:"GET",
        mode:"cors"
    });
}

export function postProduct(product : Product){
    return fetch(apiBaseURL+"product", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    });
}

export function deleteProduct(productID: number | undefined){
    return fetch(apiBaseURL+"product/"+productID, {
        method:"DELETE",
        mode:"cors",
        headers:{"Content-Type":"application/json"}
    });   
}

export function updateProduct(product: Product, productID: number | undefined){
    return fetch(apiBaseURL+"product/"+productID, {
        method:"PUT",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    });   
}