let url3="https://apiapto.herokuapp.com/api/v1/deudas"

let boton=document.getElementById("botonPago")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let valor=document.getElementById("valorPago").value
    let descripcion=document.getElementById("descripcionPago").value
    let fecha=new Date()

    let datos={
        "fecha":fecha,
        "valor":valor,
        "descripcion":descripcion
    }

    let parametrosPOST={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datos)
    }

    console.log(parametrosPOST)

    fetch(url3,parametrosPOST)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
        alert("Exito en el registro: Ya casi...")
        window.location.href="deuda.html"
    })
    .catch(function(respuesta){
        alert("Tenemos problemas... ")
        
    })

   

  
   
   
   


})

