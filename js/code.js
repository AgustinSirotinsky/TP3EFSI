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
                item=document.createElement("li")
                // item.innerHTML=`<a href="DetalleProducto.html?id=${product.id}" target="_blank">${product.title}</a>`
                item.innerHTML=
                `
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${product.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="DetalleProducto.html?id=${product.id}" target="_blank" class="btn btn-primary">${product.title}</a>
                </div>
                </div>
                `
                valores.appendChild(item)
            })
        })
        .catch(err => console.error("error", err))
    console.log("Fin consulta - fetch")
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