let icon= document.querySelectorAll(".bi")
let tituloInfo = document.querySelector("#tituloInfo")
let info = document.querySelector("#info")
let iconos = document.querySelector("#iconos")


icon.forEach(function(e, indice){
    
    e.addEventListener("click", function(){
        tituloInfo.innerHTML=e.getAttribute("data-title")
        info.innerHTML = e.getAttribute("data-value")
    })
    
})

// HABILIDADES

let habilidades = document.querySelectorAll(".habilidades")
let habilidad = document.querySelectorAll(".habilidad")

habilidades.forEach(function(e, indice){
    e.addEventListener("click", function(){
        habilidad[indice].classList.toggle("mostrar")
    })
    
})