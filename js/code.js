function ConseguirProducto(producto){
    console.log(producto)
fetch(`https://dummyjson.com/products/search?q=${"iPhone"}`)
.then(res => res.json())
.then(json => console.log(json))
}