const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log("Hago consulta - fetch")
    fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then(res => {
            console.log("res: ",res);
            document.getElementById("resultado").innerHTML=""
            valores = document.getElementById("resultado");
            document.getElementById("resultado").innerHTML=`<h1>${res.title}</h1><img src=${res.thumbnail} alt="imagen"><h2>${res.description}</h2><h3>Price: $${res.price}</h3>`
        })
        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")