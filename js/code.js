function ConseguirProducto(){
    var producto=document.getElementById("producto").value
fetch(`https://dummyjson.com/products/search?q=${producto}`)
.then(res => res.json())
.then(json => console.log(json))
.then(json=> console.log(json.title))
}