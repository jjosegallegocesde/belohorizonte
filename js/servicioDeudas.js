let url="https://apiapto.herokuapp.com/api/v1/deudas"
let url2="https://apiapto.herokuapp.com/API/v1/deudas/general/62574f89bf56274dcb1a61ab"

let parametros={
    method:"GET"
}

async function conectarAPIGeneral(){
    let respuesta= await fetch(url2,parametros)
    let global=await respuesta.json()
    return global
}

async function conectarAPI(){
    let respuesta= await fetch(url,parametros)
    let deudas=await respuesta.json()
    return deudas
}


let monto=await conectarAPIGeneral()
let etiquetaMonto=document.getElementById("monto")
etiquetaMonto.textContent="Monto actual de la deuda: $"+numberWithCommas(monto.data.valor)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


let respuesta=await conectarAPI()
let fila=document.getElementById("fila")
console.log(respuesta)
respuesta.data.forEach(function(cuota){


   let columna=document.createElement("div")
   columna.classList.add("col","mb-5")

   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card","h-100","p-3", "mt-5")

   let foto=document.createElement("img")
   foto.classList.add("img-fluid")
   foto.src="img/cash-flow.png"

   let titulo=document.createElement("h5")
   titulo.classList.add("card-title","my-3")
   titulo.textContent="Descripción: "+cuota.descripcion

   let fecha=document.createElement("p")
   fecha.classList.add("card-text")
   let fechaFormato=cuota.fecha.split("T")
   fecha.textContent="Fecha Pago: "+fechaFormato[0]

   let valor=document.createElement("p")
   valor.classList.add("card-text")
   valor.textContent="Valor Pago: $"+numberWithCommas(cuota.valor)

   tarjeta.appendChild(foto)
   tarjeta.appendChild(titulo)
   tarjeta.appendChild(fecha)
   tarjeta.appendChild(valor)
   columna.appendChild(tarjeta)
   fila.appendChild(columna)

})
