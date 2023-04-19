function ConseguirProducto(){
    console.log("Hago consulta - fetch")
    var producto=document.getElementById("producto").value
	fetch(`https://dummyjson.com/products/search?q=${producto}`)
        .then(res => res.json())
        .then(res => {
            console.log("obtuve respuesta",res.products)
            document.getElementById("valores").innerHTML=""
            valores = document.getElementById("valores");
            res.products.forEach(producto => {
                item=document.createElement("li")
                item.innerHTML=`Nombre: ${producto.title}`
                valores.appendChild(item)
            })
        })
        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")
}
