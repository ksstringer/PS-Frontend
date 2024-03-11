const apiBaseURL = "http://localhost:9017/"
export function getAllProducts() {
    return fetch(apiBaseURL+"product",{
        method:"GET",
        mode:"cors"
    });
}
export function postProduct(){
    return fetch(apiBaseURL+"product", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({id:null, name:"", price:null, seller:null})
    })
}