const URL = "https://dummyjson.com/products?limit=0";

export async function getProducts(){
    const res = await fetch(URL);

    const data = await res.json();

    return data.products ; 
}