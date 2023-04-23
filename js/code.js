function ConseguirProducto(){
    console.log("Hago consulta - fetch")
    var title=document.getElementById("title").value
    // var category=document.getElementById("category").value
	fetch(`https://dummyjson.com/products/search?q=${title}`)
        .then(res => res.json())
        .then(res => {
            console.log("obtuve respuesta",res.products)
            document.getElementById("valores").innerHTML=""
            valores = document.getElementById("valores");
            res.products.forEach(title => {
                item=document.createElement("li")
                item.innerHTML=`Nombre: ${title.title}`
                valores.appendChild(item)
            })
        })
        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")
}
(function CargarCategorias(){
    console.log("Cargo categorias")
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(console.log);
})();