const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

function ActualizarProducto(){
    console.log("Recibi Actualizar producto")
    var title=document.getElementById("title").value
    var price=document.getElementById("price").value
    var description=document.getElementById("description").value
    fetch(`https://dummyjson.com/products/${params.id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: title,
    price: price,
    description: description
  })
})
.then(res => res.json())
.then(console.log);
window.location.href = "index.html";
}