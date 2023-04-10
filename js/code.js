fetch("http://www.omdbapi.com/?apikey=7b62fa5d")
.then(res => res.json())
.then(res => {
    console.log("obtuve respuesta")
    valores = document.getElementById("valores");
    res.forEach(actual => {
        if (actual.Title="Cars") {
            peli = document.createElement("li")
            peli.innerHTML = `Nombre: ${actual.Title}`
            valores.appendChild(peli)    
        }            
    })
})
.catch(err => console.error("error", err))