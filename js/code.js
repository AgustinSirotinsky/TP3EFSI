function ConseguirProducto(){
    console.log("Hago consulta - fetch")
    var title=document.getElementById("title").value
    // var category=document.getElementById("category").value
	fetch(`https://dummyjson.com/products/search?q=${title}`)
        .then(res => res.json())
        .then(res => {
            document.getElementById("valores").innerHTML=""
            valores = document.getElementById("valores");
            res.products.forEach(product => {
                if (product.deletedOn=false){}
                else{
                item=document.createElement("li")
                // item.innerHTML=`<a href="DetalleProducto.html?id=${product.id}" target="_blank">${product.title}</a>`
                item.innerHTML=
                `
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${product.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="DetalleProducto.html?id=${product.id}" target="_blank" class="btn btn-primary">View info</a><hr>
                    <button type="button" class="btn btn-danger" onclick="EliminarProducto(${product.id})">Delete product</button>
                </div>
                </div>
                `
                valores.appendChild(item)
                }
            })
        })

        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")
}

function AgregarProducto(){
    console.log("Recibi Agregar producto")
    var title=document.getElementById("title").value
    var price=document.getElementById("price").value
    var description=document.getElementById("description").value
    console.log(`titulo: ${title}, precio: ${price}, descripcion: ${description}`)
    if(title==""||price==""||description==""){
        alert("¡Debe llenar todos los campos!")
    }
    else{
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            title: title,
            description: description,
            price: price
  })
})
.then(res => res.json())
.then(console.log);
window.location.href = "index.html";
    }
}

function EliminarProducto(id){
console.log(`Recibi eliminar producto ${id}`)
fetch(`https://dummyjson.com/products/${id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
}
// (function CargarCategorias(){
//     console.log("Cargo categorias")
//     fetch('https://dummyjson.com/products/categories')
//     .then(res => res.json())
//         .then(res => {
//             valores = document.getElementById("category");
//             res.products.forEach(category => {
//                 item=document.createElement("li")
//                 item.innerHTML=`${category.category}`
//                 valores.appendChild(item)
//             })
//         })
//         .catch(err => console.error("error", err))
//     console.log("Fin consulta - fetch")
// })();