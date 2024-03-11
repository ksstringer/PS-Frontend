const apiBaseURL = "http://localhost:9017/"
export function getAllSellers() {
    return fetch(apiBaseURL+"seller",{
        method:"GET",
        mode:"cors"
    });
}
export function postSeller(){
    return fetch(apiBaseURL+"seller", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:"", id:null})
    })
}